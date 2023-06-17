"use client";
import { useStateContext } from "@/components/Providers";
import CanvasModel from "@/components/canvas/CanvasModel";

export default function Home() {
  const { activeMenu } = useStateContext();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CanvasModel />
    </main>
  );
}
