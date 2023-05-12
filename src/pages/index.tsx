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
        <title key="title">Plahutica blog</title>
        <meta name="description" content="Savjeti za budget putovanja!" />
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
