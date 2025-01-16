import { Geist, Geist_Mono } from "next/font/google";
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
            <head>
                <meta
                    name="description"
                    content="Parrot provides 24/7 customer support with advanced AI technology. Improve customer satisfaction and streamline your support process."
                />
                <meta
                    name="keywords"
                    content="Parrot, AI call center, customer support, AI technology, 24/7 support, customer satisfaction"
                />
                <meta property="og:title" content="Parrot - Revolutionize Your Customer Support" />
                <meta
                    property="og:description"
                    content="Parrot provides 24/7 customer support with advanced AI technology. Improve customer satisfaction and streamline your support process."
                />
                <meta property="og:url" content="https://call-center-ai-frontend.vercel.app" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://call-center-ai-frontend.vercel.app/og-image.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Parrot" />
                <link rel="icon" href="/favicon.png" />
                <title>Parrot - Revolutionize Your Customer Support</title>
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
