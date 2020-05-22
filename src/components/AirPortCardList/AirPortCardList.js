import React from 'react'
import {useHistory} from 'react-router-dom';
import {AirPortCard } from '../'
import Styles from './AirPortCardList.module.css';
import Loading from '../HOC/Loading/Loading'


const AirPortCardList = ({airports}) => {

  const history = useHistory();
  const onHandleCallback = (code) => {
    history.push(`/details/${code}`)
  }


 return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Airport List</h1>
      {airports.length && airports.map((airport, i)=>(<AirPortCard key={`airport-${i}`} airport={airport} callback={onHandleCallback} idx={i+1} />))}
    </div>
  );
};


export default Loading('airports')(AirPortCardList);
