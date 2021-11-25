export const coordsAction = (coords)=> (dispatch) =>{
    dispatch({
        type: 'SET_COORDINATES',
        payload: coords,
    })
}

export const boundAction = (bounds)=> (dispatch) =>{
    dispatch({
        type: 'SET_BOUNDS',
        payload: bounds,
    })

}

export const placesAction = (places)=> (dispatch) =>{
    dispatch({
        type: 'SET_PLACES',
        payload: places,
    })
}

export const placeNameAction = (name)=> (dispatch) =>{
    dispatch({
        type: 'SET_PLACENAME',
        payload: name,
    })
}