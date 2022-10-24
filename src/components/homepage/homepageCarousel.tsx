import React, { useState } from "react";
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
  const { activeBlogIdCtx, setActiveBlogIdCtx } = context!;

  console.log("ID => ", activeBlogIdCtx);

  return (
    // <>
    //   <Swiper
    //     slidesPerView={2}
    //     spaceBetween={30}
    //     slidesPerGroup={1}
    //     navigation={true}
    //     className="mySwiper mt-8 flex h-1/2 w-3/4 flex-col items-center justify-between"
    //     slideClass="text-center text-lg bg-neutral-50 rounded-2xl flex justify-center items-center"
    //     effect={"coverflow"}
    //     pagination={false}
    //     centeredSlides={true}
    //     coverflowEffect={{
    //       rotate: 50,
    //       stretch: 0,
    //       depth: 100,
    //       modifier: 1,
    //       slideShadows: true,
    //     }}
    //     modules={[EffectCoverflow, Navigation, Pagination]}
    //     onSlideChange={(props: any) => {
    // const swiperActiveIndex: number = props.activeIndex;
    // setActiveBlogIdCtx(swiperActiveIndex);
    //     }}
    //   >
    //     {slideshowImagesArray.map((url, blogId) => {
    //       console.log("BLOG ID => ", blogId, ", URL => ", url);
    //       return (
    //         <SwiperSlide key={blogId}>
    //           <div className="h-full w-full before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-2xl before:border-2 before:border-neutral-700 before:border-opacity-30 before:transition-all lg:hover:before:border-opacity-100 lg:hover:before:bg-neutral-700 lg:hover:before:bg-opacity-20">
    //             <Link href={`/blog/${blogId}`}>
    //               <span className="flex h-full min-h-[200px] w-full items-center justify-center rounded-2xl object-cover">
    //                 <Image src={url.src} alt="" layout="fill" />
    //               </span>
    //             </Link>
    //           </div>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    // </>

    <div className="flex h-1/2 w-full flex-col items-center justify-center">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
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
              className="max-w-[8rem] md:max-w-[18rem] xl:max-w-[20rem] 2xl:max-w-[25rem] 3xl:max-w-[30rem]"
            >
              <Link href={`/blog/${blogId}`}>
                <div className="image-container">
                  <Image
                    className="image h-full w-full cursor-pointer rounded-lg transition-all lg:opacity-80 lg:hover:opacity-100"
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
