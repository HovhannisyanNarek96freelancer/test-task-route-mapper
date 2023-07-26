import { takeLatest, call, put } from 'redux-saga/effects';
import polyline from "polyline";
import { fetchRouteSuccess, fetchRouteFailure } from '../reducers/routeReducer';
import {getFetchRoute} from "../services/api.js";

function* handleFetchRoute(action) {
    try {
        const { points } = action.payload;
        const response = yield call(getFetchRoute, points);
        const decodedPath = polyline.decode(response.data.routes[0].geometry, 6);
        const coordinates = decodedPath.map((coord) => [coord[0], coord[1]]);
        yield put(fetchRouteSuccess({points, coordinates}));
    } catch (error) {
        yield put(fetchRouteFailure(error.message));
    }
}

export function* watchFetchRoute() {
    yield takeLatest('route/fetchRoute', handleFetchRoute);
}
