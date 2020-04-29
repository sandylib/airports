import React, {useEffect, useState} from 'react';
import { AirPortCardList, Loader } from "../../components/"

import {useHistory} from 'react-router-dom';


export const Home = () => {
  const [fetching, setFetching] = useState(true);
  const [hasError, setErrors] = useState(false);
  const [airports, setAirports] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.qantas.com/flight/refData/airport");
      res.json().then(res => {
        setAirports(res);
        setFetching(false);
      }).catch(err => {
        setErrors(err);
        setFetching(false);
      });
    }
    
    fetchData();
  },[]);

  const onHandleCallback = (code) => {
    history.push(`/details/${code}`)
  }

 


  return (
    <div>
     {fetching && <Loader />}
     {!fetching && <AirPortCardList airports={airports} callback={onHandleCallback}/>}
     {hasError && <div>{hasError}</div>}
    </div>
  )
}
