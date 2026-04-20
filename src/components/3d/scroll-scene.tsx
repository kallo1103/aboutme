/* eslint-disable react-hooks/purity, react-hooks/immutability */
"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Particles({ count = 60 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      temp.push({
        position: [r * Math.sin(phi) * Math.cos(theta), r * Math.sin(phi) * Math.sin(theta), r * Math.cos(phi)] as [number, number, number],
        speed: 0.2 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
        scale: 0.02 + Math.random() * 0.04,
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(t * p.speed + p.offset) * 0.3,
        p.position[1] + Math.cos(t * p.speed + p.offset) * 0.3,
        p.position[2] + Math.sin(t * p.speed * 0.5 + p.offset) * 0.2
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#a78bfa" transparent opacity={0.6} />
    </instancedMesh>
  );
}

function GeometricSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const icoRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.y = t * 0.08;
    if (icoRef.current) { icoRef.current.rotation.x = t * 0.15; icoRef.current.rotation.z = t * 0.1; }
    if (torusRef.current) { torusRef.current.rotation.x = t * 0.2; torusRef.current.rotation.y = t * 0.12; }
    if (octaRef.current) { octaRef.current.rotation.y = t * 0.18; octaRef.current.rotation.z = t * 0.1; octaRef.current.position.y = Math.sin(t * 0.5) * 0.3 - 0.8; }
  });

  const accentSpheres = [
    { pos: [2.5, -1.2, 1] as [number, number, number], color: "#34d399", s: 0.25 },
    { pos: [-2.2, 1.5, -1] as [number, number, number], color: "#fbbf24", s: 0.2 },
    { pos: [0.5, 2, 1.5] as [number, number, number], color: "#fb923c", s: 0.18 },
  ];

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={icoRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial color="#8b5cf6" metalness={0.95} roughness={0.05} clearcoat={1} clearcoatRoughness={0.1} envMapIntensity={2} transparent opacity={0.85} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.4}>
        <mesh ref={torusRef} position={[1.8, 0.5, -0.5]}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
          <meshPhysicalMaterial color="#06b6d4" metalness={0.9} roughness={0.08} clearcoat={0.8} clearcoatRoughness={0.15} envMapIntensity={1.8} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={octaRef} position={[-1.5, -0.8, 0.5]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshPhysicalMaterial color="#f472b6" metalness={0.92} roughness={0.06} clearcoat={1} clearcoatRoughness={0.08} envMapIntensity={2.2} />
        </mesh>
      </Float>
      {accentSpheres.map((item, i) => (
        <Float key={i} speed={2.5} rotationIntensity={0.2} floatIntensity={0.8}>
          <mesh position={item.pos}>
            <sphereGeometry args={[item.s, 16, 16]} />
            <meshPhysicalMaterial color={item.color} metalness={0.9} roughness={0.1} clearcoat={1} envMapIntensity={2} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ScrollCamera() {
  const { camera } = useThree();
  const progressRef = useRef({ value: 0 });

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "main",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate: (self) => { progressRef.current.value = self.progress; },
    });
  }, []);

  useFrame(() => {
    const p = progressRef.current.value;
    camera.position.x = Math.sin(p * Math.PI) * 1.5;
    camera.position.y = p * 2 - 1;
    camera.position.z = 6 - p * 1.5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function ScrollScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" style={{ opacity: 0.3 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }} dpr={[1, 1.25]} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#e0d4ff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />
          <pointLight position={[0, 5, 0]} intensity={0.8} color="#f472b6" />
          <pointLight position={[3, -3, 3]} intensity={0.4} color="#34d399" />
          <GeometricSculpture />
          <Particles count={30} />
          <ScrollCamera />
        </Suspense>
      </Canvas>
    </div>
  );
}
