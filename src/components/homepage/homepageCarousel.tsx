import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { useAppContext } from "context/state";
import { slideshowImagesArray } from "assets/blogs/homepageImages";

const HomepageCarousel = () => {
  const context = useAppContext();
  const { setActiveBlogIdCtx } = context!;

  useEffect(() => {
    setActiveBlogIdCtx(0);
  }, []);

  return (
    <div className="flex h-1/2 w-full flex-col items-center justify-center">
      <Swiper
        slidesPerView={"auto"}
        // loop={true}
        // loopedSlides={3}
        spaceBetween={40}
        slidesPerGroup={1}
        navigation={true}
        className="mySwiper"
        effect={"coverflow"}
        pagination={false}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        onSlideChange={(props: any) => {
          const swiperActiveIndex: number = props.activeIndex;
          setActiveBlogIdCtx(swiperActiveIndex);
        }}
      >
        {slideshowImagesArray.map((url, blogId) => {
          return (
            <SwiperSlide
              key={blogId}
              className="max-w-[8rem] md:max-w-[13.5rem] xl:max-w-[13rem] 2xl:max-w-[25rem] 3xl:max-w-[30rem]"
            >
              <Link href={`/blog/${blogId}`}>
                <div className="image-container">
                  <Image
                    blurDataURL={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                    }
                    placeholder="blur"
                    className="image h-full w-full cursor-pointer rounded-lg transition-all lg:opacity-95 lg:hover:opacity-100"
                    src={url.src}
                    alt=""
                    layout="fill"
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomepageCarousel;
