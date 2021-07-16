import { watchEventSaga } from "./eventSaga";
import { watchLatestSaga } from "./latestSaga";
import { watchUpcomingSaga } from "./upcomingSaga";
import { watchDetailSaga } from "./detailsSaga";
import { all } from "redux-saga/effects";

/*
This component houses the root sagas which assimilates the rest of the sagas for use
*/

function* rootSaga() {
  yield all([
    watchEventSaga(),
    watchLatestSaga(),
    watchUpcomingSaga(),
    watchDetailSaga(),
  ]);
}

export default rootSaga;
