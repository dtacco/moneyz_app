import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/app/components/layout/MainLayout"; // Import the new MainLayout

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fandwise",
  description: "Personal Finance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout> {/* Wrap children with MainLayout */}
      </body>
    </html>
  );
}
