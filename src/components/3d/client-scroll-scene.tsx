"use client";

import dynamic from "next/dynamic";

const ScrollScene3D = dynamic(
  () => import("@/components/3d/scroll-scene").then((mod) => ({ default: mod.ScrollScene })),
  { ssr: false }
);

export function ClientScrollScene() {
  return <ScrollScene3D />;
}
