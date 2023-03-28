import { delay, put, call } from "redux-saga/effects";
import { setLoadingError, setLoadingSuccess, setRepos } from "./appSlice";
import { getReposFromAPI } from "./Main/Portfolio/getReposFromAPI";

function* fetchReposHandler() {
  try {
    yield delay(1400);
    const repos = yield call(getReposFromAPI);
    yield put(setRepos(repos));
    yield put(setLoadingSuccess());
  } catch (error) {
    yield put(setLoadingError());
  }
}

export function* appSaga() {
  yield call(fetchReposHandler);
}
