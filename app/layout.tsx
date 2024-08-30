import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS-RUD-APP",
  description: "Create, read, update, and delete products.",
  icons: "/my-img.jpeg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" container mx-auto px-4 ">
          <Navbar />
          <div className="pb-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
