import TeslaImage1 from "../assets/images/electric/tesla-1.jpeg";
import TeslaImage2 from "../assets/images/electric/tesla-2.jpeg";
import TeslaImage3 from "../assets/images/electric/tesla-3.jpeg";

import Lit1 from "../assets/images/two-wheeler/Lit1.jpeg";
import Lit2 from "../assets/images/two-wheeler/Lit2.jpeg";
import Lit3 from "../assets/images/two-wheeler/Lit3.jpeg";
import Lit4 from "../assets/images/two-wheeler/Lit4.jpeg";

import Lam1 from "../assets/images/sports/lamborghini1.webp";

import Lam2 from "../assets/images/sports/lamborghini2.jpeg";

import Lam3 from "../assets/images/sports/lamborghini3.jpeg";

export const carDetails = [
  {
    id: 1,
    name: "Tesla Model S",
    makeModel: "Plaid - 2022",
    carParts: [
      { label: "Range (EPA est.)", value: "396 mi" },
      { label: "Acceleration", value: "1.99 s 0-60 mph" },
      { label: "Powertrain      ", value: "Tri Motor      " },
      { label: "Peak Power      ", value: "1,020 hp" },
      { label: "Wheels      ", value: "4" },
      { label: "Cargo      ", value: "28 cu ft" },
      { label: "Supercharging Max", value: "250 kW" },
    ],
    description: [
      {
        label: "Go Anywhere    ",
        value:
          "With up to 405 miles of estimated range and access to the worlds largest and most powerful fast charging network, youll spend less time plugged in and more time on the road.",
      },
      {
        label: "Freedom to Travel",
        value:
          "Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.    ",
      },
    ],
    images: [
      {
        original: TeslaImage1,
        thumbnail: TeslaImage1,
      },
      {
        original: TeslaImage2,
        thumbnail: TeslaImage2,
      },
      {
        original: TeslaImage3,
        thumbnail: TeslaImage3,
      },
    ],
  },
  {
    id: 2,
    name: "Lit Motors",
    makeModel: "C1 - 2022",
    carParts: [
      { label: "Battery", value: "18650 Lithium" },
      { label: "Battery Life", value: "2,000 cycles" },
      { label: "Range", value: "171 miles" },
      { label: "Speed	", value: "Motorcycle      " },
      { label: "Power", value: "40 kW (53.6 hp)" },
      { label: "Weight	", value: "798 lbs" },
    ],
    description: [
      {
        label: "Self Balancing   ",
        value:
          "The C1 is an electric self-balancing scooter-car cross-over from motorcycle innovation company Lit Motors from San Fransisco, U.S. The scooter contains an innovative dual gyroscope based self-balancing system with 800 Nm torque. The self balancing system is capable to keep the motorcycle stable during a crash.",
      },
      {
        label: "Other Features",
        value:
          "The C1 has a strong steel unibody chassis, seat-belts and airbags. The C1 has two 20,000 watt electric motors in both wheels (two-wheel drive, 2WD). The scooter has a powerful Lithium battery for an effective driving range of 171 miles. The charge time is 4 to 6 hours using a regular home outlet charger.",
      },
    ],
    images: [
      {
        original: Lit1,
        thumbnail: Lit1,
      },
      {
        original: Lit2,
        thumbnail: Lit2,
      },
      {
        original: Lit3,
        thumbnail: Lit3,
      },

      {
        original: Lit4,
        thumbnail: Lit4,
      },
    ],
  },
  {
    id: 3,
    name: "Lamborghini",
    makeModel: "Aventador S",
    carParts: [
      { label: "ENGINE", value: "V12 engine, 740CV" },
      { label: "DISPLACEMENT      ", value: "6,498 cm³ (396.5 cu in)      " },
      { label: "MAX. POWER      ", value: "740 CV (544 kW) @ 8.400 rpm" },
      { label: "TOP SPEED	", value: "350 km/h (217 mph) " },
      { label: "ACCELERATION 0-100 KM/H (MPH 0-62)", value: "2.9 s" },
      { label: "COMBINED CONSUMPTION *      ", value: "19,2 l/100km (WLTP)" },
    ],
    description: [
      {
        label: "4-WHEEL STEERING        ",
        value:
          "The Aventador S offers a unique combination of the active steering system (Lamborghini Dynamic Steering) and the rear-steering system (Lamborghini Rear-wheel Steering), ensuring top-of-the-line dynamic performance",
      },
      {
        label: "4 ACTIVE SUSPENSION        ",
        value:
          "The new Aventador S features magneto-rheological front and rear shock absorbers with pushrod system, which constantly modify the behaviour of the suspensions according to the road conditions and the driving mode selected",
      },
    ],
    images: [
      {
        original: Lam1,
        thumbnail: Lam1,
      },
      {
        original: Lam2,
        thumbnail: Lam2,
      },
      {
        original: Lam3,
        thumbnail: Lam3,
      },
    ],
  },
];
