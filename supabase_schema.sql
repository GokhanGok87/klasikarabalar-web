-- ============================================================
-- car.info Brand Scraping - Supabase Schema
-- Bu SQL kodunu Supabase SQL Editor'da çalıştır
-- ============================================================

-- 1. car_brands tablosu
CREATE TABLE IF NOT EXISTS public.car_brands (
  id SERIAL PRIMARY KEY,
  brand_name TEXT NOT NULL,
  brand_slug TEXT UNIQUE,
  logo_url TEXT,
  logo_storage_path TEXT,
  country_code VARCHAR(2),
  country_name TEXT,
  flag_url TEXT,
  year_start INTEGER,
  year_end INTEGER,
  registered_cars_short TEXT,
  registered_cars_full TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_car_brands_country ON car_brands(country_code);
CREATE INDEX IF NOT EXISTS idx_car_brands_name ON car_brands(brand_name);

-- RLS
ALTER TABLE public.car_brands ENABLE ROW LEVEL SECURITY;

-- Herkes okuyabilir
CREATE POLICY "Brands are viewable by everyone" ON public.car_brands
  FOR SELECT USING (true);

-- Sadece service_role yazabilir
CREATE POLICY "Only service role can insert brands" ON public.car_brands
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Only service role can update brands" ON public.car_brands
  FOR UPDATE USING (true);

-- 2. updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_car_brands_updated_at ON public.car_brands;
CREATE TRIGGER set_car_brands_updated_at
  BEFORE UPDATE ON public.car_brands
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
