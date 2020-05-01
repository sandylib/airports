import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AirPortCardList, Loader } from "../../components/";
import { fetctAirportsData } from '../../reduce/airports/airports.actions';

export const Home = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { airports, hasError } = useSelector(state => state.airports);
  const { inprogress } = useSelector(state => state.inprogress)

  useEffect(() => {
    dispatch(fetctAirportsData());
  },[dispatch]);

  const onHandleCallback = (code) => {
    history.push(`/details/${code}`)
  }

  return (
    <div>
     {inprogress && <Loader />}
     {!inprogress && <AirPortCardList airports={airports} callback={onHandleCallback}/>}
     {hasError && <div>{hasError}</div>}
    </div>
  )
}
