import { BOOK_SUCCESS_LATEST, BOOK_INIT_LATEST } from "./constants";

const initState = [];

const bookingLatestReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_SUCCESS_LATEST:
      const arr = [...state];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload.id) {
          arr[i].occupied = [...arr[i].occupied, ...action.payload.seatList];
          break;
        }
      }
      return arr;
    case BOOK_INIT_LATEST:
      return action.payload;
    default:
      return state;
  }
};

export default bookingLatestReducer;
