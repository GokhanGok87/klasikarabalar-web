/**
 * car.info Brand Scraper
 *
 * https://www.car.info/en-se/brands?page=1 to page=32
 * ~1,270 brands total (40 per page)
 *
 * Usage: npm run scrape (from scripts/ dir)
 */

import { config } from "dotenv";
import { resolve } from "path";

// Load .env.local from project root
config({ path: resolve(process.cwd(), ".env.local") });

import * as cheerio from "cheerio";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const BASE = "https://www.car.info";
const TOTAL_PAGES = 32;
const DELAY_MS = 600;

interface BrandData {
  brand_name: string;
  brand_slug: string;
  logo_url: string | null;
  logo_storage_path: string | null;
  country_code: string | null;
  country_name: string | null;
  flag_url: string | null;
  year_start: number | null;
  year_end: number | null;
  registered_cars_short: string | null;
  registered_cars_full: string | null;
}

function pickSlug(href: string): string {
  // "/en-se/volvo" → "volvo"
  const parts = href.replace(/\/$/, "").split("/");
  return parts[parts.length - 1];
}

function parseYear(text: string): { year_start: number | null; year_end: number | null } {
  const cleaned = text.replace(/\s+/g, " ").trim();
  const match = cleaned.match(/(\d{4})\s*[-–—]?\s*(\d{4})?/);
  if (!match) return { year_start: null, year_end: null };
  return {
    year_start: parseInt(match[1], 10),
    year_end: match[2] ? parseInt(match[2], 10) : null,
  };
}

async function fetchPage(page: number): Promise<string> {
  const url = page === 1 ? `${BASE}/en-se/brands` : `${BASE}/en-se/brands?page=${page}`;
  console.log(`  Fetching: ${url}`);
  const res = await fetch(url, {
    headers: { "User-Agent": "klasikarabalar-scraper/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on page ${page}`);
  return res.text();
}

function parseBrands(html: string): BrandData[] {
  const $ = cheerio.load(html);
  const brands: BrandData[] = [];

  $("div.brand_item.list_item").each((_i, el) => {
    const $el = $(el);

    // Brand name + slug
    const $name = $el.find("a.brand_name.text-body.fw-bold").first();
    const brand_name = $name.text().trim();
    const href = $name.attr("href") || "";
    const brand_slug = pickSlug(href);

    // Logo
    const $logoLink = $el.find("div.brand_logo a.brand_logo_image").first();
    let logo_url: string | null = null;
    if ($logoLink.length) {
      const style = $logoLink.attr("style") || "";
      const urlMatch = style.match(/url\(['"]?([^'")]+)['"]?\)/);
      logo_url = urlMatch ? urlMatch[1] : null;
    }

    // Country
    const $tooltip = $el.find("div.tooltip_box.tooltip_topleft").first();
    const country_code = $tooltip.attr("data-country") || null;
    const $flag = $tooltip.find("img.flag_shadow").first();
    const flag_url = $flag.attr("src") || null;
    const country_name = $flag.attr("alt") || null;

    // Years
    const yearRaw = $el.find("div.brand_year").first().text();
    const { year_start, year_end } = parseYear(yearRaw);

    // Registered count
    const $countTooltip = $el.find("div.tooltip_box.tooltip_topright").first();
    const fullText = $countTooltip.find("span.tooltiptext").text().trim() || null;
    let registered_cars_full: string | null = fullText || null;
    let registered_cars_short: string | null = null;

    if ($countTooltip.length) {
      const rawText = $countTooltip
        .contents()
        .filter((_: number, node: cheerio.AnyNode) => node.type === "text")
        .text()
        .trim();
      registered_cars_short = rawText || null;
    }

    brands.push({
      brand_name,
      brand_slug,
      logo_url,
      logo_storage_path: null, // will be set after upload
      country_code,
      country_name,
      flag_url,
      year_start,
      year_end,
      registered_cars_short,
      registered_cars_full,
    });
  });

  return brands;
}

async function uploadLogo(brand: BrandData): Promise<string | null> {
  if (!brand.logo_url) return null;

  const storagePath = `brand-logos/${brand.brand_slug}.jpg`;

  // Check if already exists
  const { data: existing } = await supabase.storage
    .from("brand-logos")
    .createSignedUrl(storagePath, 60);

  if (existing?.signedUrl) {
    return storagePath;
  }

  try {
    const imgRes = await fetch(brand.logo_url);
    if (!imgRes.ok) return null;
    const buffer = await imgRes.arrayBuffer();

    const { error } = await supabase.storage
      .from("brand-logos")
      .upload(storagePath, new Uint8Array(buffer), {
        contentType: "image/jpeg",
        upsert: true,
      });

    if (error) {
      console.error(`    Upload error for ${brand.brand_name}: ${error.message}`);
      return null;
    }

    return storagePath;
  } catch (err: any) {
    console.error(`    Network error for ${brand.brand_name}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log("=== car.info Brand Scraper ===\n");
  console.log(`Pages: ${TOTAL_PAGES} | Delay: ${DELAY_MS}ms\n`);

  let total = 0;
  let totalLogos = 0;

  for (let page = 1; page <= TOTAL_PAGES; page++) {
    console.log(`\n--- Page ${page}/${TOTAL_PAGES} ---`);

    const html = await fetchPage(page);
    const brands = parseBrands(html);
    console.log(`  Parsed: ${brands.length} brands`);

    for (const brand of brands) {
      // Upload logo
      const storagePath = await uploadLogo(brand);
      if (storagePath) {
        brand.logo_storage_path = storagePath;
        totalLogos++;
      }

      // Upsert into DB (slug is unique)
      const { error } = await supabase
        .from("car_brands")
        .upsert(brand, { onConflict: "brand_slug", ignoreDuplicates: false });

      if (error) {
        console.error(`  DB error for ${brand.brand_name}: ${error.message}`);
      } else {
        total++;
      }
    }

    // Rate limit
    if (page < TOTAL_PAGES) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }

  console.log(`\n=== Done ===`);
  console.log(`Total brands written to DB: ${total}`);
  console.log(`Logos uploaded: ${totalLogos}`);
}

main().catch(console.error);
