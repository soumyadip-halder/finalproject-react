import { FETCH_ID, FETCH_ID_SUCCESS, FETCH_ID_ERROR } from "./constant";

/*
This component houses the actions needed get the associated movie details from the movie id
*/

export const fetchId = (id) => {
  return {
    type: FETCH_ID,
    payload: id,
  };
};

export const fetchIdSuccess = (course) => {
  return {
    type: FETCH_ID_SUCCESS,
    payload: course,
  };
};

export const fetchIdError = (error) => {
  return {
    type: FETCH_ID_ERROR,
    payload: error,
  };
};
