import React, {useEffect, useState} from 'react';
import { AirPortCardList, AirPortDetials } from './components/';

import './App.css';

function App() {
  const [fetching, setFetching] = useState(true);
  const [hasError, setErrors] = useState(false);
  const [airports, setAirports] = useState([]);
  const [selected, setSelected] = useState(null);
  const [showDetialView, setShowDetialView] = useState(false);

  async function fetchData() {
    const res = await fetch("https://api.qantas.com/flight/refData/airport");
    res.json().then(res => {
      setAirports(res.slice(0, 100));
      console.log('res', res.slice(0, 100))
      setFetching(false);
    }).catch(err => {
      setErrors(err);
      setFetching(false);
    });
  }

  useEffect(() => {
    fetchData();
  },[]);

  const onHandleCallback = (code) => {
    const airport = airports.find(e=>e.airportCode === code);
    setSelected(airport);
    setShowDetialView(true);
  }

  const onHandleGoback = () => {
    setShowDetialView(false);
  }

  return (
    <div>
    {fetching && <div className="loader"></div>}
    {!showDetialView && <AirPortCardList airports={airports} callback={onHandleCallback}/>}
    {showDetialView && <AirPortDetials airport={selected} callback={onHandleGoback}/>}
    {hasError && <div>{hasError}</div>}
   
    </div>
  );
}

export default App;
