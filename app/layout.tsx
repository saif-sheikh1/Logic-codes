import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Logic Codes | AI Automation & Software Development",
  description:
    "Logic Codes builds AI voice agents, AI chatbots, intelligent websites, software systems, and data analytics for businesses ready to automate and scale.",
  keywords: [
    "Logic Codes",
    "AI automation agency",
    "AI voice agents",
    "AI chatbots",
    "software development",
    "data analytics",
    "business automation",
  ],
  openGraph: {
    title: "Logic Codes | AI Automation & Software Development",
    description:
      "Scale your business with AI voice agents, chatbots, websites, dashboards, and automation systems that work 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
