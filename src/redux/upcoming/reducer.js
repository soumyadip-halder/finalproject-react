import {
  FETCH_UPCOMING,
  FETCH_UPCOMING_SUCCESS,
  FETCH_UPCOMING_ERROR,
} from "./constant";

const initState = {
  loading: false,
  data: [],
  error: "",
};

const upcomingReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UPCOMING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_UPCOMING_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default upcomingReducer;
