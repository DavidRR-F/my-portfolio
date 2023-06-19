import CanvasModel from "@/components/canvas/CanvasModel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className=" w-2/4 head-text">
        David
        <br /> Rose-Franklin
      </h1>
      <CanvasModel />
    </main>
  );
}
