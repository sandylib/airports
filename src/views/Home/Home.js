import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AirPortCardList  from "../../components/AirPortCardList/AirPortCardList";
import { fetctAirportsData } from '../../reduce/airports/airports.actions';

export const Home = () => {
 

  const dispatch = useDispatch();
  const { airports } = useSelector(state => state.airports);

  useEffect(() => {
    dispatch(fetctAirportsData());
  },[dispatch]);

 

  return (
    <AirPortCardList airports={airports} />
  )
}
