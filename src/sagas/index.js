import { all, fork} from 'redux-saga/effects';

import {fetchAirports} from './fetchAirports.saga';


export default function* rootSaga() {
  yield all([
    fork(fetchAirports),
  ])

}