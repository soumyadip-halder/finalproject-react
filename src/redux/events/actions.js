import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
} from "./constant";

/*
This component houses the actions needed to get the event data from api
*/

export const fetchEvents = () => {
  return {
    type: FETCH_EVENTS,
  };
};

export const fetchEventsSuccess = (course) => {
  return {
    type: FETCH_EVENTS_SUCCESS,
    payload: course,
  };
};

export const fetchEventsError = (error) => {
  return {
    type: FETCH_EVENTS_ERROR,
    payload: error,
  };
};
