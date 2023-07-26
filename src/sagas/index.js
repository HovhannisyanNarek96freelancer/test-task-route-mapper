import { all } from 'redux-saga/effects';
import { watchFetchRoute } from './routeSaga';

export default function* rootSaga() {
    yield all([watchFetchRoute()]);
}
