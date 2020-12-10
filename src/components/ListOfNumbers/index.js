import React, { useState } from "react";
import PropTypes from "prop-types";

import Box from "../Box";
import "./ListOfNumbers.css";

export default function ListOfNumbers({ boxes }) {
  const [sorted, setSorted] = useState(false);

  const toggleSort = () => setSorted(!sorted);

  return (
    <div className="numbers-container">
      <button className="btn btn-primary" onClick={toggleSort}>
        Sort
      </button>
      <div>
        {[...boxes]
          .sort((c, n) => (sorted ? 0 : c.number - n.number))
          .map(({ color, number }, i) => (
            <Box key={i} number={number} color={color} />
          ))}
      </div>
    </div>
  );
}

ListOfNumbers.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.object).isRequired
};
