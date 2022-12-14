import { NextPage } from "next";

import ScrollToTopButton from "components/blog/scrollToTopButton";
import Nav from "components/nav/nav";
import Banner from "components/blog/banner";
import Content from "components/blog/content";

const Blog: NextPage = () => {
  return (
    <div className="flex h-full w-full justify-center">
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
