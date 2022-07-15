import React from "react";
import { Card } from "react-bootstrap";
import Button from "../../components/common/Button";
import { carTypes } from "../../constants/carTypes";
import { useNavigate } from "react-router";
import { CAR_DETAIL_PATH } from "../../constants/appPaths";
import "./carTypes.css";
import { RiEyeLine } from "react-icons/ri";

function CarTypes() {
  const navigate = useNavigate();

  return (
    <>
      <p className="primary-text m-5">Select Car Type:</p>

      <div className="container">
        {carTypes.map((carType) => (
          <Card style={{ width: "18rem", marginRight: "5rem" }}>
            <Card.Img variant="top" style={{ minHeight: "10rem", maxHeight: "10rem" }} src={carType.image} />
            <Card.Body>
              <Card.Title>{carType.label}</Card.Title>
              <Card.Text>{carType.description}</Card.Text>
              <Button
                className="pull-right"
                type="button"
                size="small"
                variant="btn-wide"
                btnText={"View"}
                iconPlacement="left"
                icon={<RiEyeLine />}
                onClick={() => {
                  navigate({ pathname: CAR_DETAIL_PATH.replace(":id", carType.id) });
                }}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default CarTypes;
