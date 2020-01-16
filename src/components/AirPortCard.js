import React from 'react'
import Styles from './AirPortCard.module.css'
import arrow from '../arrow-right-solid.svg'

export const AirPortCard = ({airport, callback, idx}) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.h3}>Air Port Code: {airport.airportCode}</div>
        <div className={Styles.p} data-testid={`test-content-${idx}`}>{`City: ${airport.city.cityName} | Country: ${airport.country.countryName} | Region: ${airport.region.regionName}`}</div>
      </div>
      <div className={Styles.item}>
        <img data-testid='test-button' src={arrow} className={Styles.arrow} alt="arrow" onClick={()=> callback(airport.airportCode)} />
        <div className={Styles.empty} ></div>
      </div>
    </div>
  )
}
