import React from "react";
import { LayoutProps } from "./types";
import { Montserrat, Montagu_Slab } from "next/font/google";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export const montserrat = Montserrat({ subsets: ["latin"] });
export const montaguSlab = Montagu_Slab({ subsets: ["latin"] });

const theme = extendTheme({
  // primary: #412B6D
  // secondary: #F2F2F2

  colors: {
    primary: "#412B6D",
    secondary: "#F2F2F2",
  },
});

export default function Layout({ children }: LayoutProps) {
  return (
    <ChakraProvider theme={theme}>
      <div className={montserrat.className}>
        <main>{children}</main>
      </div>
    </ChakraProvider>
  );
}
