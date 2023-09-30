import React from "react";
import { LayoutProps } from "./types";
import { Montserrat, Montagu_Slab } from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const montaguSlab =  Montagu_Slab({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={montserrat.className}>
      <main>{children}</main>
    </div>
  );
}
