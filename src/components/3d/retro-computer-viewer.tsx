"use client";

import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Component để load và render model
function RetroComputerModel() {
  const { scene } = useGLTF("/assets/retro_computer/scene.gltf");
  const meshRef = useRef<THREE.Group>(null);

  // Điều chỉnh materials để không bị trong suốt
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        // Nếu material là array, xử lý từng material
        const materials = Array.isArray(child.material) 
          ? child.material 
          : [child.material];
        
        materials.forEach((material) => {
          // Xử lý tất cả loại material (Standard, Physical, Phong, etc.)
          if (material instanceof THREE.Material) {
            // Đặt transparent = false để không bị trong suốt
            material.transparent = false;
            material.opacity = 1.0;
            material.depthWrite = true;
            // Cập nhật material để áp dụng thay đổi
            material.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);

  // Animation xoay nhẹ tự động
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1; // Xoay chậm
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={scene} 
      scale={1} // Điều chỉnh kích thước phù hợp với card
      position={[0, 0, 0]} // Điều chỉnh vị trí
    />
  );
}

// Preload model
useGLTF.preload("/assets/retro_computer/scene.gltf");

// Component chính - viewer nhỏ gọn
export function RetroComputerViewer() {
  return (
    <div className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[260px] md:w-[260px] lg:h-[300px] lg:w-[300px]">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        gl={{ 
          alpha: true, // Bật alpha để có background transparent
          antialias: true,
          depth: true,
          stencil: false
        }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Ánh sáng */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, -5, -5]} intensity={0.4} />
          
          {/* Model 3D */}
          <RetroComputerModel />
          
          {/* Cho phép user xoay model bằng chuột (tùy chọn) */}
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

