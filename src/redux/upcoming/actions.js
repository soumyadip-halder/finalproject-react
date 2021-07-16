import {
  FETCH_UPCOMING,
  FETCH_UPCOMING_SUCCESS,
  FETCH_UPCOMING_ERROR,
} from "./constant";

/*
This component houses the actions needed to get the upcoming movie data from the api
*/

export const fetchUpcoming = () => {
  return {
    type: FETCH_UPCOMING,
  };
};

export const fetchUpcomingSuccess = (course) => {
  return {
    type: FETCH_UPCOMING_SUCCESS,
    payload: course,
  };
};

export const fetchUpcomingError = (error) => {
  return {
    type: FETCH_UPCOMING_ERROR,
    payload: error,
  };
};
