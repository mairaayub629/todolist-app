import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootreducer from './store/reducers'

import logger from 'redux-logger'



export const initStore = (initialState = {}) => {
   return createStore(
    rootreducer,
       initialState,
       composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
   )
};

// export const store = createStore(
//     reducer,
//     compose(applyMiddleware(thunk), DevTools.instrument())
//   );