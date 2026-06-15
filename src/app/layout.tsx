import type { Metadata } from "next";
import { Manrope, Italiana } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "EstateX — AI-Powered Real Estate Agency",
  description:
    "Premium AI-powered real estate agency. Buy, sell, and rent luxury properties with intelligent guidance, market predictions, and white-glove concierge service.",
  openGraph: {
    title: "EstateX — AI-Powered Real Estate Agency",
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
    <html lang="en" className={`${manrope.variable} ${italiana.variable}`}>
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
