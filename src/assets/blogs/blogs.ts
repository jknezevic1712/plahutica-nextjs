import {
  IstriaRoadTrip2022_Overview,
  IstriaRoadTrip2022,
} from "./istria_road_trip-2022/istria_road_trip_2022";
import { Zagorje2022_Overview, Zagorje2022 } from "./zagorje-2022/zagorje_2022";
import { Rim2022_Overview, Rim2022 } from "./rim-2022/rim_2022";
import { Prague2022_Overview, Prague2022 } from "./prague-2022/prague_2022";

import IstriaRoadTrip2022Images from "./istria_road_trip-2022/images/images";
import Zagorje2022Images from "./zagorje-2022/images/images";
import Rim2022Images from "./rim-2022/images/images";
import Prague2022Images from "./prague-2022/images/images";

export const Blogs = [Rim2022, IstriaRoadTrip2022, Zagorje2022, Prague2022];

export const BlogsOverviews = [
  Rim2022_Overview,
  IstriaRoadTrip2022_Overview,
  Zagorje2022_Overview,
  Prague2022_Overview,
];

export const BlogBanners = [
  Rim2022Images.Panteon,
  IstriaRoadTrip2022Images.Colosseum3,
  Zagorje2022Images.Kumrovec5,
  Prague2022Images.Naplavka2,
];
