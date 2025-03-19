import { Hero, Footer, Aurora } from "@/components";

export default function Home() {
  return (
    <>
      <div className={"absolute h-screen w-screen"}>
        <div className={"w-full h-full z-0"}>
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.2}
          />
        </div>
      </div>
      <div className="z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="w-100% flex flex-col gap-4 row-start-2 items-center sm:items-start">
          <Hero />
        </main>
        <footer className="z-10 animate-hero-fade-in-footer row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Footer />
        </footer>
      </div>
    </>
  );
}
