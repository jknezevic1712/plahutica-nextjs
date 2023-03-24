import Link from "next/link";

import { BsFillQuestionCircleFill } from "react-icons/bs";

const AboutIcon = () => {
  return (
    <>
      <Link href={"/about"}>
        <p className="hidden rounded p-2 font-dancing-script font-extrabold uppercase italic tracking-wider text-emerald-600 md:block md:w-fit md:cursor-pointer md:text-xl lg:text-2xl lg:transition-all">
          O nama
        </p>
      </Link>
      <Link href={"/about"}>
        <BsFillQuestionCircleFill className="text-2xl text-emerald-600 md:hidden" />
      </Link>
    </>
  );
};

export default AboutIcon;
