import './App.css';
import {useState} from 'react';

  

function App() {
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [summary, setSummary] = useState(0)
  const [gender, setGender] = useState('female')

  function calculate(e){
    e.preventDefault();
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let result = 0

    if (gender === 'female') {
      result = gramsLeft / (weight * 0.6)
      setSummary(result)
    }
    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7)
      setSummary(result)
    }

    if (result < 0){
      setSummary(0)
    }

  }

  return (
    <div className = 'form'>
      <h3>Calculating blood alcohol level</h3>
      <form onSubmit = {calculate}>
        <div>
          <label>Weight</label>
          <input type ="number"  onChange ={e =>setWeight(e.target.value)}/>
        </div>

        <div>
          <label for ="Bottles">Bottles</label>
          <select name="Bottles" id="nr" className="select" onChange ={e =>setBottles(e.target.value)}>
            <option value="0"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label for ="Time">Time</label>
          <select name ="Time" id="hours" className="select" onChange ={e =>setTime(e.target.value)}>
            <option value="0"></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

        </div>


        <div>
          <label>Gender</label>
          <input type='radio' id='female' name='radiobutton' value ='female' defaultChecked onChange={e =>setGender(e.target.value)}></input>
          <label>Female</label>
          <input type='radio' id='male' name='radiobutton' value='male' onChange={e =>setGender(e.target.value)}></input>
          <label>Male</label>
        </div>

        <div>
          <label></label>
          <output>{summary.toFixed(2)}</output>
        </div>
        <button>Count</button>
      </form>
    </div>
    
  );
}

export default App;
