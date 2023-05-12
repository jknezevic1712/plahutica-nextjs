import { NextPage } from "next";
import Head from "next/head";
import { useAppContext } from "context/state";

import backgroundImage from "../../../public/background.jpg";

import ScrollToTopButton from "components/blog/scrollToTopButton";
import Nav from "components/nav/nav";
import Banner from "components/blog/banner";
import Content from "components/blog/content";
import Feedback from "components/feedback/feedback";

import { BlogsOverviews } from "assets/blogs/blogs";

/* 
TODO: Url treba bit npr. rim-putovanje i onda trebas to stavit u meta description tag ili negdje tako da prikazuje na googleu to putovanje
*/
const Blog: NextPage = () => {
  const context = useAppContext();
  const { activeBlogIdCtx } = context!;

  return (
    <>
      <Head>
        <title key="title">
          Plahutica blog - {BlogsOverviews[activeBlogIdCtx]?.title}
        </title>
        <meta
          name="description"
          content={BlogsOverviews[activeBlogIdCtx]?.description}
        />
      </Head>

      <div
        className="relative flex h-full w-full justify-center before:absolute before:top-0 before:left-0 before:z-0 before:h-full before:w-full before:bg-white before:bg-opacity-[0.93]"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div className="relative flex h-full w-full flex-wrap items-center justify-center">
          <ScrollToTopButton />
          <Nav />
          <Banner />
          <Content />
          <Feedback />
        </div>
      </div>
    </>
  );
};

export default Blog;
