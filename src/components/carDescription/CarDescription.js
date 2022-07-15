import React from "react";

function CarDescription({ carDescription }) {
  return (
    <div>
      <ul>
        {carDescription.map((e) => (
          <li className="mt-3">
            <label style={{ fontSize: "large", fontWeight: "bold" }}>{e.label}</label>
            <p style={{ paddingLeft: "3rem" }}>{e.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarDescription;
