"use client";

import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PlaceholderBurger, type MouseRef } from "@/components/PlaceholderBurger";

export function BurgerCanvas({ mouseRef }: { mouseRef: MouseRef }) {
  return (
    <div className="mx-auto h-[min(55vh,520px)] w-full max-w-lg">
      <Canvas
        shadows
        camera={{ position: [0, 0.35, 2.45], fov: 40 }}
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.38} />
        <spotLight
          position={[3.2, 4.2, 4.2]}
          angle={0.32}
          penumbra={1}
          intensity={1.15}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
        <PlaceholderBurger mouseRef={mouseRef} />
        <ContactShadows
          position={[0, -0.38, 0]}
          opacity={0.42}
          scale={9}
          blur={2.4}
          far={3.5}
        />
      </Canvas>
    </div>
  );
}
