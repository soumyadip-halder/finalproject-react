import {
  FETCH_EVENTS,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
} from "./constant";

const initState = {
  loading: false,
  data: [],
  error: "",
};

const eventReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_EVENTS_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default eventReducer;
