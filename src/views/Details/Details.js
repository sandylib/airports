import React, {useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {AirPortDetials} from '../../components/';
import { getAirportByCode } from '../../reduce/airports/airports.actions'


export const Details = () => {
  const dispatch = useDispatch();
  const { code } = useParams();
  const history = useHistory();

  const { airport } = useSelector(state => state.airports);
  useEffect(() => {
    dispatch(getAirportByCode(code));
  },[code, dispatch]);



  const onHandleGoback = () => {
    history.push('/');
  }

  
  return (
    <div>
      {airport !== null && <AirPortDetials airport={airport} callback={onHandleGoback}/>}
    </div>
  )
    
    

}
