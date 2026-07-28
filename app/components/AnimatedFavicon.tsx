"use client";

import { useEffect } from "react";
import { parseGIF, decompressFrames } from "gifuct-js";

export function AnimatedFavicon() {
  useEffect(() => {
    let animationId: ReturnType<typeof setInterval>;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Remove all existing favicon links
    document.querySelectorAll('link[rel*="icon"]').forEach((el) => el.remove());

    // Create fresh favicon link
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    document.head.appendChild(link);

    async function loadGif() {
      try {
        const response = await fetch("/favicon.gif");
        const buffer = await response.arrayBuffer();

        const parsedGif = parseGIF(buffer);
        const parsedFrames = decompressFrames(parsedGif, true);

        if (parsedFrames.length === 0) return;

        const frames: { data: ImageData; delay: number }[] = [];

        for (const frame of parsedFrames) {
          const imageData = ctx!.createImageData(
            frame.dims.width,
            frame.dims.height
          );
          imageData.data.set(frame.patch);
          // GIF delay is in centiseconds (1/100s), convert to ms
          const delayMs = frame.delay > 0 ? frame.delay * 10 : 100;
          frames.push({ data: imageData, delay: delayMs });
        }

        let currentIndex = 0;

        const drawFrame = () => {
          const frame = frames[currentIndex];
          canvas.width = frame.data.width;
          canvas.height = frame.data.height;
          ctx!.clearRect(0, 0, canvas.width, canvas.height);
          ctx!.putImageData(frame.data, 0, 0);
          link.href = canvas.toDataURL("image/png");
          currentIndex = (currentIndex + 1) % frames.length;
        };

        // Draw first frame immediately
        drawFrame();

        // If more than one frame, animate
        if (frames.length > 1) {
          // Use average delay, minimum 50ms
          const avgDelay = Math.max(
            frames.reduce((sum, f) => sum + f.delay, 0) / frames.length,
            50
          );
          animationId = setInterval(drawFrame, avgDelay);
        }
      } catch (error) {
        console.error("AnimatedFavicon error:", error);
      }
    }

    loadGif();

    return () => {
      if (animationId) clearInterval(animationId);
    };
  }, []);

  return null;
}
