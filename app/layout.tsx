import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Meteors } from "@/components/ui/meteor";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rodel Libed - Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black",inter.className)}>
      <NavBar />
       <main className="min-h-screen">
        <Meteors />
        {children}
       </main>
       <Footer />
      </body>
    </html>
  );
}
