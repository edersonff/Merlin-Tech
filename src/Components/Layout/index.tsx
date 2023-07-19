import React from "react";
import Navbar from "../Navbar";
import { LayoutProps } from "./types";
import Footer from "../Footer";
import { Inter } from "next/font/google";
import HeaderContact from "../Home/Header/Contact";
import Head from "next/script";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={inter.className}>
      <Head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-TVXHS1F4S7"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-TVXHS1F4S7');`,
          }}
        />
        <Script
          id="clarity_script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "i1h18978rv");`,
          }}
        />
      </Head>
      <div className="absolute top-0 left-0 w-full bg-black/5 backdrop-blur-sm z-10">
        <HeaderContact />
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
