import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";

const Row = ({ word, row, setRow, finalized, won, setWon }) => {
  const firstInputRef = useRef(null);
  const [guess, setGuess] = useState("");

  const [classNames, setClassNames] = useState(null);

  const wordLetters = word.split("");
  useEffect(() => {
    guess === "" && firstInputRef.current.focus();
    window.addEventListener("keyup", keyPressHandler);
    // Remove event listeners on cleanup
    if (finalized) window.removeEventListener("keyup", keyPressHandler);
    return () => {
      window.removeEventListener("keyup", keyPressHandler);
    };
  }, [guess, finalized]);

  const keyPressHandler = (e) => {
    if (e.keyCode === 13) {
      //Enter button pressed
      if (guess.length === 5) {
        console.log(guess, word);
        if (guess.toLowerCase() === word.toLowerCase()) {
          setClassNames([
            "GuessHolderGreen",
            "GuessHolderGreen",
            "GuessHolderGreen",
            "GuessHolderGreen",
            "GuessHolderGreen",
          ]);
          setWon(true);
        } else {
          let classNamesHolder = [
            "GuessHolderGrey",
            "GuessHolderGrey",
            "GuessHolderGrey",
            "GuessHolderGrey",
            "GuessHolderGrey",
          ];
          setRow(row + 1);
          const guessArr = guess.split("");

          for (let i = 0; i < guessArr.length; i++) {
            if (word.charAt(i) === guessArr[i]) {
              classNamesHolder[i] = "GuessHolderGreen";
            }
            for (let x = 0; x < wordLetters.length; x++) {
              if (
                guessArr[i] != wordLetters[i] &&
                guessArr[i] === wordLetters[x]
              ) {
                classNamesHolder[i] = "GuessHolderYellow";
              }
            }
          }

          setClassNames(classNamesHolder);
        }
      }
    }

    if (e.keyCode === 8) {
      //Delete button pressed
      if (guess.length) {
        if (guess.length === 1) {
          setGuess("");
        } else {
          const newGuess = guess.slice(0, -1);
          const previousInput =
            e.target.parentElement.previousElementSibling.childNodes[0];
          previousInput.focus();
          setGuess(newGuess);
        }
      }
    }
  };

  const addLetterAndTab = (e) => {
    if (e.target.value.match(/^[A-Za-z]+$/)) {
      if (guess.length < 5) setGuess(guess + e.target.value);
      if (guess.length < 4) {
        const nextInput =
          e.target.parentElement.nextElementSibling.childNodes[0];
        nextInput.focus();
      }
    }
  };

  return (
    <div className="GameRow">
      <div className="GameSquare">
        <input
          className={classNames ? classNames[0] : "GuessHolder"}
          id="unentered"
          type="text"
          onChange={(e) => addLetterAndTab(e)}
          value={guess.charAt(0)}
          disabled={finalized || won}
          ref={firstInputRef}
        />
      </div>
      <div className="GameSquare">
        <input
          className={classNames ? classNames[1] : "GuessHolder"}
          type="text"
          onChange={(e) => addLetterAndTab(e)}
          value={guess.charAt(1)}
          disabled={finalized || won}
        />
      </div>
      <div className="GameSquare">
        <input
          className={classNames ? classNames[2] : "GuessHolder"}
          type="text"
          onChange={(e) => addLetterAndTab(e)}
          value={guess.charAt(2)}
          disabled={finalized || won}
        />
      </div>
      <div className="GameSquare">
        <input
          className={classNames ? classNames[3] : "GuessHolder"}
          type="text"
          onChange={(e) => addLetterAndTab(e)}
          value={guess.charAt(3)}
          disabled={finalized || won}
        />
      </div>
      <div className="GameSquare">
        <input
          className={classNames ? classNames[4] : "GuessHolder"}
          type="text"
          onChange={(e) => addLetterAndTab(e)}
          value={guess.charAt(4)}
          disabled={finalized || won}
        />
      </div>
    </div>
  );
};

export default Row;
