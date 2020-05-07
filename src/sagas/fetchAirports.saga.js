import {takeLatest, put} from 'redux-saga/effects';
import ls from 'local-storage';

import {
  FETCH_AIREPORTS_DATA, 
  FETCH_AIREPORTS_SUCCEED, 
  FETCH_AIREPORTS_FAILD, 
  IN_PROGRESS,
  URL} from '../constants/actionConstants';



function* doFetchAirports(){
   try {
     let airports;
    if(ls.get('airports')){
       airports = ls.get('airports');
    }else {
      yield put({type: IN_PROGRESS,  payload: true})
      const res = yield fetch(URL);
      airports = yield res.json();
      ls.set('airports', airports);
    }

    yield put({type: FETCH_AIREPORTS_SUCCEED, airports: airports.slice(1,100)})
    yield put({type: IN_PROGRESS,  payload: false})
     
   } catch (error) {
    if(ls.get('airports')){
      const airports = ls.get('airports');
      yield put({type: FETCH_AIREPORTS_SUCCEED, airports: airports.slice(1,100)})
    }else {
      yield put({type: FETCH_AIREPORTS_FAILD, error: true});
    }
    yield put({type: IN_PROGRESS,  payload: false});
    

   }

}

export function* fetchAirports(){
  yield takeLatest(FETCH_AIREPORTS_DATA, doFetchAirports)
}