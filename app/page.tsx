import Animate from "@/components/animation/Animate";
import Landing from "@/sections/Landing";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <div className="flex justify-center items-center w-screen h-screen">
        <Animate direction="up">
          <h1>Hello World</h1>
        </Animate>
      </div>
    </main>
  );
}
