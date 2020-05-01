import {takeLatest, put} from 'redux-saga/effects';

import {
  FETCH_AIREPORTS_DATA, 
  FETCH_AIREPORTS_SUCCEED, 
  FETCH_AIREPORTS_FAILD, 
  IN_PROGRESS,
  URL} from '../constants/actionConstants';



function* doFetchAirports(){
   try {
    yield put({type: IN_PROGRESS,  payload: true})
    const res = yield fetch(URL);
    const airports = yield res.json();
    yield put({type: FETCH_AIREPORTS_SUCCEED, airports: airports.slice(1,100)})
    yield put({type: IN_PROGRESS,  payload: false})
     
   } catch (error) {

    yield put({type: FETCH_AIREPORTS_FAILD, error: true});
    yield put({type: IN_PROGRESS,  payload: false});

   }

}

export function* fetchAirports(){
  yield takeLatest(FETCH_AIREPORTS_DATA, doFetchAirports)
}