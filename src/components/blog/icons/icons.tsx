import React from "react";
import Image from "next/image";

import { IconTypes } from "../../../../types/enums/icons";

import CarImg from "assets/images/blogIcons/car.png";
import BedImg from "assets/images/blogIcons/bed.png";
import RestaurantImg from "assets/images/blogIcons/restaurant.png";
import BeachImg from "assets/images/blogIcons/beach.png";
import CameraImg from "assets/images/blogIcons/camera.png";
import ExcursionsImg from "assets/images/blogIcons/excursions.png";
import MoneyImg from "assets/images/blogIcons/money.png";
import QuestionMarkImg from "assets/images/blogIcons/question.png";

const getIconImg = (iconType: string) => {
  switch (iconType) {
    case IconTypes.Car:
      return CarImg.src;
    case IconTypes.Bed:
      return BedImg.src;
    case IconTypes.Restaurant:
      return RestaurantImg.src;
    case IconTypes.Beach:
      return BeachImg.src;
    case IconTypes.Camera:
      return CameraImg.src;
    case IconTypes.Excursion:
      return ExcursionsImg.src;
    case IconTypes.Money:
      return MoneyImg.src;
    default:
      return QuestionMarkImg.src;
  }
};

const AuxiliaryIcon = ({ title, excursionIcon, iconType }: BlogIconProps) => {
  if (excursionIcon) {
    return (
      <h4 className="flex w-full items-center justify-center py-12">
        <div className="icon-container">
          <Image
            className="icon rounded-lg"
            src={getIconImg(iconType)}
            alt={`${iconType} icon`}
            layout="fill"
          />
        </div>
        <span className="ml-6 flex min-h-[50px] items-center justify-center font-plus-jakarta-sans text-2xl italic text-lime-400 lg:text-3xl">
          {title}
        </span>
      </h4>
    );
  }

  return (
    <h2 className="flex w-fit items-center justify-center pb-12">
      <div className="icon-container">
        <Image
          className="icon rounded-lg"
          src={getIconImg(iconType)}
          alt={`${iconType} icon`}
          layout="fill"
        />
      </div>
      <span className="flex min-h-[50px] items-center justify-center pl-6 font-plus-jakarta-sans text-2xl italic text-lime-400 lg:text-3xl">
        {title}
      </span>
    </h2>
  );
};

export default AuxiliaryIcon;
