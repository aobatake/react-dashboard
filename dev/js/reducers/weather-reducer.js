

let initialState = {
  fetching: false,
  fetched: false,
  data: [],
  error: null,
}

export default function( state = initialState, action) {
  switch(action.type){
    case "REQUEST_WEATHER":
      return {...state, fetching: true};
      break;
    case "ERROR_WEATHER":
      return {...state, fetching: false, error: action.payload}
      break;
    case "RECEIVED_WEATHER":
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload
      }
      break;
  }
  return state;
}