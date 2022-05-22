import { useState } from 'react';
import Board from './components/board/board';
import Results from './components/results/results';

function App() {

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("");
  }

  return (
    <div className="App">
      <header>
        <h1>Word Hunt Solver</h1>
        <p>This site finds the possible words that can be made from a 4x4 grid of letters.<br/> It can be used for games in the style of the iMessage game Word Hunt.</p>
      </header>
      <main>
      <form>
        <label>
          Enter your board as a string of unseperated letters:<br/>
          <input type="text" value={input} onChange={handleInput} />
        </label>
        <input type="submit" onChange={handleSubmit} />
      </form>
      <Board/>
      <Results/>
      </main>
    </div>
  );
}

export default App;
