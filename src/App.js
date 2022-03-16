import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LooadCountries></LooadCountries>
    </div>
  );
}

function LooadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Visiting Every Country In The World :)</h1>
      <h3>Available Cuontries:{countries.length}</h3>
    </div>
  )
}

export default App;
