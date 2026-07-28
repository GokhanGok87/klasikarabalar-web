"use client";

import { useEffect } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";

export function AnimatedFavicon() {
  useEffect(() => {
    let animationId: ReturnType<typeof setInterval>;
    let frames: { data: ImageData; delay: number }[] = [];
    let currentIndex = 0;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    async function loadGif() {
      try {
        const response = await fetch("/favicon.gif");
        const buffer = await response.arrayBuffer();

        const parsedGif = parseGIF(buffer);
        const parsedFrames = decompressFrames(parsedGif, true);

        for (const frame of parsedFrames) {
          const imageData = ctx!.createImageData(
            frame.dims.width,
            frame.dims.height
          );
          imageData.data.set(frame.patch);
          // delay is in centiseconds (1/100s), convert to ms
          // default to 100ms if delay is 0 or invalid
          const delayMs = frame.delay > 0 ? frame.delay * 10 : 100;
          frames.push({ data: imageData, delay: delayMs });
        }

        if (frames.length <= 1) {
          // Single frame - just set static favicon
          if (frames.length === 1) {
            const frame = frames[0];
            canvas.width = frame.data.width;
            canvas.height = frame.data.height;
            ctx!.putImageData(frame.data, 0, 0);
            updateFavicon(canvas.toDataURL("image/png"));
          }
          return;
        }

        const drawFrame = () => {
          const frame = frames[currentIndex];
          canvas.width = frame.data.width;
          canvas.height = frame.data.height;
          ctx!.putImageData(frame.data, 0, 0);
          updateFavicon(canvas.toDataURL("image/png"));
          currentIndex = (currentIndex + 1) % frames.length;
        };

        // Draw first frame immediately
        drawFrame();

        // Use the delay from the first frame, with a minimum of 50ms
        const intervalMs = Math.max(frames[0].delay, 50);
        animationId = setInterval(drawFrame, intervalMs);
      } catch (error) {
        console.error("AnimatedFavicon: Failed to load GIF:", error);
      }
    }

    function updateFavicon(href: string) {
      let link = document.querySelector<HTMLLinkElement>('link[rel*="icon"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      // Add timestamp to force browser to refresh
      link.href = href;
    }

    loadGif();

    return () => {
      if (animationId) clearInterval(animationId);
    };
  }, []);

  return null;
}
