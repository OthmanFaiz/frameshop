import classes from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer(category, items, cart) {
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
