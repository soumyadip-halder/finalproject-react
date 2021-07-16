import { FETCH_BUTTON_CLICK, TOGGLE_INIT } from "./constants";

const initState = [];

const toggleReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BUTTON_CLICK:
      const arr = [...state];
      if (state[action.payload.index]) {
        arr[action.payload.index] = false;
      } else {
        for (let i = 0; i < action.payload.itemLen; i++) {
          arr[i] = false;
        }
        arr[action.payload.index] = true;
      }
      return arr;
    case TOGGLE_INIT:
      return action.payload;
    default:
      return state;
  }
};

export default toggleReducer;
