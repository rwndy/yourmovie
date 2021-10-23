import { GET_MOVIES, REQUEST_MOVIES, ERROR_REQUEST } from "../../actionTypes";
import axios from 'axios'
 

export const fetchData = data => {
  return {
    type: GET_MOVIES,
    payload: data
  }
}

export const getMovies = (search, page) => {
  return async dispatch => {
    try {

      dispatch({type: REQUEST_MOVIES})
      const response = await axios({
        method: 'GET',
        url: `https://www.omdbapi.com/?apikey=faf7e5bb&s=${search}&page=${page}`
      })

      const result = await response.data
      dispatch(fetchData(result))
    } catch (error) {
      dispatch({type: ERROR_REQUEST})
    }
  }
}