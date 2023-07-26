import { combineReducers } from 'redux';
import routeReducer from './routeReducer';

const rootReducer = combineReducers({
    route: routeReducer,
});

export default rootReducer;
