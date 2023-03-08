import "./App.css";
import Sudoku from "./components/sudoku";
import { startingBoard } from "./components/sudoku/boards";

function App() {
  return (
    <div className="App">
      <Sudoku startingBoard={startingBoard} />
    </div>
  );
}

export default App;
