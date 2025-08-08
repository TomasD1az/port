// scene/StadiumPlaceholder.tsx
"use client";

export default function StadiumPlaceholder() {
  // Minimal stadium-like geometry: a big flattened plane as "field" and
  // a few simple stands as raised boxes. Placeholder until GLB is loaded.
  return (
    <group>
      {/* Field */}
      <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0, 0]}>
        <planeGeometry args={[18, 28]} />
        <meshStandardMaterial color="#2aa72a" />
      </mesh>

      {/* Simple stands - north */}
      <mesh position={[0, 2, -12]}>
        <boxGeometry args={[18, 4, 4]} />
        <meshStandardMaterial color="#d9d9d9" />
      </mesh>

      {/* south stands */}
      <mesh position={[0, 2, 12]}>
        <boxGeometry args={[18, 4, 4]} />
        <meshStandardMaterial color="#d9d9d9" />
      </mesh>

      {/* scoreboard (simple) */}
      <mesh position={[0, 7, -10]}>
        <boxGeometry args={[6, 2.2, 0.6]} />
        <meshStandardMaterial emissive="#111111" color="#111111" />
      </mesh>
    </group>
  );
}