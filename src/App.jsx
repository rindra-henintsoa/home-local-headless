import logo from './logo.svg';
import './App.css';
import Posts from './components/pages/posts';
import ChildParent from './components/ChildParent';
import { Input } from './components/forms/Input';
import { useEffect, useState } from 'react';

const PRODUCTS = [
  { category: "fruits", price: "$1", stocked: true, name: "Apple"},
  { category: "fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  { category: "fruits", price: "$2", stocked: false, name: "Passionfruit"},
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
];

function App() {
  const [duration, setDuration] = useState(5);
  const [timedurationleft, setTimeDurationLeft] = useState(duration);
  
  useEffect( () => {
    const timer = setInterval(() => {
      setTimeDurationLeft( (v) => {
        if ( v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [duration]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input placeholder="compléter ..." value={duration} onChange={setDuration} />
        Temps restant : {timedurationleft}

        <input 
          type="text"

        />
         {/* <Posts />
         <ChildParent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
