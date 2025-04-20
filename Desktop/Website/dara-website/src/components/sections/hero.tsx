import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      <div className="container relative pt-16 md:pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Innovative
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                  {" "}Mechanical Design
                </span>
                {" "}Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-[600px]">
                Dara helps companies accelerate product development with AI-enhanced design tools and expertise in automotive parts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {/* We'll use icons as placeholders for partner logos */}
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-white">
                  <span className="text-blue-700 text-xs font-bold">A</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-white">
                  <span className="text-blue-700 text-xs font-bold">B</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-white">
                  <span className="text-blue-700 text-xs font-bold">C</span>
                </div>
              </div>
              <span>Trusted by innovative companies worldwide</span>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/automotive-wireframe.jpg"
              fill
              style={{ objectFit: "cover" }}
              alt="3D CAD model of automotive design"
              className="rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center">
          <div className="animate-bounce bg-white dark:bg-gray-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
