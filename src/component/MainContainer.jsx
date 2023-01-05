import React, { useState, useEffect } from "react";
import RightContent from "./RightContent";
import Square from "./Square";
import { WinnerPattern } from "./WinnerPattern";

const initialValue = [null, null, null, null, null, null, null, null, null];

const MainContainer = () => {
  const [GameState, setGameState] = useState(initialValue);
  const [xturnplayer, setXTurnPlayer] = useState(true);
  const [WinnerTrue, setWinnerTrue] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const SelectBox = (index) => {
    console.log(index);
    let copyState = [...GameState];
    if (copyState[index] === null) {
      setXTurnPlayer(!xturnplayer);
      setGameState(copyState);
      copyState[index] = xturnplayer ? "X" : "O";
    }
  };

  const Reset = () => {
    setXTurnPlayer(true);
    setGameState(initialValue);
    setWinnerTrue(false);
  };

  console.log(GameState);

  const Winner = () => {
    WinnerPattern.map((pattern) => {
      const [a, b, c] = pattern;
      if (
        GameState[a] !== null &&
        GameState[a] === GameState[b] &&
        GameState[a] === GameState[c]
      ) {
        setWinnerTrue(true);
        setPlayerName(GameState[a]);
      }
    });

    return false;
  };

  useEffect(() => {
    Winner();
  }, [GameState]);

  return (
    <>
      <div className="sm:grid grid-cols-2 gap-2 h-full">
        <div className="grid place-items-center h-1/2 sm:h-full">
          <RightContent Reset={Reset} />
        </div>
        <div className=" grid place-items-center h-1/2 sm:h-full ">
          {!WinnerTrue ? (
            <div className=" bg-red-500 mx-auto w-min ">
              <div className="row1 flex">
                <Square value={GameState[0]} SelectBox={() => SelectBox(0)} />
                <Square value={GameState[1]} SelectBox={() => SelectBox(1)} />
                <Square value={GameState[2]} SelectBox={() => SelectBox(2)} />
              </div>
              <div className="row2 flex">
                <Square value={GameState[3]} SelectBox={() => SelectBox(3)} />
                <Square value={GameState[4]} SelectBox={() => SelectBox(4)} />
                <Square value={GameState[5]} SelectBox={() => SelectBox(5)} />
              </div>
              <div className="row3 flex">
                <Square value={GameState[6]} SelectBox={() => SelectBox(6)} />
                <Square value={GameState[7]} SelectBox={() => SelectBox(7)} />
                <Square value={GameState[8]} SelectBox={() => SelectBox(8)} />
              </div>
            </div>
          ) : (
            <>
              {playerName === "" ? <h1>Its Draw</h1> : playerName} won the game
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
