"use client";

import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type MutableRefObject } from "react";
import type { Group } from "three";
import * as THREE from "three";

export type MouseRef = MutableRefObject<{ x: number; y: number }>;

export function PlaceholderBurger({ mouseRef }: { mouseRef: MouseRef }) {
  const group = useRef<Group>(null);

  useFrame(() => {
    const g = group.current;
    if (!g) return;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const targetX = my * 0.22;
    const targetY = mx * 0.22;
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.08);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.08);
    const t = performance.now() * 0.001;
    g.position.y = Math.sin(t * 0.9) * 0.035;
  });

  return (
    <group ref={group} castShadow>
      <RoundedBox args={[0.92, 0.16, 0.92]} radius={0.07} smoothness={4} castShadow position={[0, -0.22, 0]}>
        <meshStandardMaterial color="#c99156" roughness={0.55} metalness={0.06} />
      </RoundedBox>
      <RoundedBox args={[0.95, 0.12, 0.95]} radius={0.05} smoothness={4} castShadow position={[0, -0.08, 0]}>
        <meshStandardMaterial color="#5c3d2e" roughness={0.65} metalness={0.12} />
      </RoundedBox>
      <RoundedBox args={[0.9, 0.14, 0.9]} radius={0.06} smoothness={4} castShadow position={[0, 0.06, 0]}>
        <meshStandardMaterial color="#e7bc7a" roughness={0.45} metalness={0.04} />
      </RoundedBox>
      <RoundedBox args={[0.88, 0.1, 0.88]} radius={0.05} smoothness={4} castShadow position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#d1a068" roughness={0.5} metalness={0.05} />
      </RoundedBox>
    </group>
  );
}
