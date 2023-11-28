import Image from "next/image";
import Head from "next/head";
import WhatsappBtn from "@/Components/Geral/Whatsapp";
import Header from "@/Components/Home/Header";
import TopBanner from "@/Components/Home/Banner/Top";
import BannerBenefits from "@/Components/Home/Card/Benefits";
import Separator from "@/Components/Geral/Separator";
import WideBanner from "@/Components/Home/Banner/Wide";
import OurCompany from "@/Components/Home/OurCompany";
import WideDarkBanner from "@/Components/Home/Banner/WideDark";
import BottomBanner from "@/Components/Home/Banner/Bottom";
import BannerClaim from "@/Components/Home/Banner/Claim";
import FooterHome from "@/Components/Home/Footer";
import ContactModalHome from "@/Components/Home/Modal/Contact";
import FrequentlyAskedQuestionHome from "@/Components/Home/FrequentlyQuestions";

export default function Home() {
  return (
    <>
      <Head>
        <title>Merlin - Tech</title>
        <meta
          name="description"
          content="Transform your brand with Merlin. We simplify technology, making it accessible and intuitive for all. Join us to experience digital empowerment."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Merlin Sistemas" />
        <meta
          property="og:title"
          content="Merlin Tech - Transform your brand"
        />
        <meta
          property="og:description"
          content="Transform your brand with Merlin. We simplify technology, making it accessible and intuitive for all. Join us to experience digital empowerment."
        />
        <meta
          property="og:image"
          content="https://tech.merlin.app.br/images/others/screenshot.png"
        />
        <meta property="og:url" content="https://tech.merlin.app.br/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tech.merlin.app.br/" />
      </Head>

      <Header />
      <TopBanner />
      <Separator h={100} />

      <BannerBenefits />
      <Separator h={75} />

      <WideBanner />
      <Separator h={55} />

      <OurCompany />

      <WideDarkBanner />

      <BottomBanner />

      <FrequentlyAskedQuestionHome />

      <BannerClaim />

      <FooterHome />

      <ContactModalHome />

      <WhatsappBtn>
        <p className="text-sm text-black">
          Want to bring your ideas to life?{" "}
          <span className="text-primary-500">Talk to us!</span>{" "}
          <span className="text-primary-500">😊</span>
        </p>
      </WhatsappBtn>
    </>
  );
}
