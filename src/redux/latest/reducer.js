import {
  FETCH_LATEST,
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_ERROR,
} from "./constant";

const initState = {
  loading: false,
  data: [],
  error: "",
};

const latestReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_LATEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LATEST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_LATEST_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default latestReducer;
