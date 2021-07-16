import { BOOK_SUCCESS_UPCOMING, BOOK_INIT_UPCOMING } from "./constants";

/*
This component houses the actions needed to get the movie seat timing price details for those upcoming movies running in the theatre
*/

export const bookUpcomingSuccess = (seatList, id) => {
  return {
    type: BOOK_SUCCESS_UPCOMING,
    payload: { seatList, id },
  };
};

export const bookUpcomingInit = (initStates) => {
  return {
    type: BOOK_INIT_UPCOMING,
    payload: initStates,
  };
};
