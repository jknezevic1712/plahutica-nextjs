import React from "react";
import Link from "next/link";

const Nav: React.FC<NavProps> = ({ homepageView }) => {
  return (
    <div
      className={`z-10 flex h-full w-full items-center justify-center border-b-2 border-transparent py-4 px-4 text-center transition-all lg:hover:border-neutral-700 ${
        homepageView
          ? "bg-neutral-700 bg-opacity-75 lg:hover:bg-opacity-90"
          : ""
      }`}
    >
      <div className="flex w-full items-center justify-center md:max-w-[90%]">
        <Link href={"/"}>
          <h1 className="flex w-fit cursor-pointer items-center justify-center font-dancing-script text-3xl uppercase tracking-wider text-lime-400 md:text-4xl 3xl:text-5xl">
            Plahutica
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
