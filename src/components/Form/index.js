import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Form({ handleSubmit }) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Choose a random number and watch the Magic happen :)</h1>
      <form onSubmit={(e) => handleSubmit(e, number)}>
        <input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          value={number}
        />
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
