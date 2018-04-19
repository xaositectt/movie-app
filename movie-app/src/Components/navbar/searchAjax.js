import { push } from 'react-router-redux';
import axios from 'axios';

export function getMovies(title) {
  store.dispatch((dispatch) => {
    axios().get(`/searchMovies/${title}`).then((response) => {
      dispatch({
        type: 'GET_MOVIES_SUCCESSFULLY',
        payload: response.data,
      })
    }).catch((error) => {
      dispatch({ type: 'GET_MOVIES_ERROR', payload: error }); 
    });  
  }); 
}