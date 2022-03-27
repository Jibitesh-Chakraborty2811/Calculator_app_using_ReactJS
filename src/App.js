import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const o = ['/','*','+','-','.'];

  const updateCalc = value => {

    if(
      o.includes(value) && calc === '' ||
      o.includes(value) && o.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc + value);
  }

  const calculate = () =>
  {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () =>
  {
    if(calc == ''){
      return;
    }

    const value = calc.slice(0,-1);
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="calculator">
         <div className="display">
           {calc || "0"}
         </div>
         <div className="operators">
           <button onClick={() => updateCalc('/')}>/</button>
           <button onClick={() => updateCalc('*')}>*</button>
           <button onClick={() => updateCalc('+')}>+</button>
           <button onClick={() => updateCalc('-')}>-</button>
           <button onClick={deleteLast}>DEL</button>
         </div>
         <div className="digits">
           <button className="1" id="1" onClick={() => updateCalc('1')}>1</button>
           <button className="2" id="2" onClick={() => updateCalc('2')}>2</button>
           <button className="3" id="3" onClick={() => updateCalc('3')}>3</button>
           <button className="4" id="4" onClick={() => updateCalc('4')}>4</button>
           <button className="5" id="5" onClick={() => updateCalc('5')}>5</button>
           <button className="6" id="6" onClick={() => updateCalc('6')}>6</button>
           <button className="7" id="7" onClick={() => updateCalc('7')}>7</button>
           <button className="8" id="8" onClick={() => updateCalc('8')}>8</button>
           <button className="9" id="9" onClick={() => updateCalc('9')}>9</button>
           <button className="0" id="0" onClick={() => updateCalc('0')}>0</button>
           <button className="dot" id="dot" onClick={() => updateCalc('.')}>.</button>
           <button className="=" id="=" onClick={calculate}>=</button>
         </div>
      </div>
    </div>
  );
}

export default App;
