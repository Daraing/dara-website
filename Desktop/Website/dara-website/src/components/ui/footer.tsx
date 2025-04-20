import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-bold">
              Dara
            </Link>
            <p className="text-gray-400 max-w-md">
              Innovative mechanical design services for automotive parts, powered by AI and
              engineering expertise.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link href="#services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#approach" className="hover:text-white transition-colors">
                Our Approach
              </Link>
              <Link href="#contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <address className="not-italic flex flex-col space-y-2 text-gray-400">
              <p>123 Innovation Drive, Suite 400</p>
              <p>San Francisco, CA 94103</p>
              <a href="tel:+15555555555" className="hover:text-white transition-colors">
                +1 (555) 555-5555
              </a>
              <a href="mailto:info@dara-design.com" className="hover:text-white transition-colors">
                info@dara-design.com
              </a>
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Dara. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
