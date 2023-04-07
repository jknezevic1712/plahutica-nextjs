import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { BlogBanners } from "assets/blogs/blogs";

const Banner: React.FC = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const grabBannerUrl = () => {
    let bannerPath = "";

    BlogBanners.map((value, index) => {
      if (blogId !== undefined && index === +blogId) {
        return (bannerPath = value.src);
      }
    });

    return bannerPath;
  };

  return (
    <div className="z-10 h-[65vh] w-full">
      <div className="relative h-full w-full">
        {blogId !== undefined && (
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
        )}
      </div>
    </div>
  );
};

export default Banner;
