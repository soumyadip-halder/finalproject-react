import {
  fetchUpcoming,
  fetchUpcomingSuccess,
  fetchUpcomingError,
} from "../redux/upcoming/actions";
import { call, put, takeEvery } from "redux-saga/effects";
import fetchUpcomingApi from "../api/fetchUpcoming";
import { toggleInit } from "../redux/toggle/action";

/*
This component houses the sagas needed for asynchronous fetch of data from api for getting upcoming movie lists
*/

function* workUpcomingSaga() {
  try {
    const data1 = yield call(fetchUpcomingApi);
    yield put(fetchUpcomingSuccess(data1));
    yield put(toggleInit(new Array(data1.length).fill(false)));
  } catch (error) {
    yield put(fetchUpcomingError(error.message));
  }
}

export function* watchUpcomingSaga() {
  yield takeEvery(fetchUpcoming().type, workUpcomingSaga);
}
