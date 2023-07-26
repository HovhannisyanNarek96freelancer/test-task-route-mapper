import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    routes: [
        {
            id: 1,
            points: [
                [59.84660399, 30.29496392],
                [59.82934196, 30.42423701],
                [59.83567701, 30.38064206],
            ],
            coordinates: [],
        },
        {
            id: 2,
            points: [
                [59.82934196, 30.42423701],
                [59.82761295, 30.41705607],
                [59.84660399, 30.29496392],
            ],
            coordinates: [],
        },
        {
            id: 3,
            points: [
                [59.83567701, 30.38064206],
                [59.84660399, 30.29496392],
                [59.82761295, 30.41705607],
            ],
            coordinates: [],
        }
    ],
    selectedRoute: null,
    error: null,
};

const routeSlice = createSlice({
    name: 'route',
    initialState,
    reducers: {
        fetchRoute() {},
        fetchRouteSuccess(state, action) {
            const { points, coordinates } = action.payload;
            state.selectedRoute = { points, coordinates };
            state.error = null;
        },
        fetchRouteFailure(state, action) {
            state.error = action.payload;
        },
    },
});

export const { fetchRoute, fetchRouteSuccess, fetchRouteFailure } = routeSlice.actions;
export default routeSlice.reducer;
