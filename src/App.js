import { useState } from 'react';
import Results from './components/results/results';
import Switch from "react-switch";
import ClipLoader from "react-spinners/ClipLoader";
import './app.scss';

function App() {

  const APIURL = 'https://api.whsolver.ajayganesh.com/solve?board='

  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);
  const [checked, setChecked] = useState(true);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setResults([]);
    setInput("");

    //get results from API and assign
    const response = await fetch(`${APIURL}${input}` + (checked ? '&sort=true' : '&sort=false'));
    const jsonresponse = await response.json();
    setResults(jsonresponse.data);
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <div className="App">
      <header>
        <h1>Word Hunt Solver</h1>
        <h3>by Ajay Ganesh</h3>
        <p>This site finds the possible words that can be made from a 4x4 grid of letters.<br />
          It can be used for games in the style of the iMessage game Word Hunt.<br />
          <br />
          </p>
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
        <ClipLoader color='green' loading={loading}/>
        <h3>How does this site work?</h3>
        <p>Your board string is sent to a python API at <a href="https://api.whsolver.ajayganesh.com">api.whsolver.ajayganesh.com</a>.<br/>
        Here, a depth first search algorithm tries every possible combination of letters, stopping if the first few characters don't make a legal word.<br />
        This info is sorted by word length if the sort toggle is turned on. <br/>
        Protip: if the toggle is turned off, the solver returns words that start <br/>
        near the top left corner of the board first. This way, the words are arranged in a manner that makes their starting locations<br/>
        in order, which might lead to you entering them in faster!
        <br/><br/>
        This site is open source! The React frontend code can be found <a href="https://github.com/AjayGanesh02/whsolverfrontend">here</a>, <br />
        and the Python API code can be found <a href="https://github.com/AjayGanesh02/whsolverbackend">here</a>.</p>
      </main>
    </div>
  );
}

export default App;
