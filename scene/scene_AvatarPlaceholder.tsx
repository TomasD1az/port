// scene/AvatarPlaceholder.tsx
"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function AvatarPlaceholder() {
  // A simple sphere that slowly bobs to indicate the player avatar.
  const ref = useRef<Mesh | null>(null);
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.set(Math.sin(t * 0.6) * 2, 0.6 + Math.sin(t * 2) * 0.05, 0);
      ref.current.rotation.y = Math.sin(t * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[0.6, 24, 24]} />
      <meshStandardMaterial color="#f6b042" />
    </mesh>
  );
}