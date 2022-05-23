import classes from './Payment.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { useCart } from '../../lib/CartContext';

export default function Payment() {

	const { cart } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		if(Object.entries(cart).length > 0) {
			setTotalPrice(Object.keys(cart).reduce((acc, cur) =>{
				if (cart[cur].quantity > 1) {
					return acc + (cart[cur].quantity * cart[cur].price)
				}
				return acc + cart[cur].price
				}, 0))
		}
	},[cart])
	return (
		<>
			<div className={classes.title}>
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
					<div className={classes.section}>
						<h1>Total Amount</h1>
						<h1>{(totalPrice + 1).toFixed(2)} KWD</h1>
					</div>
				</div>
			</div>
		</>
	);
}
