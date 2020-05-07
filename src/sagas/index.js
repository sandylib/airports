import { all, fork} from 'redux-saga/effects';

import {fetchAirports} from './fetchAirports.saga';
import { fetchAirportByCode } from './getAirportByCode.saga';

export default function* rootSaga() {
  yield all([
    fork(fetchAirports),
    fork(fetchAirportByCode)
  ])

}