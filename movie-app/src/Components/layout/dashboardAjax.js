import { push } from 'react-router-redux';
import axios from '../../../../../ajax';

export function getTitle() {
  store.dispatch((dispatch) => {
    axios().get(`/dashboard`).then((response) => {
      dispatch({
        type: 'GET_MOVIES_SUCCESSFULLY',
        payload: response.data,
      })
    }).catch((error) => {
      dispatch({ type: 'GET_MOVIES_ERROR', payload: error }); 
    });  
  }); 
}