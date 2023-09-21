import React from "react";
import Navbar from "../Navbar";
import { LayoutProps } from "./types";
import Footer from "../Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={inter.className}>
      <div className="sticky bg-white top-0 left-0 w-full backdrop-blur-sm z-10 py-4">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
