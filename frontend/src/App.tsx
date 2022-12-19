import { useEffect, useReducer } from 'react';
import { tripsReducer } from './providers/tripsReducer';
import { Trips } from './types';
import Card from './components/Card/Card';
import styles from './App.module.css';

const App = () => {
    const [trips, dispatchTrips] = useReducer(tripsReducer, { data: [] as Trips, isLoading: false, isError: false });

    useEffect(() => {
        const handleFetchTrips = async () => {
            dispatchTrips({ type: 'FETCH_TRIPS_INIT' });

            try {
                const response = await fetch('http://localhost:4000/trips');
                const result = await response.json();

                dispatchTrips({ type: 'FETCH_TRIPS_SUCCESS', payload: result.data });
            } catch (error) {
                dispatchTrips({ type: 'FETCH_TRIPS_FAILURE' });
            }
        };
        handleFetchTrips();
    }, []);

    return (
        <div className={styles.container}>
            {trips.isError && <div>Something went wrong ...</div>}
            {trips.isLoading ? <div>Loading ...</div> : <Card list={trips.data} />}
        </div>
    );
};

export default App;
