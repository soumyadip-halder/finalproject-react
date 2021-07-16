import { SAVE_STR } from "./constant";

const initState = {
  str: "",
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_STR:
      return {
        str: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
