import {useState, useEffect} from 'react';
import classes from './Locations.module.css';

export default function Locations() {
    const [location, setLocation] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/api/locations')
            .then(res => res.json())
            .then(data => setLocation(data))
    },[]);

    if (Object.entries(location).length > 0) {
        return (
            <>
                <div className={classes.ShoppingCart}>
                {location.locations.length > 1 && location.locations.map((item) => (
                        <section className={classes.card} key={item._id}>
                            <div className={classes.card_info}>
                                <h2 className={classes.card_title}>{item.name}</h2>
                                <p className={classes.card_description}>{item.address}</p>
                            </div>
                        </section>
                ))}
                </div>
            </>
        )
    }
    return (
        <>
            <h1>Loading...</h1>
        </>
    )
}