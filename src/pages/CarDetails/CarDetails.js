import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import ReactImageGallery from "react-image-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router";
import ECarImage from "../../assets/images/e-car.webp";
import SportsImage from "../../assets/images/sports.jpeg";
import CarDescription from "../../components/carDescription/CarDescription";
import CarParts from "../../components/carParts/CarParts";
import DetailTabs from "../../components/common/DetailTabs";
import { carDetails } from "../../constants/carDetails";
import "./carDetail.css";

function CarDetailTabs({ car }) {
  const carDetailTablist = [
    { key: "car-parts", title: "Car Parts", component: CarParts, componentProps: { carParts: car.carParts } },
    { key: "description", title: "Description", component: CarDescription, componentProps: { carDescription: car.description } },
  ];
  return <DetailTabs defaultKey={carDetailTablist[0].key} tabList={carDetailTablist} />;
}

function CarHeader({ car }) {
  return (
    <div className="d-flex mt-2 justify-content-center">
      <div className="d-flex col-sm-8 car-header">
        <label className="header-text">
          <div>{car.name}</div>
          <div>{car.makeModel}</div>
        </label>
      </div>
    </div>
  );
}

function CarDetails() {
  const params = useParams();
  const carId = params?.id;
  const car = carDetails.find((c) => c.id === parseInt(carId));
  return (
    <div>
      <ReactImageGallery items={car.images} />
      <CarHeader car={car} />
      <div className={`card h-100 mt-2`}>
        <div className="card-body">
          <CarDetailTabs car={car} />
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
