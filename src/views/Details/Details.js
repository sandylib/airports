import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {AirPortDetials, Loader} from '../../components/';


export const Details = () => {

  const { code } = useParams();
  const history = useHistory();
  const [fetching, setFetching] = useState(true);
  const [hasError, setErrors] = useState(false);
  const [airport, setAirport] = useState(null);
  useEffect(() => {
    async function fetchData() {

      try {
       const res = await fetch("https://api.qantas.com/flight/refData/airport");
       const data = await res.json();
       
       const airport = data.find(e => e.airportCode === code);
       setAirport(airport);
       setFetching(false);
        
      } catch (error) {
       setErrors(true);
       setFetching(false);
        
      }
   }

    fetchData();
  },[code]);



  const onHandleGoback = () => {
    history.push('/');
  }

  
  return (
    <div>
    {fetching && (<Loader />)}
    {!fetching && (airport !== null) && <AirPortDetials airport={airport} callback={onHandleGoback}/>}
    {hasError && <div>{hasError}</div>}
   
    </div>
  );
}
