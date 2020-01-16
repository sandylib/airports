import React from 'react'
import {AirPortCard } from './'
import Styles from './AirPortCardList.module.css';

export const AirPortCardList = ({airports, callback}) => {


 return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>Airport List</h1>
      {airports.length && airports.map((airport, i)=>(<AirPortCard key={`airport-${i}`} airport={airport} callback={callback} idx={i+1} />))}
    </div>
  );
};
