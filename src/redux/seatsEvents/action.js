import { BOOK_SUCCESS_EVENT, BOOK_INIT_EVENT } from "./constants";

/*
This component houses the actions needed to get the movie seat timing price details for those events running in the theatre
*/

export const bookEventSuccess = (seatList, id) => {
  return {
    type: BOOK_SUCCESS_EVENT,
    payload: { seatList, id },
  };
};

export const bookEventInit = (initStates) => {
  return {
    type: BOOK_INIT_EVENT,
    payload: initStates,
  };
};
