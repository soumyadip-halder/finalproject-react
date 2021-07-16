import { BOOK_SUCCESS_EVENT, BOOK_INIT_EVENT } from "./constants";

const initState = [];

const bookingEventReducer = (state = initState, action) => {
  switch (action.type) {
    case BOOK_SUCCESS_EVENT:
      const arr = [...state];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === action.payload.id) {
          arr[i].occupied = [...arr[i].occupied, ...action.payload.seatList];
          break;
        }
      }
      return arr;
    case BOOK_INIT_EVENT:
      return action.payload;
    default:
      return state;
  }
};

export default bookingEventReducer;
