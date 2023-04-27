import type { NextPage } from "next";
import Head from "next/head";

import { useAppContext } from "context/state";

import Nav from "components/nav/nav";
import HomepageDetails from "components/homepage/homepageDetails";
import HomepageCarousel from "components/homepage/homepageCarousel";

import { carouselImagesArray } from "assets/blogs/homepageImages";

const Home: NextPage = () => {
  const context = useAppContext();
  const { activeBlogIdCtx } = context!;

  return (
    <>
      <Head>
        <title>Plahutica blog</title>
        <meta title="Plahutica blog"></meta>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="jednodnevni izlet iz Zagreba, Zagorje, Istra, što posjetiti u Istri, Pula, Rim putovanje, Prag putovanje"
        />
        <meta name="description" content="Savjeti za budget putovanja!" />
        <meta name="author" content="Jakov Knežević & Ema Belošević" />
        <link rel="canonical" href="https://plahutica.vercel.app/" />
        <meta
          name="google-site-verification"
          content="_NncHz24yni_gPGd22214uhUbIg-8jdRGHTAaPEMECc"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Plahutica blog" />
        <meta
          property="og:description"
          content="Savjeti za budget putovanja!"
        />
        <meta property="og:image" content="/background.jpg" />
        <meta property="og:url" content="https://plahutica.vercel.app/" />
        <meta property="og:site_name" content="Plahutica blog" />
        <meta name="twitter:title" content="Plahutica blog" />
        <meta
          name="twitter:description"
          content="Savjeti za budget putovanja!"
        />
        <meta name="twitter:image" content="/background.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="relative mx-auto flex h-full min-h-screen w-full flex-wrap justify-center bg-cover bg-center bg-no-repeat text-stone-50 transition-all before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:bg-black before:bg-opacity-10"
        style={{
          backgroundImage: `url(${carouselImagesArray[activeBlogIdCtx]?.src})`,
        }}
      >
        <Nav homepageView />
        <div className="z-10 flex h-full w-full flex-wrap items-center justify-center md:max-w-[90%] 2xl:flex-nowrap">
          <HomepageDetails />
          <HomepageCarousel />
        </div>
      </div>
    </>
  );
};

export default Home;
