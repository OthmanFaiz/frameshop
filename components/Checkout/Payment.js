import classes from './Payment.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { useCart } from '../../lib/CartContext';

export default function Payment() {
	const { cart } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		if (Object.entries(cart).length > 0) {
			setTotalPrice(
				Object.keys(cart).reduce((acc, cur) => {
					if (cart[cur].quantity > 1) {
						return acc + cart[cur].quantity * cart[cur].price;
					}
					return acc + cart[cur].price;
				}, 0)
			);
		}
	}, [cart]);
	return (
		<>
			<section className={classes.title}>
				<h1 className={classes.info}>Payment</h1>

				<div className={`${classes.flex} ${classes.flex__col}`}>
					<div className={classes.section}>
						<h3>subtitle</h3>
						<h3>{totalPrice.toFixed(2)} KWD</h3>
					</div>
					<div className={classes.section}>
						<h3>Delivery</h3>
						<h3>1.000 KWD</h3>
					</div>
					<div className={classes.price}>
						<h1>Total Amount</h1>
						<h1>{(totalPrice + 1).toFixed(2)} KWD</h1>
					</div>
				</div>

				<section className={classes.Section_specialRequest}>
					<h1 className={classes.info}>Speical request</h1>
					<textarea className={classes.specialRequest_textarea}>e</textarea>
				</section>

				<section className={classes.Section_form}>
					<h1 className={classes.info}>Your Address</h1>

					<form className={classes.form}>
						<div className={classes.control}>
							<label htmlFor='AddressType'></label>
							<input
								type='text'
								required
								id='AddressType'
								placeholder='Address type'
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='AddressName'></label>
							<input
								type='text'
								required
								id='AddressName'
								placeholder='Address Name'
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='PhoneNumber'></label>
							<input
								type='text'
								required
								id='PhoneNumber'
								placeholder='Phone Number'
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='Town'></label>
							<input type='text' required id='Town' placeholder='Town'></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='Block'></label>
							<input
								type='text'
								required
								id='Block'
								placeholder='Block'
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Street'></label>
							<input
								type='text'
								required
								id='Street'
								placeholder='Street'
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Lane'></label>
							<input
								type='text'
								required
								id='Lane'
								placeholder='Lane(optional)'
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='House'></label>
							<input
								type='text'
								required
								id='House'
								placeholder='House/Building'
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Floor'></label>
							<input
								type='text'
								required
								id='Floor'
								placeholder='Floor'
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Apartment'></label>
							<input
								type='text'
								required
								id='Apartment'
								placeholder='Apartment'
							></input>
						</div>
					</form>
				</section>
			</section>
		</>
	);
}
