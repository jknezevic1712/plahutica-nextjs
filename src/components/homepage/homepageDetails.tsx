import React from "react";
import Link from "next/link";

import { useAppContext } from "context/state";
import { BlogsOverviews } from "assets/blogs/blogs";

const HomepageDetails = () => {
  const context = useAppContext();
  const { activeBlogIdCtx } = context!;
  const currentBlogOverview = BlogsOverviews[activeBlogIdCtx];

  return (
    <div className="flex h-1/2 w-full content-center items-center justify-center pb-32 2xl:pb-0">
      <div className="flex h-fit w-3/5 min-w-[275px] max-w-[460px] flex-col items-center justify-center rounded-tl-3xl rounded-br-3xl bg-stone-800 bg-opacity-75 p-2 text-center transition-all md:p-8 lg:hover:bg-opacity-90 3xl:min-h-[350px] 3xl:min-w-[550px] 3xl:max-w-none 3xl:justify-between">
        <h2 className="m-0 w-full break-words font-dancing-script text-3xl font-bold text-emerald-600 md:text-4xl xl:text-5xl">
          {currentBlogOverview?.title}
        </h2>
        <p className="w-full break-words py-10 md:text-lg xl:text-xl">
          {currentBlogOverview?.description}
        </p>
        <Link href={`/blog/${activeBlogIdCtx}`}>
          <button className="flex h-[40px] min-w-[100px] max-w-[200px] items-center justify-center rounded-md border-2 border-emerald-600 bg-stone-50 py-4 px-3 text-base font-medium text-stone-800 transition-all md:h-[50px] md:min-w-[120px] md:text-lg lg:hover:border-stone-50 lg:hover:bg-emerald-600 lg:hover:text-stone-50 3xl:py-6 3xl:px-8 3xl:text-xl">
            Više...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomepageDetails;
