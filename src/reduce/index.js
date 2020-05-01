import { combineReducers } from 'redux';

import airports from './airports/airports.reducer';
import inprogress from './inprogress/inprogress.reduce';

export default combineReducers({
  airports,
  inprogress
})