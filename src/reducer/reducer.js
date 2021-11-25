export const coordsReducer = (state={},action) =>{
    switch (action.type) {
        case 'SET_COORDINATES':
          return action.payload;
        default:
          return state;
    }
}

export const boundsReducer = (state={},action) =>{
    switch (action.type) {
        case 'SET_BOUNDS':
          return action.payload;
        default:
          return state;
    }
}
export const placesReducer = (state=[],action) =>{
    switch (action.type) {
        case 'SET_PLACES':
          return action.payload;
        default:
          return state;
    }
}

export const placeNameReducer = (state='',action) =>{
  switch (action.type) {
      case 'SET_PLACENAME':
        localStorage.setItem('placeName', JSON.stringify(action.payload));
        return action.payload;
      default:
        return state;
  }
}