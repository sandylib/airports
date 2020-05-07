

import {
  FETCH_AIREPORTS_SUCCEED, 
  FETCH_AIREPORTS_FAILD, 
  GET_AIRPORT_BY_CODE_SUCCEED
 } from '../../constants/actionConstants';



export const initalState = {
  airports: null,
  hasError: false,
  airport: null,
  code: ''
}

const airportsReducer = (state=initalState, action) =>{
  switch(action.type){

    case FETCH_AIREPORTS_SUCCEED:
      return {
        ...state,
        airports:action.airports
      }

    case FETCH_AIREPORTS_FAILD:
      return {
        ...state,
        hasError:action.error
      }
    
    case GET_AIRPORT_BY_CODE_SUCCEED:
        const {airport, code} = action;
        return {
          ...state,
          airport,
          code
        }

    default:

      return state;
    
  }


}

export default airportsReducer;