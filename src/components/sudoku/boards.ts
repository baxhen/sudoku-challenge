import { SudokuBoard, SudokuBox, SudokuStartingBox } from "./sudoku";

export const startingBoard: SudokuBoard<SudokuStartingBox> = [
  [
    [
      [0, 0, 0],
      [{ value: 6, type: "starting" }, { value: 8, type: "starting" }, 0],
      [{ value: 1, type: "starting" }, { value: 9, type: "starting" }, 0],
    ],
    [
      [{ value: 2, type: "starting" }, { value: 6, type: "starting" }, 0],
      [0, { value: 7, type: "starting" }, 0],
      [0, 0, { value: 4, type: "starting" }],
    ],
    [
      [{ value: 7, type: "starting" }, { value: 1, type: "starting" }, 0],
      [0, { value: 9, type: "starting" }, 0],
      [{ value: 5, type: "starting" }, 0, 0],
    ],
  ],
  [
    [
      [{ value: 8, type: "starting" }, { value: 2, type: "starting" }, 0],
      [0, 0, { value: 4, type: "starting" }],
      [0, { value: 5, type: "starting" }, 0],
    ],
    [
      [{ value: 1, type: "starting" }, 0, 0],
      [{ value: 6, type: "starting" }, 0, { value: 2, type: "starting" }],
      [0, 0, { value: 3, type: "starting" }],
    ],
    [
      [0, { value: 4, type: "starting" }, 0],
      [{ value: 9, type: "starting" }, 0, 0],
      [0, { value: 2, type: "starting" }, { value: 8, type: "starting" }],
    ],
  ],
  [
    [
      [0, 0, { value: 9, type: "starting" }],
      [0, { value: 4, type: "starting" }, 0],
      [{ value: 7, type: "starting" }, 0, { value: 3, type: "starting" }],
    ],
    [
      [{ value: 3, type: "starting" }, 0, 0],
      [0, { value: 5, type: "starting" }, 0],
      [0, { value: 1, type: "starting" }, { value: 8, type: "starting" }],
    ],
    [
      [0, { value: 7, type: "starting" }, { value: 4, type: "starting" }],
      [0, { value: 3, type: "starting" }, { value: 6, type: "starting" }],
      [0, 0, 0],
    ],
  ],
];
export const emptyBoard: SudokuBoard<SudokuBox> = [
  [
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
  ],
  [
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
  ],
  [
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
    [
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
      [
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
        { value: 0, type: "to-guess" },
      ],
    ],
  ],
];
