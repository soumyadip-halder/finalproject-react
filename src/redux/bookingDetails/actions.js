import { BOOKING } from "./constant";
/*
This component houses the actions needed to dispatch the state containing the user booking details
*/

export const getBooking = (details) => {
  return {
    type: BOOKING,
    payload: details,
  };
};
