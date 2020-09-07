import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

// Get logs from server
export const getLogs = () =>  async dispatch => {
    try {
      setLoading();

      const result = await fetch('/logs');
      const data = await result.json();

      dispatch({
        type: GET_LOGS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.data
      })
    }
    
  }


// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

// Add new log
export const addLog = (log) =>  async dispatch => {
  try {
    setLoading();

    const response = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })
  }
  
}

export default addLog;