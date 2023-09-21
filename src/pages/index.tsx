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
        <title>Merlin - Empresa de tecnologia de Jaraguá do Sul</title>
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
          content="https://merlin.app.br/images/banner/01.png"
        />
        <meta name="og:url" content="https://merlin.app.br/" />
        <meta name="og:type" content="website" />
        <link rel="canonical" href="https://merlin.app.br/" />
      </Head>
      <HomeVideo />
      <div className="relative -top-5 z-10 w-full rounded-3xl bg-gray-50 pt-10 text-black overflow-x-hidden">
        <OnView>
          <HomeSearch />
        </OnView>

        <div className="center mt-14" id="about-us">
          <div className="content mx-auto">
            <TextCard
              title="Who We Are?"
              text="Merlin is a technology company that creates innovative digital solutions for businesses, from customized websites and platforms to cutting-edge applications. Join us and turn your ideas into reality."
            />
          </div>
          <Image
            src={"/images/visual/Squares.svg"}
            width={150}
            height={150}
            onDragStart={(e) => e.preventDefault()}
            alt="Grid of Squares"
            title="Grid of Squares"
            className="absolute -right-1 z-0"
          />
        </div>

        <Image
          src={"/images/visual/Circle-Outline-1.svg"}
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
                src={"/images/illustrations/idea.svg"}
                alt="Idea Illustration"
                title="Idea Illustration"
              />
            </OnView>
            <TextCard
              title="Create and Develop Your Ideas"
              text="Merlin provides customized and innovative digital solutions to boost your business. We develop cutting-edge websites, platforms, and apps, ensuring excellent results. Turn your ideas into reality. Get in touch with us."
              pl
            />
          </div>
        </div>

        <div className="w-full h-[500px] my-32 center relative bg-gradient-to-b from-transparent to-[rgba(60,45,115,0.68)] text-white">
          <Image
            onDragStart={(e) => e.preventDefault()}
            src="/images/bg/Two-Working.webp"
            alt="Workspace with Two People"
            title="Workspace with Two People"
            width={1280}
            height={720}
            className="absolute top-0 left-0 object-cover object-center w-full h-full -z-10"
          />
          <div
            className="content flex flex-col justify-end w-full h-full py-16"
            id="services"
          >
            <div className="flex flex-col items-start gap-y-4 lg:w-3/4 lg:px-0 px-4">
              <h3 className="lg:text-5xl text-4xl font-bold">
                Diverse Industries
              </h3>
              <p className="lg:text-lg font-light leading-6 mb-4">
                We offer tailor-made strategies to drive your business&apos;s
                success, regardless of the industry you operate in. Rely on our
                experience and expertise to achieve exceptional results in your
                field.
              </p>
              <a
                href="#contato"
                className="rounded-full border-2 border-white px-12 py-2 flex items-center gap-x-2 hover:bg-white hover:text-purple-800 transition-all ease-in-out duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-full absolute -left-48 transform -translate-y-2/3 bg-white p-64 flex items-center justify-center -z-20" />

        <div className="center mb-32">
          <div className="content  mx-auto flex items-end flex-wrap justify-center">
            <TextCard
              title="Where We Are?"
              text="Unlock your ideas in Jaraguá do Sul with Merlin. Join us and bring your projects to life in the entrepreneurial city. Get in touch today and discover how we can digitally empower your business."
              pl
              align="right"
            />
            <OnView>
              <Image
                width={300}
                height={300}
                onDragStart={(e) => e.preventDefault()}
                src={"/images/illustrations/office.svg"}
                alt="Office Illustration"
                title="Office Illustration"
              />
            </OnView>
          </div>
        </div>

        <div className="center mb-14">
          <div className="content flex justify-center flex-wrap px-4 gap-x-16 gap-y-16">
            <div className="flex-1 flex flex-col">
              <h3 className="text-3xl font-bold mb-10">
                Increase ROI with Technology
              </h3>
              <a
                href={
                  "https://www.google.com/maps/place/" +
                  encodeURI("willy dorow 29, Jaraguá do Sul, SC")
                }
                target="_blank"
                rel="noreferrer"
                className="w-full h-full relative overflow-hidden rounded-l-4xl"
              >
                <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 ease-in-out opacity-0 transition-all bg-purple-400/30 center">
                  <h3 className="text-3xl font-bold text-white text-center">
                    Our office
                  </h3>
                </div>
                <Image
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center"
                  onDragStart={(e) => e.preventDefault()}
                  src="/images/banner/02.webp"
                  alt="Our Jaraguá do Sul Office"
                  title="Our Jaraguá do Sul Office"
                />
              </a>
            </div>
            <div className="flex-1 flex flex-col gap-y-4 justify-between">
              <div className="flex flex-col gap-y-4">
                <h2 className="text-4xl font-bold mb-10">
                  Exceptional Results
                </h2>
                <p className="text-justify text-lg font-light leading-7">
                  Merlin provides digital solutions that deliver exceptional
                  results for your business. We develop customized websites,
                  platforms, and cutting-edge applications, driving growth and
                  expanding your company&apos;s reach. Get in touch and discover
                  how we can generate extraordinary results for your business.
                </p>
              </div>
              <ThreeDItems />
            </div>
          </div>
        </div>

        <div className="center flex-col text-center mt-44" id="projects">
          <div className="content mx-auto">
            <h2 className="lg:text-6xl text-4xl font-bold text-purple-900 mb-2">
              Our Products
            </h2>
          </div>
          <div className="border-t-2 border-b-2 border-purple-300 mb-8 pt-1 pb-32 bg-purple-50 w-full">
            <div className="mb-10 pt-2">
              <p className="lg:text-2xl text-lg leading-6">
                Check out some of our recent work, all tailored
                <br />
                to each company.
              </p>
            </div>
            <HomeProjects invert />
          </div>
          <HomeProjects className="relative -top-32" />
        </div>

        <div className="w-full bg-gradient-to-b from-[#885CD0] to-[#7579FF] text-white">
          <div className="center">
            <div className="content flex flex-col items-center justify-center py-14">
              <h2 className="lg:text-6xl text-4xl font-bold text-center">
                Let&apos;s work together?
              </h2>
              <p className="text-center text-lg font-light leading-6 mt-4">
                Contact us at{" "}
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
          src={"/images/visual/Circle-Outline-2.svg"}
          width={200}
          height={200}
          onDragStart={(e) => e.preventDefault()}
          alt="Circle Border"
          title="Circle Border"
          className="absolute -right-1 z-0 transform translate-y-[150px]"
        />

        <div className="center my-32">
          <div className="content flex flex-col items-center justify-center">
            <Gallery />
          </div>
        </div>

        <Image
          src={"/images/visual/Circles.svg"}
          width={150}
          height={150}
          onDragStart={(e) => e.preventDefault()}
          alt="Circle Grid"
          title="Circle Grid"
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
          Want to bring your ideas to life?{" "}
          <span className="text-primary-500">Talk to us!</span>{" "}
          <span className="text-primary-500">😊</span>
        </p>
      </WhatsappBtn>
    </>
  );
}
