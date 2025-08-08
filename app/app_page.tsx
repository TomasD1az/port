// app/page.tsx
"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Scene is a client-only component (react-three-fiber)
const Scene = dynamic(() => import("../scene").then(m => m.Scene), {
  ssr: false
});

/**
 * Minimal detection:
 * - prefers-reduced-motion -> fallback to 2D
 * - WebGL2 support -> require it for 3D
 */
export default function Page() {
  const [canRun3D, setCanRun3D] = useState<boolean | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasWebGL2 = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(canvas.getContext && canvas.getContext("webgl2"));
      } catch {
        return false;
      }
    })();

    setCanRun3D(!prefersReduced && !!hasWebGL2);
  }, []);

  if (canRun3D === null) {
    return <div className="p-6">Checking capabilities…</div>;
  }

  if (!canRun3D) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-2xl font-bold mb-2">2D Fallback — Football Portfolio</h1>
          <p className="mb-4">
            Your device or browser requested reduced motion or does not support WebGL2.
            The accessible 2D version of the portfolio loads instead.
          </p>
          <a
            className="inline-block px-4 py-2 bg-brand-500 text-white rounded hover:opacity-90"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.reload();
            }}
          >
            Try 3D anyway
          </a>
        </div>
      </main>
    );
  }

  return (
    <div className="w-full h-screen">
      <Scene />
    </div>
  );
}