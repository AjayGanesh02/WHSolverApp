import { useState } from 'react';
import Results from './components/results/results';

import './app.scss';

function App() {

  const APIURL = 'https://api.whsolver.ajayganesh.com/solve?board='

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    //prevent default form submission
    e.preventDefault();

    //clear previous results
    setResults([]);
    setInput("");
    setSubmitted(true);

    //get results from API and assign
    const response = await fetch(`${APIURL}${input}`);
    const jsonresponse = await response.json();
    setResults(jsonresponse.data);
  }

  return (
    <div className="App">
      <header>
        <h1>Word Hunt Solver</h1>
        <h3>by Ajay Ganesh</h3>
        <p>This site finds the possible words that can be made from a 4x4 grid of letters.<br /> It can be used for games in the style of the iMessage game Word Hunt.</p>
      </header>
      <main>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your board as a string of 16 unseperated letters:<br />
              <input type="text" value={input} onChange={handleInput} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>


        <Results results={results} submitted={submitted} />
      </main>
    </div>
  );
}

export default App;
