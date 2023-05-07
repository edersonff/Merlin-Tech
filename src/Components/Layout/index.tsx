import React from "react";
import Navbar from "../Navbar";
import { LayoutProps } from "./types";
import Footer from "../Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={inter.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
