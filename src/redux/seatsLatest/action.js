import { BOOK_INIT_LATEST, BOOK_SUCCESS_LATEST } from "./constants";

/*
This component houses the actions needed to get the movie seat timing price details for those latest movies running in the theatre
*/

export const bookLatestSuccess = (seatList, id) => {
  return {
    type: BOOK_SUCCESS_LATEST,
    payload: { seatList, id },
  };
};

export const bookLatestInit = (initStates) => {
  return {
    type: BOOK_INIT_LATEST,
    payload: initStates,
  };
};
