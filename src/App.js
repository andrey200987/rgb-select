import logo from './logo.svg';
// import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

const toHex = function (c) {
  if (Number.parseInt(c, 16) <= 15) {
    return '0' + c;
  }
  return c;
};

function App() {
  const [alpha, setAlpha] = useState(255); //
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const alphaHex = toHex(Number(alpha).toString(16)); //
  const redHex = toHex(Number(red).toString(16));
  const greenHex = toHex(Number(green).toString(16));
  const blueHex = toHex(Number(blue).toString(16));
  const colorHex = ('#' + redHex + greenHex + blueHex + alphaHex).toUpperCase();
  console.log(alphaHex);
  document.body.style.background = colorHex;

  return (
    <div className="App">
      <section className={styles.colorPicker}>
        <div>
          <label for="red">R:</label>
          <input
            type="range"
            min="0"
            max="255"
            id="red"
            value={red}
            onChange={function (e) {
              const value = e.target.value;
              setRed(value);
            }}
          ></input>
          <span>{red}</span>
        </div>
        <div>
          <label for="green">G:</label>
          <input
            type="range"
            id="green"
            min="0"
            max="255"
            value={green}
            onChange={function (e) {
              const value = e.target.value;
              setGreen(value);
            }}
          ></input>
          <span>{green} </span>
        </div>
        <div>
          <label for="blue">B:</label>
          <input
            type="range"
            id="blue"
            min="0"
            max="255"
            value={blue}
            onChange={function (e) {
              const value = e.target.value;
              setBlue(value);
            }}
          ></input>
          <span>{blue}</span>
        </div>
        <div>
          <label for="alpha">A:</label>
          <input
            type="range"
            min="0"
            max="255"
            id="alpha"
            value={alpha}
            onChange={function (e) {
              const value = e.target.value;
              setAlpha(value);
            }}
          ></input>
          <span>{alpha}</span>
        </div>
      </section>
      <div>HEX: {colorHex}</div>
    </div>
  );
}

export default App;
