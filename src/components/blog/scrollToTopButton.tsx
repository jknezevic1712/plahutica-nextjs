import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const isButtonVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    scrolled >= 1500 && !visible
      ? setVisible(true)
      : scrolled < 1500 && visible
      ? setVisible(false)
      : null;
  };

  useEffect(() => {
    window.addEventListener("scroll", isButtonVisible);

    return () => {
      window.removeEventListener("scroll", isButtonVisible);
    };
  }, [visible]);

  return (
    <div className="absolute h-full w-full">
      <div className="sticky top-3/4 z-10 float-right w-fit pr-4">
        <BsFillArrowUpCircleFill
          className={`min-h-[50px] min-w-[50px] cursor-pointer transition-all ${
            visible ? "opacity-50 hover:opacity-100" : "opacity-0"
          }`}
          onClick={() => window.scrollTo({ top: 0 })}
        />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
