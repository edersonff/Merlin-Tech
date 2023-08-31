import React from "react";
import Navbar from "../Navbar";
import { LayoutProps } from "./types";
import Footer from "../Footer";
import { Inter } from "next/font/google";
import HeaderContact from "../Home/Header/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={inter.className}>
      <div className="absolute top-0 left-0 w-full bg-black/5 backdrop-blur-sm z-10 pb-4">
        <HeaderContact />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
