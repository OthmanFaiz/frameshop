import classes from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer({ cart }) {
	const [itemCount, setItemCount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		if(Object.entries(cart).length > 0) {
			// used the Object.keys() method to loop through the cart object "becouse it's not an array"
			setItemCount(Object.keys(cart).reduce((acc, cur) =>{
				return acc + cart[cur].quantity
			}, 0))
			setTotalPrice(Object.keys(cart).reduce((acc, cur) =>{
				if (cart[cur].quantity > 1) {
					return acc + (cart[cur].quantity * cart[cur].price)
				}
				return acc + cart[cur].price
				}, 0))
		}
	},[cart])
	return (
		<Link href='/checkout'>
			<footer className={classes.flex}>
				<div className={classes.footer_counting}>
					<p className={classes.footer__count}>{itemCount}</p>
				</div>
				<div className={classes.footer__price}>{totalPrice.toFixed(2)} KWD</div>
				<div className={classes.footer__cart}>
					<Image
						src='/images/svg/shopping-cart-10941.svg'
						width={24}
						height={24}
						className={classes.footer__img}
					/>
				</div>
			</footer>
		</Link>
	);
}

