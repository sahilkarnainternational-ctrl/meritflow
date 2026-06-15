import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "EstateAI — AI-Powered Luxury Real Estate",
  description:
    "Premium AI property concierge. Buy, sell, and rent luxury properties with intelligent guidance, market predictions, and white-glove service.",
  openGraph: {
    title: "EstateAI — AI-Powered Luxury Real Estate",
    description: "Premium AI property concierge.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          chatbot_id="6a2fefc7ff30b6c3359532b9"
          data-type="default"
          src="https://app.thinkstack.ai/bot/thinkstackai-loader.min.js"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
