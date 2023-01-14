import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const isButtonVisible = (event: any) => {
    const screenHeight = event.path[1].screen.height;
    const scrollValue = event.path[1].scrollY;

    scrollValue >= screenHeight && !visible
      ? setVisible(true)
      : scrollValue < screenHeight && visible
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
    <div className="absolute z-0 h-full w-full">
      <div className="sticky top-1/2 z-10 w-fit pl-4">
        <BsFillArrowUpCircleFill
          className={`min-h-[50px] min-w-[50px] cursor-pointer transition-all ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => window.scrollTo(0, 0)}
        />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
