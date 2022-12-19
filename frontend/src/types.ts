export type Trip = {
    id: string;
    name: string;
    price: number;
    currency: string;
};

export type Trips = Array<Trip>;

export type TripsState = {
    data: Trips;
    isLoading: boolean;
    isError: boolean;
};

export type TripsAction = TripsFetchInitAction | TripsFetchSuccessAction | TripsFetchFailureAction;

interface TripsFetchInitAction {
    type: 'FETCH_TRIPS_INIT';
}

interface TripsFetchSuccessAction {
    type: 'FETCH_TRIPS_SUCCESS';
    payload: Trips;
}

interface TripsFetchFailureAction {
    type: 'FETCH_TRIPS_FAILURE';
}

export type ListProps = {
    list: Trips;
};
