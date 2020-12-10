import React from "react";
import PropTypes from "prop-types";

export default function Box({ number, color }) {
  return (
    <svg
      className="container"
      height="50"
      width="50"
      style={{
        background: color,
        margin: "1px",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      <text
        x="50%"
        y="50%"
        fill="white"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {number.toString()}
      </text>
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

Box.propTypes = {
  color: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
