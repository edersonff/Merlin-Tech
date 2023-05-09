import "@/styles/globals.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Layout from "@/Components/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
