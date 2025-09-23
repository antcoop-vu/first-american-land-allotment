import type React from "react";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/NavigationContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First American Land Allotment",
  description:
    "Explore the history and geography of First American land allotments through interactive maps, research, and comprehensive data resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextIntlClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            {children}
            <Footer />
          </div>  
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
