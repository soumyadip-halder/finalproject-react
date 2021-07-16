import {
  fetchEvents,
  fetchEventsSuccess,
  fetchEventsError,
} from "../redux/events/actions";
import { call, put, takeEvery } from "redux-saga/effects";
import fetchEventsApi from "../api/fetchEvents";
import { toggleInit } from "../redux/toggle/action";

/*
This component houses the sagas needed for asynchronous fetch of data from api for getting event lists
*/

function* workEventSaga() {
  try {
    const data1 = yield call(fetchEventsApi);
    yield put(fetchEventsSuccess(data1));
    yield put(toggleInit(new Array(data1.length).fill(false)));
  } catch (error) {
    yield put(fetchEventsError(error.message));
  }
}

export function* watchEventSaga() {
  yield takeEvery(fetchEvents().type, workEventSaga);
}
