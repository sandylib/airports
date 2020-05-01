import { createAction} from 'redux-actions';

import { FETCH_AIREPORTS_DATA, GET_AIRPORT_BY_CODE} from '../../constants/actionConstants';


export const fetctAirportsData = createAction(FETCH_AIREPORTS_DATA);
export const getAirportByCode = createAction(GET_AIRPORT_BY_CODE);