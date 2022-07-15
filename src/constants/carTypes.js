import ECarImage from "../assets/images/e-car.webp";
import SportsCarImage from "../assets/images/sports.jpeg";
import TwoWheelerCarImage from "../assets/images/two-wheeler.webp";

export const carTypes = [
  {
    id: 1,
    type: "electric",
    label: "Electric",
    description:
      "A battery electric car, or all-electric car that is propelled by one or more electric motors, using only energy stored in batteries",
    image: ECarImage,
  },
  {
    id: 2,
    type: "2-wheels",
    label: "2 Wheels",
    description:
      "A vehicle that runs on two wheels. The two wheels may be arranged in tandem, one behind the other or arranged and also side by side.",
    image: TwoWheelerCarImage,
  },
  {
    id: 3,
    type: "sports",
    label: "Sports",
    description: "A car designed with an emphasis on dynamic performance, such as handling, acceleration, top speed, or thrill of driving. ",
    image: SportsCarImage,
  },
];
