import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | AKSHAY",
  description: "AKSHAY's Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
