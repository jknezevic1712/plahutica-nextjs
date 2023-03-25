import { NextPage } from "next";

import backgroundImage from "../../../public/background.jpg";

import ScrollToTopButton from "components/blog/scrollToTopButton";
import Nav from "components/nav/nav";
import Banner from "components/blog/banner";
import Content from "components/blog/content";

const Blog: NextPage = () => {
  return (
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
      </div>
    </div>
  );
};

export default Blog;
