import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

import backgroundImage from "../../../public/background.jpg";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

import Nav from "components/nav/nav";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">Plahutica blog - O nama</title>
        <meta name="description" content="Savjeti za budget putovanja!" />
      </Head>

      <div
        className="relative flex h-full w-full justify-center before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:bg-white before:bg-opacity-[0.93]"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div className="relative h-full min-h-screen w-full">
          <Nav />
          <div className="flex h-full w-full flex-wrap justify-center">
            <div className="flex h-[50%] w-[85%] justify-center py-10">
              <div className="flex h-full w-full flex-col items-center text-justify leading-6 lg:w-4/5 3xl:w-2/3">
                <h1 className="w-full pb-12 text-center font-plus-jakarta-sans text-3xl italic tracking-wider text-emerald-600 md:py-24 md:text-4xl 2xl:text-5xl 3xl:text-6xl">
                  Dobro došli na naš blog! {":)"}
                </h1>
                <p className="w-full break-words pb-24 text-justify indent-6 leading-8 md:text-xl md:leading-9 2xl:text-2xl 2xl:leading-10">
                  Zovem se Ema i studiram turizam te sam pokrenula ovaj blog iz
                  ljubavi prema putovanjima i pisanju. Osim toga željela sam
                  zabilježiti svoje uspomene, a istovremeno pomoći nekome svojim
                  savjetima. S obzirom na to da sam studentica trudim se što
                  više uštedjeti na putovanjima, a s druge strane vidjeti i
                  doživjeti što više toga pa je zato ovaj blog idealan za svakog
                  tko putuje s nešto manjim budžetom.
                </p>
                <p className="w-full break-words text-justify indent-6 leading-8 md:text-xl md:leading-9 2xl:text-2xl 2xl:leading-10">
                  Pozdrav! Ja sam Jakov, studiram informatiku te sam zaslužan za
                  izradu i dizajn ovog bloga. Osim toga, volim učiti nove
                  stvari, putovati te proučavati nove tehnologije i programske
                  jezike kako bih se razvijao i napredovao. Nadam se da će vam
                  blog biti koristan i da ćete uživati u čitanju!
                </p>
              </div>
            </div>

            <div className="flex h-[50%] w-full flex-wrap items-end justify-center pb-10 pt-8 md:w-2/3 md:flex-nowrap md:pt-16 md:text-lg lg:w-2/4 lg:pt-24 xl:w-1/3 xl:pt-32 2xl:pt-60 2xl:text-xl">
              <div className="flex w-full flex-wrap md:w-1/2">
                <div className="flex w-full flex-wrap">
                  <div className="mb-4 flex w-full items-center justify-center">
                    <Link href={"https://www.instagram.com/_emabelosevic_"}>
                      <a target="_blank">
                        <span className="flex w-fit min-w-[200px] cursor-pointer items-center rounded p-2 md:min-w-fit lg:transition-all lg:hover:bg-slate-200">
                          <BsInstagram className="mr-10" />
                          <span>_emabelosevic_</span>
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="mb-4 flex w-full items-center justify-center">
                    <Link
                      href={
                        "https://www.linkedin.com/in/ema-belo%C5%A1evi%C4%87-795ab1239/"
                      }
                    >
                      <a target="_blank">
                        <span className="flex w-fit min-w-[200px] cursor-pointer items-center rounded p-2 md:min-w-fit lg:transition-all lg:hover:bg-slate-200">
                          <BsLinkedin className="mr-10" />
                          <span>Ema Belošević</span>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap md:w-1/2">
                <div className="flex w-full flex-wrap">
                  <div className="mb-4 flex w-full items-center justify-center">
                    <Link href={"https://www.instagram.com/jakovknezevic"}>
                      <a target="_blank">
                        <span className="flex w-fit min-w-[200px] cursor-pointer items-center rounded p-2 md:min-w-fit lg:transition-all lg:hover:bg-slate-200">
                          <BsGithub className="mr-10" />
                          <span>jknezevic1712</span>
                        </span>
                      </a>
                    </Link>
                  </div>

                  <div className="mb-4 flex w-full items-center justify-center">
                    <Link href={"https://www.linkedin.com/in/jknezevic1712/"}>
                      <a target="_blank">
                        <span className="flex w-fit min-w-[200px] cursor-pointer items-center rounded p-2 md:min-w-fit lg:transition-all lg:hover:bg-slate-200">
                          <BsLinkedin className="mr-10" />
                          <span>Jakov Knežević</span>
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
