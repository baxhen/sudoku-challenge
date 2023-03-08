import React from "react";
import { initialState, reducer, SudokuState } from "./reducer";
import { SudokuBoard, SudokuBox, SudokuProps } from "./sudoku";

export const useSudoku = (props: SudokuProps) => {
  const { startingBoard } = props;

  const [state, dispatch] = React.useReducer(reducer, initialState, (state) => {
    if (startingBoard) {
      const board = startingBoard.map((board) =>
        board.map((block) =>
          block.map((row) =>
            row.map((box) => {
              if (!box) {
                const guessBox: SudokuBox = { value: 0, type: "to-guess" };
                return guessBox;
              }

              return box;
            })
          )
        )
      ) as SudokuBoard<SudokuBox>;

      return { ...state, board };
    }

    return state;
  });

  return {
    board: state.board,
    status: state.error || state.completed || " - ",
    dispatch,
  };
};
