function setTitles(state = {
  id: null,
  title: '',
  searchTitle: ''
},action) {
  switch (action.type) {
    case 'GET_TITLES_SUCCESSFULLY': {
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
      }
    }
    case 'GET_MOVIES_ERROR': {
      return {
        ...state,
        error: action.payload.error,
      }
    }
    case 'GET_TEXTBOX_VALUE': {
      return {
        ...state,
        error: action.payload.searchTitle
      }
    }
    default: return state;
  } 
}

export default setTitles;