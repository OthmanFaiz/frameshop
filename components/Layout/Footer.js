import classes from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className={classes.flex}>
			<div className={classes.footer_counting}>
				<p>10</p>
			</div>
			<div className={classes.footer__price}>25.000 KWD</div>
			<div className={classes.footer__cart}>
				<Image src='/images/svg/shopping-cart.svg' width={24} height={24} />
			</div>
		</footer>
	);
}
