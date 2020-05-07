import {takeLatest, put} from 'redux-saga/effects';
import ls from 'local-storage';

import {
  GET_AIRPORT_BY_CODE, 
  GET_AIRPORT_BY_CODE_SUCCEED, 
  GET_AIRPORT_BY_CODE_FAIL, 
  IN_PROGRESS,
  URL} from '../constants/actionConstants';



function* doFetAirportByCode({payload}){
   try {
    let airports;
    yield put({type: IN_PROGRESS,  payload: true});
    if(ls.get('airports')){
        airports = ls.get('airports');
    } else {
      const res = yield fetch(URL);
       airports = yield res.json();

    }
   

    yield put({type: GET_AIRPORT_BY_CODE_SUCCEED, airport: airports.find(e=>e.airportCode === payload), code : payload})
    yield put({type: IN_PROGRESS,  payload: false})
     
   } catch (error) {

    yield put({type: GET_AIRPORT_BY_CODE_FAIL, error: true});
    yield put({type: IN_PROGRESS,  payload: false});

   }

}

export function* fetchAirportByCode(){
  yield takeLatest(GET_AIRPORT_BY_CODE, doFetAirportByCode)
}