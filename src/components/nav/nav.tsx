import React from "react";
import Link from "next/link";

import { BsFillQuestionCircleFill } from "react-icons/bs";

const Nav: React.FC<NavProps> = ({ homepageView }) => {
  return (
    <div
      className={`z-10 flex h-full w-full items-center border-b-2 border-transparent py-4 px-4 text-center transition-all lg:px-12 lg:hover:border-neutral-700 ${
        homepageView
          ? "bg-neutral-700 bg-opacity-75 lg:hover:bg-opacity-90"
          : ""
      }`}
    >
      <div className="flex w-1/4 items-center justify-start">
        <Link href={"/about"}>
          <p className="hidden rounded p-2 font-dancing-script font-extrabold uppercase italic tracking-wider text-emerald-600 md:block md:w-fit md:cursor-pointer md:text-xl lg:text-2xl lg:transition-all">
            O nama
          </p>
        </Link>
        <Link href={"/about"}>
          <BsFillQuestionCircleFill className="text-2xl text-emerald-600 md:hidden" />
        </Link>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <Link href={"/"}>
          <h1 className="flex w-fit cursor-pointer items-center justify-center font-dancing-script text-3xl font-extrabold uppercase italic tracking-wider text-emerald-600 md:text-4xl 3xl:text-5xl">
            Plahutica
          </h1>
        </Link>
      </div>
      <div className="flex w-1/4 items-center justify-end rounded p-2"></div>
    </div>
  );
};

export default Nav;
