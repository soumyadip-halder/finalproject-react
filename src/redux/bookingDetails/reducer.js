import { BOOKING } from "./constant";

const initState = {
  details: {},
};

const bookingDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOKING:
      return {
        details: action.payload,
      };
    default:
      return state;
  }
};

export default bookingDetailsReducer;
