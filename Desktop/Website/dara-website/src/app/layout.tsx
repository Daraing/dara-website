import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ClientBody from "./ClientBody"; // Fixed import for ClientBody

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dara | Mechanical Design Services",
  description: "Professional mechanical design services with a focus on automotive parts. We specialize in 3D modeling, design optimization, prototyping, and AI-assisted design tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
