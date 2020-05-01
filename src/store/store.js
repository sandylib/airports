import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reduce/';
import rootSaga from '../sagas/';


const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

export default function createStore () {
  const store = reduxCreateStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWares))
  );


  sagaMiddleware.run(rootSaga);

  return store;

}