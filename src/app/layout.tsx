import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Layout from "@/components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="AI Call Center Agents provide 24/7 customer support with advanced AI technology. Improve customer satisfaction and streamline your support process."
        />
        <meta
          name="keywords"
          content="AI call center, customer support, AI technology, 24/7 support, customer satisfaction"
        />
        <meta
          property="og:title"
          content="AI Call Center Agents - Revolutionize Your Customer Support"
        />
        <meta
          property="og:description"
          content="AI Call Center Agents provide 24/7 customer support with advanced AI technology. Improve customer satisfaction and streamline your support process."
        />
        <meta
          property="og:url"
          content="https://call-center-ai-frontend.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://call-center-ai-frontend.vercel.app/og-image.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AI Call Center Agents" />
        <title>
          AI Call Center Agents - Revolutionize Your Customer Support
        </title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
