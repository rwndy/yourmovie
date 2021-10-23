/* eslint-disable import/no-anonymous-default-export */
import { GET_MOVIES, REQUEST_MOVIES, ERROR_REQUEST } from "../../actionTypes";

const initialState = {
  totalResults: 0,
  response: null,
  movies: [],
  isLoading: true,
  isError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isLoading: true
      }

    case GET_MOVIES:
      return {
        ...state, 
        totalResults: action.payload.totalResults,
        response: action.payload.Response,
        movies: [...state.movies, ...action.payload.Search],
        isLoading: false,
        isError: false
      }
    case ERROR_REQUEST:
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    default:
      return state
  }
}