import { FETCH_ID, FETCH_ID_SUCCESS, FETCH_ID_ERROR } from "./constant";

const initState = {
  loading: false,
  data: {},
  error: "",
};

const detailsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ID:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ID_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_ID_ERROR:
      return {
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
