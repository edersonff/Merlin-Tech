import TextCard from "@/Components/Geral/TextCard";
import HomeSearch from "@/Components/Home/Search";
import HomeVideo from "@/Components/Home/Video";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeVideo />
      <div className="relative -top-5 z-10 w-full rounded-3xl bg-white pb-4 pt-10 text-black">
        <HomeSearch />
        <div className="center mt-14">
          <div className="content mx-auto">
            <TextCard
              title="Quem somos?"
              text="A Merlin é uma empresa de tecnologia que cria soluções digitais inovadoras para negócios, desde sites e plataformas personalizadas até aplicativos de última geração. Junte-se a nós e transforme suas ideias em realidade."
            />
          </div>
          <Image
            src={"/Images/Visual/Squares.svg"}
            width={150}
            height={150}
            alt="Squares"
            className="absolute -right-1 z-0"
          />
        </div>
        <Image
          src={"/Images/Visual/Circle-Outline-1.svg"}
          width={200}
          height={200}
          alt="Circle-Outline-1"
          className="absolute -left-1 z-0"
        />
        <div className="center mt-14">
          <div className="content mx-auto flex items-end flex-wrap justify-center">
            <Image
              width={300}
              height={300}
              src={"/Images/Illustrations/idea.svg"}
              alt="idea"
            />
            <TextCard
              title="Crie e desenvolva suas ideias"
              text="A Merlin é uma empresa de tecnologia que cria soluções digitais inovadoras para negócios, desde sites e plataformas personalizadas até aplicativos de última geração. Junte-se a nós e transforme suas ideias em realidade."
              pl
            />
          </div>
        </div>
        {/* background: linear-gradient(180deg, rgba(60, 45, 115, 0) 48.96%, rgba(60, 45, 115, 0.68) 100%), url(.jpg); */}
        <div className="w-full h-[500px] my-32 center relative bg-gradient-to-b from-transparent to-[#3C2D73]">
          <img
            src="/Images/BG/Two-Working.jpg"
            alt="Two-mans-working"
            className="absolute top-0 left-0 object-cover object-center filter brightness-50 w-full h-full"
          />
          <div className="content flex flex-col justify-end"></div>
        </div>
      </div>
    </>
  );
}
