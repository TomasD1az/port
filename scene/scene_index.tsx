// scene/index.tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import StadiumPlaceholder from "./StadiumPlaceholder";
import AvatarPlaceholder from "./AvatarPlaceholder";

/**
 * Very small R3F scene to confirm rendering works.
 * Replace StadiumPlaceholder / AvatarPlaceholder with GLTF loaders later.
 */
export function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 6, 12], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.0} castShadow />
      <Suspense fallback={null}>
        <StadiumPlaceholder />
        <AvatarPlaceholder />
        {/* OrbitControls only for development; will be replaced by third-person rig */}
        <OrbitControls maxPolarAngle={Math.PI / 2.2} />
      </Suspense>
      <Stats showPanel={0} className="r3f-stats" />
    </Canvas>
  );
}

export default Scene;