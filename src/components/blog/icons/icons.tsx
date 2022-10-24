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
      return CarImg;
    case IconTypes.Bed:
      return BedImg;
    case IconTypes.Restaurant:
      return RestaurantImg;
    case IconTypes.Beach:
      return BeachImg;
    case IconTypes.Camera:
      return CameraImg;
    case IconTypes.Excursion:
      return ExcursionsImg;
    case IconTypes.Money:
      return MoneyImg;
    default:
      return QuestionMarkImg;
  }
};

const AuxiliaryIcon: React.FC<BlogIconProps> = ({
  title,
  excursionIcon,
  iconType,
}) => {
  if (excursionIcon) {
    return (
      <h4 className="blog_icon excursion_icon">
        <Image
          src={getIconImg(iconType)}
          alt={`${iconType} icon`}
          height={"auto"}
          width={"auto"}
        />
        <span>{title}</span>
      </h4>
    );
  }

  return (
    <h2 className="blog_icon">
      <Image
        src={getIconImg(iconType)}
        alt={`${iconType} icon`}
        height={"auto"}
        width={"auto"}
      />
      <span>{title}</span>
    </h2>
  );
};

export default AuxiliaryIcon;
