import React from "react";
import "./carParts.css";

function CarParts({ carParts }) {
  return (
    <div>
      <ul className="tab-data">
        {carParts.map((e) => (
          <li className="mt-3">
            <label style={{ fontSize: "large", fontWeight: "bold" }}>{e.label}</label>
            <p style={{ paddingLeft: "3rem" }}>{e.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarParts;
