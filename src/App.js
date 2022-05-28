import { useState } from 'react';
import Results from './components/results/results';
import Switch from "react-switch";
import './app.scss';

function App() {

  const APIURL = 'https://api.whsolver.ajayganesh.com/solve?board='

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);
  const [checked, setChecked] = useState(true);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleToggle = () => {
    setChecked(!checked);
  }

  const handleSubmit = async (e) => {
    //prevent default form submission
    e.preventDefault();

    //clear previous results
    setResults([]);
    setInput("");

    //get results from API and assign
    const response = await fetch(`${APIURL}${input}` + (checked ? '&sort=true' : '&sort=false'));
    const jsonresponse = await response.json();
    setResults(jsonresponse.data);
    setSubmitted(true);
  }

  return (
    <div className="App">
      <header>
        <h1>Word Hunt Solver</h1>
        <h3>by Ajay Ganesh</h3>
        <p>This site finds the possible words that can be made from a 4x4 grid of letters.<br />
          It can be used for games in the style of the iMessage game Word Hunt.<br />
          <br />
          This site is open source! The React frontend code can be found <a href="https://github.com/AjayGanesh02/whsolverfrontend">here</a>, <br />
          and the Python API code can be found <a href="https://github.com/AjayGanesh02/whsolverbackend">here</a>.</p>
      </header>
      <main>
        <div className='form'>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your board as a string of 16 unseperated letters:<br />
              <input type="text" value={input} onChange={handleInput} />
            </label>
            <br /><br />
            <label>
              Sort results by length:<br />
              <Switch onChange={handleToggle} checked={checked} height={20} width={50} />
            </label>

            <br /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>


        <Results results={results} submitted={submitted} />
      </main>
    </div>
  );
}

export default App;
