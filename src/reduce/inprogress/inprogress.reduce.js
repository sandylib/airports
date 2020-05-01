

import {
  IN_PROGRESS
 } from '../../constants/actionConstants';



export const initalState = {
  inprogress: true
}

const inprogressReducer = (state=initalState, action) =>{
  switch(action.type){

    case IN_PROGRESS:
      return {
        ...state,
        inprogress:action.payload
      }

    default:
      return state;
  }


}

export default inprogressReducer;