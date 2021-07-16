import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import eventReducer from "./events/reducer";
import latestReducer from "./latest/reducer";
import upcomingReducer from "./upcoming/reducer";
import toggleReducer from "./toggle/reducer";
import detailsReducer from "./movieDetails/reducer";
import searchReducer from "./search/reducer";
import bookingEventReducer from "./seatsEvents/reducer";
import bookingLatestReducer from "./seatsLatest/reducer";
import bookingUpcomingReducer from "./seatsUpcoming/reducer";
import bookingDetailsReducer from "./bookingDetails/reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/rootSaga";

const reducer = combineReducers({
  eventReducer: eventReducer,
  latestReducer: latestReducer,
  upcomingReducer: upcomingReducer,
  detailsReducer: detailsReducer,
  toggleReducer: toggleReducer,
  searchReducer: searchReducer,
  bookingEventReducer: bookingEventReducer,
  bookingLatestReducer: bookingLatestReducer,
  bookingUpcomingReducer: bookingUpcomingReducer,
  bookingDetailsReducer: bookingDetailsReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
