import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logic Codes | AI Automation & Web Development",
  description: "Transforming Businesses Through Intelligent Technology. We specialize in AI Voice Agents, Custom Web Development, and Business Automation.",
  openGraph: {
    title: "Logic Codes",
    description: "Transforming Businesses Through Intelligent Technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${manrope.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
