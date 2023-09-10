import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Bai_Jamjuree, Inter } from "next/font/google";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bistro By Tes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(baiJamjuree.className, "bg-dark text-light antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
