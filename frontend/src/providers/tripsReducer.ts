import { TripsAction, TripsState } from '../types';

export const tripsReducer = (state: TripsState, action: TripsAction) => {
    switch (action.type) {
        case 'FETCH_TRIPS_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case 'FETCH_TRIPS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            };
        case 'FETCH_TRIPS_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        default:
            throw new Error('Unhandled action type');
    }
};
