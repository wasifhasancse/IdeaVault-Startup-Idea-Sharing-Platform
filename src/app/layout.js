import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import BackToTop from "@/components/BackToTop/BackToTop";
import { Toast } from "@heroui/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault – Startup Idea Sharing Platform",
  description: "Discover and share innovative startup ideas on IdeaVault, the ultimate platform for entrepreneurs and innovators. Join our community to explore, discuss, and collaborate on groundbreaking concepts that can shape the future of business. Whether you're an aspiring founder or a seasoned entrepreneur, IdeaVault is your go-to destination for inspiration and connection in the world of startups.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Toast.Provider />
      </body>
    </html>
  );
}
