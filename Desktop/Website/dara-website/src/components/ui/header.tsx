"use client";

import * as React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">Dara</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#approach"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Our Approach
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex">
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="#services"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#approach"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                Our Approach
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Button className="mt-4" asChild>
                <Link href="#contact">Get Started</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
