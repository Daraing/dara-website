import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}
