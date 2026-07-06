import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://logiccodes.ai"),
  title: "Logic Codes | AI Automation & Software Development",
  description:
    "Premium AI automation, voice agents, chatbots, websites, dashboards, and analytics systems for businesses ready to scale.",
  keywords: [
    "AI automation agency",
    "AI voice agents",
    "AI chatbots",
    "software development",
    "business dashboards",
    "Logic Codes",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Logic Codes | AI That Works 24/7",
    description:
      "Scale your business with AI voice agents, chatbots, intelligent websites, and data analytics solutions.",
    type: "website",
    url: "/",
    siteName: "Logic Codes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic Codes | AI Automation & Software Development",
    description:
      "Scale your business with AI voice agents, chatbots, intelligent websites, and data analytics solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} bg-ink font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
