import { BOOK_SUCCESS_UPCOMING, BOOK_INIT_UPCOMING } from "./constants";

const initState = [];

const bookingUpcomingReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_SUCCESS_UPCOMING:
      const arr = [...state];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload.id) {
          arr[i].occupied = [...arr[i].occupied, ...action.payload.seatList];
          break;
        }
      }
      return arr;
    case BOOK_INIT_UPCOMING:
      return action.payload;
    default:
      return state;
  }
};

export default bookingUpcomingReducer;
