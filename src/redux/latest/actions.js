import {
  FETCH_LATEST,
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_ERROR,
} from "./constant";

/*
This component houses the actions needed to get the latest movie data from the api
*/

export const fetchLatest = () => {
  return {
    type: FETCH_LATEST,
  };
};

export const fetchLatestSuccess = (course) => {
  return {
    type: FETCH_LATEST_SUCCESS,
    payload: course,
  };
};

export const fetchLatestError = (error) => {
  return {
    type: FETCH_LATEST_ERROR,
    payload: error,
  };
};
