import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Toast } from "@heroui/react";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: {
    template: "%s | IdeaVault",
    default: "IdeaVault – Startup Idea Sharing Platform",
  },
  description:
    "Discover and share innovative startup ideas on IdeaVault, the ultimate platform for entrepreneurs and innovators. Join our community to explore, discuss, and collaborate on groundbreaking concepts that can shape the future of business. Whether you're an aspiring founder or a seasoned entrepreneur, IdeaVault is your go-to destination for inspiration and connection in the world of startups.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(--font-poppins)">
        <Navbar />
        {children}
        <Footer />
        <Toast.Provider />
      </body>
    </html>
  );
}
