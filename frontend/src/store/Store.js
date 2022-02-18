import { createStore, applyMiddleware, compose } from 'redux'
import Reducer from './reducers/Reducer'
import reduxThunk from 'redux-thunk'
const initState = {}
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  Reducer,
  initState,
  enhancer(applyMiddleware(reduxThunk)),
)
export default store