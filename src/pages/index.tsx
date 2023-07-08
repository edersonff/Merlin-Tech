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
import HomeTech from "@/Components/Home/Tech";
import Head from "next/head";
import { useRef } from "react";
import HomeContact from "@/Components/Home/Contact";
import WhatsappBtn from "@/Components/Geral/Whatsapp";

export default function Home() {
  return (
    <>
      <Head>
        <title>Merlin -Empresa de tecnologia de Jaraguá do Sul</title>
        <meta
          name="description"
          content="A Merlin é uma empresa de tecnologia que cria soluções digitais inovadoras para negócios, desde sites e plataformas personalizadas até aplicativos de última geração. Junte-se a nós e transforme suas ideias em realidade."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Merlin Sistemas" />
        <meta
          name="og:title"
          content="Merlin - Empresa de tecnologia de Jaraguá do Sul"
        />
        <meta
          name="og:description"
          content="A Merlin é uma empresa de tecnologia que cria soluções digitais inovadoras para negócios, desde sites e plataformas personalizadas até aplicativos de última geração. Junte-se a nós e transforme suas ideias em realidade."
        />
        <meta
          name="og:image"
          content="https://merlin.app.br/Images/Banner/01.png"
        />
        <meta name="og:url" content="https://merlin.app.br/" />
        <meta name="og:type" content="website" />
        <link rel="canonical" href="https://merlin.app.br/" />
      </Head>
      <h1 className="hidden">
        Merlin - Empresa de tecnologia de Jaraguá do Sul
      </h1>
      <HomeVideo />
      <div className="relative -top-5 z-10 w-full rounded-3xl bg-gray-50 pt-10 text-black overflow-x-hidden">
        <OnView>
          <HomeSearch />
        </OnView>

        <div className="center mt-14" id="quem-somos">
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
            alt="Grid de Quadrados"
            title="Grid de Quadrados"
            className="absolute -right-1 z-0"
          />
        </div>

        <Image
          src={"/Images/Visual/Circle-Outline-1.svg"}
          width={250}
          height={250}
          onDragStart={(e) => e.preventDefault()}
          alt="Circle-Outline-1"
          title="Circle-Outline-1"
          className="absolute -left-1 z-0 transform -translate-y-[50px]"
        />

        <div className="center mt-14" id="desenvolva">
          <div className="content mx-auto flex items-end flex-wrap justify-center">
            <OnView>
              <Image
                width={300}
                height={300}
                onDragStart={(e) => e.preventDefault()}
                src={"/Images/Illustrations/idea.svg"}
                alt="Ilustração de uma ideia"
                title="Ilustração de uma ideia"
              />
            </OnView>
            <TextCard
              title="Crie e desenvolva suas ideias"
              text="A Merlin oferece soluções digitais personalizadas e inovadoras para impulsionar seu negócio. Desenvolvemos websites, plataformas e aplicativos de última geração, garantindo resultados de excelência. Transforme suas ideias em realidade. Entre em contato conosco."
              pl
            />
          </div>
        </div>

        <div className="w-full h-[500px] my-32 center relative bg-gradient-to-b from-transparent to-[rgba(60,45,115,0.68)] text-white">
          <Image
            onDragStart={(e) => e.preventDefault()}
            src="/Images/BG/Two-Working.webp"
            alt="Espaço de trabalho com duas pessoas"
            title="Espaço de trabalho com duas pessoas"
            width={1280}
            height={720}
            className="absolute top-0 left-0 object-cover object-center w-full h-full -z-10"
          />
          <div
            className="content flex flex-col justify-end w-full h-full py-16"
            id="segmentos"
          >
            <div className="flex flex-col items-start gap-y-4 lg:w-3/4">
              <h3 className="text-5xl font-semibold">Diversos segmentos</h3>
              <p>
                Oferecemos estratégias sob medida para impulsionar o sucesso do
                seu negócio, independentemente do setor em que você atua. Conte
                com nossa experiência e expertise para alcançar resultados
                excepcionais em sua área de atuação.
              </p>
              <a
                href="#contato"
                className="rounded-full border-2 border-white px-8 py-2 flex items-center gap-x-2"
              >
                Contato
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-full absolute -left-48 transform -translate-y-2/3 bg-white p-64 flex items-center justify-center -z-20" />

        <div className="center mb-32">
          <div className="content mx-auto flex items-end flex-wrap justify-center">
            <TextCard
              title="Onde estamos?"
              text="Potencialize suas ideias em Jaraguá do Sul com a Merlin. Junte-se a nós e transforme seus projetos em realidade na cidade empreendedora. Entre em contato hoje mesmo e descubra como podemos impulsionar seu negócio digitalmente."
              pl
              align="right"
            />
            <OnView>
              <Image
                width={300}
                height={300}
                onDragStart={(e) => e.preventDefault()}
                src={"/Images/Illustrations/office.svg"}
                alt="Illustração de um escritório"
                title="Illustração de um escritório"
              />
            </OnView>
          </div>
        </div>

        <div className="center mb-14">
          <div className="content flex justify-center flex-wrap px-4 gap-x-8 gap-y-16">
            <div className="flex-1 flex flex-col gap-y-4">
              <h3 className="text-3xl font-bold">
                Aumente o retorno dos seus investimentos com tecnologia
              </h3>
              {/* willy dorow 29, Jaraguá do Sul, SC */}
              <a
                href={
                  "https://www.google.com/maps/place/" +
                  encodeURI("willy dorow 29, Jaraguá do Sul, SC")
                }
                target="_blank"
                rel="noreferrer"
                className="w-full h-full relative"
              >
                <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 ease-in-out opacity-0 transition-all bg-purple-400/30 center">
                  <h3 className="text-3xl font-bold text-white text-center">
                    Nosso escritório
                  </h3>
                </div>
                <Image
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  onDragStart={(e) => e.preventDefault()}
                  src="/Images/Banner/02.webp"
                  alt="Nosso escritório Jaraguá do Sul"
                  title="Nosso escritório Jaraguá do Sul"
                />
              </a>
            </div>
            <div className="flex-1 flex flex-col gap-y-4 justify-between">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-4xl font-bold">Resultados excepcionais</h2>
                <p className="text-justify text-lg font-light leading-8">
                  A Merlin oferece soluções digitais que geram resultados
                  excepcionais para o seu negócio. Desenvolvemos websites,
                  plataformas personalizadas e aplicativos de última geração,
                  impulsionando o crescimento e ampliando o alcance da sua
                  empresa. Entre em contato e descubra como podemos gerar
                  resultados extraordinários para o seu negócio.
                </p>
              </div>
              <ThreeDItems />
            </div>
          </div>
        </div>

        <div className="center flex-col text-center mt-44" id="produtos">
          <div className="content mx-auto">
            <h2 className="text-4xl font-semibold text-purple-900 mb-2">
              Nossos Produtos
            </h2>
          </div>
          <div className="border-t-2 border-b-2 border-purple-300 mb-8 pt-1 pb-32 bg-purple-50 w-full">
            <div className="mb-10 pt-2">
              <p className="text-2xl leading-8">
                Veja alguns de nossos últimos trabalhos, todos desenvolvidos
                <br />
                sob-medida para cada empresa.
              </p>
            </div>
            <HomeProjects invert />
          </div>
          <HomeProjects className="relative -top-32" />
        </div>

        <div className="w-full bg-gradient-to-b from-[#885CD0] to-[#7579FF] text-white">
          <div className="center">
            <div className="content flex flex-col items-center justify-center py-14">
              <h2 className="text-5xl font-semibold text-center">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-center text-lg font-light leading-8 mt-4">
                Entre em contato com a gente pelo email{" "}
                <a
                  href="mailto:contato@merlin.app.br"
                  className="text-purple-300 hover:text-purple-400"
                >
                  contato@merlin.app.br
                </a>{" "}
              </p>
            </div>
          </div>
        </div>

        <Image
          src={"/Images/Visual/Circle-Outline-2.svg"}
          width={200}
          height={200}
          onDragStart={(e) => e.preventDefault()}
          alt="Borda de circulo"
          title="Borda de circulo"
          className="absolute -right-1 z-0 transform translate-y-[150px]"
        />

        <div className="center my-32">
          <div className="content flex flex-col items-center justify-center">
            <Gallery />
          </div>
        </div>

        <Image
          src={"/Images/Visual/Circles.svg"}
          width={150}
          height={150}
          onDragStart={(e) => e.preventDefault()}
          alt="Grid de circulos"
          title="Grid de circulos"
          className="absolute left-2 transofrm -translate-y-[250px] -z-10"
        />

        <div className="center my-32 w-full">
          <div className="content">
            <div className="flex flex-wrap gap-16">
              <HomeTech />
            </div>
          </div>
        </div>

        <div
          className="center pt-32 bg-white border-b-2 border-gray-50"
          id="contato"
        >
          <HomeContact />
        </div>
      </div>
      <WhatsappBtn>
        <p className="text-sm text-black">
          Quer tirar suas ideias do papel?{" "}
          <span className="text-primary-500">Fale com a gente!</span>{" "}
          <span className="text-primary-500">😊</span>
        </p>
      </WhatsappBtn>
    </>
  );
}
