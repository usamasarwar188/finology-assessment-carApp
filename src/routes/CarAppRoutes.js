import { BASE_PATH, CAR_DETAIL_PATH, CAR_TYPES_PATH } from "../constants/appPaths";
import CarDetails from "../pages/CarDetails/CarDetails";
import CarTypes from "../pages/CarTypes/CarTypes";

export const CAR_APP_ROUTES = [
  {
    name: "car_types",
    path: CAR_TYPES_PATH,
    element: CarTypes,
  },
  {
    name: "car_details",
    path: CAR_DETAIL_PATH,
    element: CarDetails,
  },
];
