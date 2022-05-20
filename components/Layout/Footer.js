import classes from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ category, items, cart }) {
	console.log(
		cart.reduce((ac, it) => {
			ac + it.quantity;
		}, 0)
	);
	// const Total = cart.reduce(
	// 	(accumulator, item) => accumulator + item.price * item.quantity,
	// 	0
	// );
	return (
		<Link href='/checkout'>
			<footer className={classes.flex}>
				<div className={classes.footer_counting}>
					<p className={classes.footer__count}>10</p>
				</div>
				<div className={classes.footer__price}>25.000 KWD</div>
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
