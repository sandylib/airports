import React from 'react'

import Styles from './AirPortDetials.module.css';


export const AirPortDetials = ({airport, callback}) => {

  return (
    <div className={Styles.container}>
    <div className={Styles.content}>
      <div className={Styles.h3}>Air Port Code: {airport.airportCode}</div>
      <div className={Styles.p} data-testid='test-content-1'>{`City: ${airport.city.cityName} | Country: ${airport.country.countryName} | Region: ${airport.region.regionName}`}</div>
    </div>
    <div className={Styles.item}>
      <button data-testid='test-button' className={Styles.button} onClick={callback}>Back</button>
    </div>
  </div>
  )
}
