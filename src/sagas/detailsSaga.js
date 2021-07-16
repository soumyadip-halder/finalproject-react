import {
  fetchId,
  fetchIdSuccess,
  fetchIdError,
} from "../redux/movieDetails/actions";
import { call, put, takeEvery } from "redux-saga/effects";
import fetchDetail from "../api/fetchDetail";

/*
This component houses the sagas needed for asynchronous fetch of data from api for getting movie details
*/

function* workDetailSaga(action) {
  try {
    const data1 = yield call(fetchDetail, action.payload);
    yield put(fetchIdSuccess(data1));
  } catch (error) {
    yield put(fetchIdError(error.message));
  }
}

export function* watchDetailSaga() {
  yield takeEvery(fetchId().type, workDetailSaga);
}
