import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {boundsReducer, coordsReducer, placeNameReducer, placesReducer} from '../reducer/reducer'
const reducer = combineReducers({
    coordinates: coordsReducer,
    places : placesReducer,
    bounds: boundsReducer,
    placeName: placeNameReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const coordsFromStorage = localStorage.getItem('coords')
  ? JSON.parse(localStorage.getItem('coords'))
  : {}
const placeNameFromStorage = localStorage.getItem('placeName')
  ? JSON.parse(localStorage.getItem('placeName'))
  : ''
const initialState = {
    userInfo: userInfoFromStorage,
    coordinates: coordsFromStorage,
    placeName: placeNameFromStorage,
}
  
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
  export default store;