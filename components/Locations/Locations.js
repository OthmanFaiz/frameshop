import { useState, useEffect } from 'react';
import classes from './Locations.module.css';
import Image from 'next/image';

export default function Locations() {
	const [location, setLocation] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/api/locations')
			.then((res) => res.json())
			.then((data) => setLocation(data));
	}, []);

	if (Object.entries(location).length > 0) {
		return (
			<>
				<div className={classes.ShoppingCart}>
					<h1 className={classes.info}>Locations</h1>

					{location.locations.length > 1 &&
						location.locations.map((item) => (
							<section className={classes.card} key={item._id}>
								<div className={classes.card_info}>
									<h2 className={classes.card_title}>{item.name}</h2>
									<p className={classes.card_description}>{item.address}</p>
									<div className={classes.buttons}>
										<button className={classes.button}>
											CALL US
											<Image
												src='/images/svg/phone.svg'
												alt=''
												width={14}
												height={14}
												className={classes.img}
											/>
										</button>
										<button className={classes.button}>
											Location
											<Image
												src='/images/svg/navigation.svg'
												alt=''
												width={14}
												height={14}
												className={classes.img}
											/>
										</button>
									</div>
								</div>
							</section>
						))}
				</div>
			</>
		);
	}
	return (
		<>
			<h1>Loading...</h1>
		</>
	);
}
