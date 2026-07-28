"use client";

import { useEffect, useState } from "react";

export function SpeedGauge() {
  const [animate, setAnimate] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    if (!mq.matches) {
      const timer = setTimeout(() => setAnimate(true), 400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <svg viewBox="0 0 300 300" width="300" height="300">
        {/* Outer circle */}
        <circle
          cx="150"
          cy="150"
          r="146"
          fill="#1A1712"
          stroke="#3A342A"
          strokeWidth="2"
        />
        <circle
          cx="150"
          cy="150"
          r="128"
          fill="none"
          stroke="#2A251E"
          strokeWidth="1"
        />

        {/* Minor ticks */}
        <g stroke="#6E6656" strokeWidth="2">
          {[-125, -104, -83, -63, -42, -21, 0, 21, 42, 63].map((angle) => (
            <line
              key={angle}
              x1="150"
              y1="22"
              x2="150"
              y2="34"
              transform={`rotate(${angle} 150 150)`}
            />
          ))}
        </g>

        {/* Redline ticks */}
        <g stroke="#BE4430" strokeWidth="3">
          {[83, 104, 125].map((angle) => (
            <line
              key={angle}
              x1="150"
              y1="20"
              x2="150"
              y2="36"
              transform={`rotate(${angle} 150 150)`}
            />
          ))}
        </g>

        {/* Numerals */}
        <g
          fill="#ECE4D3"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="13"
          textAnchor="middle"
        >
          <g transform="rotate(-125 150 150)">
            <text x="150" y="52" transform="rotate(125 150 52)">
              0
            </text>
          </g>
          <g transform="rotate(-83 150 150)">
            <text x="150" y="52" transform="rotate(83 150 52)">
              40
            </text>
          </g>
          <g transform="rotate(-42 150 150)">
            <text x="150" y="52" transform="rotate(42 150 52)">
              80
            </text>
          </g>
          <g transform="rotate(0 150 150)">
            <text x="150" y="52">
              120
            </text>
          </g>
          <g transform="rotate(42 150 150)">
            <text x="150" y="52" transform="rotate(-42 150 52)">
              160
            </text>
          </g>
          <g transform="rotate(83 150 150)">
            <text x="150" y="52" transform="rotate(-83 150 52)" fill="#D98D6A">
              200
            </text>
          </g>
          <g transform="rotate(125 150 150)">
            <text x="150" y="52" transform="rotate(-125 150 52)" fill="#D98D6A">
              240
            </text>
          </g>
        </g>

        {/* Needle */}
        <g
          className={`origin-[150px_150px] ${
            reducedMotion
              ? ""
              : animate
                ? "animate-[needleSweep_3.4s_cubic-bezier(.2,.9,.25,1)_forwards]"
                : ""
          }`}
          style={{
            transform: reducedMotion
              ? "rotate(70deg)"
              : animate
                ? undefined
                : "rotate(-125deg)",
          }}
        >
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="40"
            stroke="#C6813F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="176"
            stroke="#C6813F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Center cap */}
        <circle
          cx="150"
          cy="150"
          r="9"
          fill="#1A1712"
          stroke="#C6813F"
          strokeWidth="2"
        />

        {/* KM/H label */}
        <text
          x="150"
          y="200"
          textAnchor="middle"
          fill="#8A9089"
          fontFamily="var(--font-jetbrains), monospace"
          fontSize="10"
          letterSpacing="2"
        >
          KM/H
        </text>
      </svg>
      <p className="font-mono text-xs tracking-wider uppercase text-cream-dim text-center max-w-[30ch]">
        Tutku her zaman <b className="text-redline font-medium">kırmızı bölgede</b>.
      </p>
      <style jsx>{`
        @keyframes needleSweep {
          0% {
            transform: rotate(-125deg);
          }
          55% {
            transform: rotate(118deg);
          }
          75% {
            transform: rotate(58deg);
          }
          100% {
            transform: rotate(70deg);
          }
        }
      `}</style>
    </div>
  );
}