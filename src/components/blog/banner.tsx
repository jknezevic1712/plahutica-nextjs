import React from "react";
import Image from "next/image";
import { useAppContext } from "context/state";

import { BlogBanners } from "assets/blogs/blogs";

const Banner: React.FC = () => {
  const context = useAppContext();
  const { activeBlogIdCtx } = context!;

  const grabBannerUrl = () => {
    let bannerPath = "";

    BlogBanners.map((value, index) => {
      if (index === +activeBlogIdCtx) {
        return (bannerPath = value.src);
      }
    });

    return bannerPath;
  };

  return (
    <div className="h-[65vh] w-full">
      <div className="relative h-full w-full">
        <Image
          blurDataURL={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          }
          placeholder="blur"
          className="h-full w-full bg-cover bg-center object-contain md:object-cover"
          src={grabBannerUrl()}
          alt=""
          layout="fill"
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
