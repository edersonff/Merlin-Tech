import HomeContact from "@/Components/Home/Contact";
import HomeContentSection from "@/Components/Home/ContentSection";
import HomeFeature from "@/Components/Home/Feature";
import HomeHeader from "@/Components/Home/Header";
import HomeHero from "@/Components/Home/Hero";
import HomeLogos from "@/Components/Home/Logos";
import HomeStats from "@/Components/Home/Stats";
import HomeTeam from "@/Components/Home/Team";
import HomeTestimonials from "@/Components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <HomeTestimonials />
      <HomeContact />
      <HomeContentSection />
      <HomeFeature />
      <HomeHeader />
      <HomeHero />
      <HomeLogos />
      <HomeStats />
      <HomeTeam />
    </>
  );
}
