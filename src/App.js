import React, { useState, useEffect } from "react";
import "./App.css";
import Swal from "sweetalert2";
import Row from "./Row";

const word = "spear";

const DummyRow = () => (
  <div className="GameRow">
    <div className="GameSquare" />
    <div className="GameSquare" />
    <div className="GameSquare" />
    <div className="GameSquare" />
    <div className="GameSquare" />
  </div>
);

function App() {
  const [won, setWon] = useState(false);
  const [row, setRow] = useState(1);

  if (won) {
    Swal.fire("Wow! You win!");
  }

  if (row > 6) {
    Swal.fire("Bummer! You Lose!");
  }

  console.log(row);
  return (
    <div className="App">
      <h1>Wordle Clone</h1>
      <div className="GameContainer">
        <Row
          word={word}
          row={row}
          setRow={setRow}
          finalized={row > 1}
          won={won}
          setWon={setWon}
        />
        {row >= 2 ? (
          <Row
            word={word}
            row={row}
            setRow={setRow}
            finalized={row > 2}
            won={won}
            setWon={setWon}
          />
        ) : (
          <DummyRow />
        )}
        {row >= 3 ? (
          <Row
            word={word}
            row={row}
            setRow={setRow}
            finalized={row > 3}
            won={won}
            setWon={setWon}
          />
        ) : (
          <DummyRow />
        )}
        {row >= 4 ? (
          <Row
            word={word}
            row={row}
            setRow={setRow}
            finalized={row > 4}
            won={won}
            setWon={setWon}
          />
        ) : (
          <DummyRow />
        )}
        {row >= 5 ? (
          <Row
            word={word}
            row={row}
            setRow={setRow}
            finalized={row > 5}
            won={won}
            setWon={setWon}
          />
        ) : (
          <DummyRow />
        )}
        {row >= 6 ? (
          <Row
            word={word}
            row={row}
            setRow={setRow}
            finalized={row > 6}
            won={won}
            setWon={setWon}
          />
        ) : (
          <DummyRow />
        )}
      </div>
    </div>
  );
}

export default App;
