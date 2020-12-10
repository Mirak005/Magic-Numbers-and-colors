import React, { useState } from "react";

import Form from "./components/Form";
import ListOfNumbers from "./components/ListOfNumbers";
import randomNumbersAndColors from "./utils/randomNumbersAndColors";

import "./styles.css";

export default function App() {
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setBoxes(randomNumbersAndColors(value, 100, -100));
  };

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} />
      <ListOfNumbers boxes={boxes} />
    </div>
  );
}
