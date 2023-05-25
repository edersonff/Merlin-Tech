import TextCard from "@/Components/Geral/TextCard";
import ThreeDItems from "@/Components/Home/3DItems";
import HomeSearch from "@/Components/Home/Search";
import HomeVideo from "@/Components/Home/Video";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import OnView from "@/Components/Geral/OnView";
import HomeProjects from "@/Components/Home/Projects";
import Gallery from "@/Components/Home/Galerry";

export default function Home() {
  return (
    <>
      <HomeVideo />
      <div className="relative -top-5 z-10 w-full rounded-3xl bg-gray-50 pb-4 pt-10 text-black">
        <OnView>
          <HomeSearch />
        </OnView>

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
            onDragStart={(e) => e.preventDefault()}
            alt="Squares"
            className="absolute -right-1 z-0"
          />
        </div>

        <Image
          src={"/Images/Visual/Circle-Outline-1.svg"}
          width={200}
          height={200}
          onDragStart={(e) => e.preventDefault()}
          alt="Circle-Outline-1"
          className="absolute -left-1 z-0"
        />

        <div className="center mt-14">
          <div className="content mx-auto flex items-end flex-wrap justify-center">
            <OnView>
              <Image
                width={300}
                height={300}
                onDragStart={(e) => e.preventDefault()}
                src={"/Images/Illustrations/idea.svg"}
                alt="idea"
              />
            </OnView>
            <TextCard
              title="Crie e desenvolva suas ideias"
              text="A Merlin é uma empresa de tecnologia que cria soluções digitais inovadoras para negócios, desde sites e plataformas personalizadas até aplicativos de última geração. Junte-se a nós e transforme suas ideias em realidade."
              pl
            />
          </div>
        </div>

        <div className="w-full h-[500px] my-32 center relative bg-gradient-to-b from-transparent to-[rgba(60,45,115,0.68)] text-white">
          <img
            onDragStart={(e) => e.preventDefault()}
            src="/Images/BG/Two-Working.jpg"
            alt="Two-mans-working"
            className="absolute top-0 left-0 object-cover object-center w-full h-full -z-10"
          />
          <div className="content flex flex-col justify-end w-full h-full py-16">
            <div className="flex flex-col items-start gap-y-4 lg:w-3/4">
              <h4 className="text-5xl font-semibold">Diversos segmentos</h4>
              <p>
                Hospedagem de sites e emails para não se incomodar. Para você ou
                seu negócio ter presença online. Emails como
                você@suaideia.com.br também. Você não precisa ser um expert, nós
                te ajudamos!
              </p>
              <button className="rounded-full border-2 border-white px-8 py-2 flex items-center gap-x-2">
                Contato
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-full absolute -left-48 transform -translate-y-2/3 bg-white p-64 flex items-center justify-center -z-20" />

        <div className="center mb-32">
          <div className="content mx-auto flex items-end flex-wrap justify-center">
            <TextCard
              title="Crie e desenvolva suas ideias"
              text="A Merlin é uma empresa de tecnologia que cria soluções digitais inovadoras para negócios, desde sites e plataformas personalizadas até aplicativos de última geração. Junte-se a nós e transforme suas ideias em realidade."
              pl
              align="right"
            />
            <OnView>
              <Image
                width={300}
                height={300}
                onDragStart={(e) => e.preventDefault()}
                src={"/Images/Illustrations/office.svg"}
                alt="idea-ilustration"
              />
            </OnView>
          </div>
        </div>

        <div className="center mb-14">
          <div className="content flex justify-center flex-wrap px-4 gap-x-8">
            <div className="flex-1 flex flex-col gap-y-4">
              <h4 className="text-3xl font-bold">
                Maximize seus investimentos com tecnologia e processos
                eficientes.
              </h4>
              <img
                className="w-full h-full object-cover object-center"
                onDragStart={(e) => e.preventDefault()}
                src={"/Images/BG/Two-Working.jpg"}
                alt="Two-mans-working"
              />
            </div>
            <div className="flex-1 flex flex-col gap-y-4 justify-between">
              <div className="flex flex-col gap-y-4">
                <h4 className="text-4xl font-bold">Serviços</h4>
                <p className="text-justify text-lg font-light leading-8">
                  Grande abrangência em soluções de tecnologia para o SETOR
                  TÊXTIL com flexibilidade e customização para alavancar os
                  negócios. A Elemental Sistema faz a análise e cria estratégia
                  sob medida e de acordo com suas necessidades.
                </p>
              </div>
              <ThreeDItems />
            </div>
          </div>
        </div>

        <div className="center flex-col text-center mt-32">
          <div className="content mx-auto">
            <h2 className="text-4xl font-semibold text-purple-900">
              Nossos Produtos
            </h2>
          </div>
          <div className="border-t-2 border-b-2 border-gray-300 mb-8 pt-1 pb-32 bg-white w-full">
            <div className="mb-10">
              <p className="text-2xl font-light leading-8">
                Veja alguns de nossos últimos trabalhos, todos desenvolvidos
                <br />
                sob-medida para cada empresa.
              </p>
            </div>
            <HomeProjects invert />
          </div>
          <HomeProjects className="relative -top-32" />
        </div>

        <div
          className="w-full bg-gradient-to-b
         from-[#885CD0] to-[#7579FF] text-white"
        >
          <div className="center">
            <div className="content flex flex-col items-center justify-center py-14">
              <h2 className="text-5xl font-semibold text-center">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-center text-lg font-light leading-8 mt-4">
                Entre em contato com a gente pelo email{" "}
                <a
                  href="mailto:teste@teste.com"
                  className="text-purple-300 hover:text-purple-400"
                >
                  teste@teste.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="center my-32">
          <div className="content flex flex-col items-center justify-center">
            <Gallery />
          </div>
        </div>
      </div>
    </>
  );
}
