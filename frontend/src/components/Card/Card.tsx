import { ListProps, Trip } from '../../types';
import styles from './Card.module.css';

const Card = ({ list }: ListProps) => {
    return (
        <>
            {list.map((trip: Trip) => (
                <div
                    key={trip.name}
                    className={styles.card}
                >
                    <div className={styles.cardHeader}></div>
                    <div className={styles.cardBody}>
                        <h1>{trip.name}</h1>
                        <p>
                            {trip.currency === 'EUR' ? '€' : '$'}
                            {trip.price} {trip.currency}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Card;
