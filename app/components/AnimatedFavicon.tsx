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

    const link =
      document.querySelector<HTMLLinkElement>('link[rel*="icon"]') ||
      document.createElement("link");
    link.rel = "icon";
    if (!link.parentNode) {
      document.head.appendChild(link);
    }

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
          frames.push({ data: imageData, delay: frame.delay });
        }

        if (frames.length > 1) {
          const drawFrame = () => {
            const frame = frames[currentIndex];
            canvas.width = frame.data.width;
            canvas.height = frame.data.height;
            ctx!.putImageData(frame.data, 0, 0);
            link.href = canvas.toDataURL("image/png");
            currentIndex = (currentIndex + 1) % frames.length;
          };

          drawFrame();
          animationId = setInterval(drawFrame, frames[0].delay * 10);
        } else if (frames.length === 1) {
          const frame = frames[0];
          canvas.width = frame.data.width;
          canvas.height = frame.data.height;
          ctx!.putImageData(frame.data, 0, 0);
          link.href = canvas.toDataURL("image/png");
        }
      } catch (error) {
        console.error("Failed to load animated favicon:", error);
      }
    }

    loadGif();

    return () => {
      if (animationId) clearInterval(animationId);
    };
  }, []);

  return null;
}
