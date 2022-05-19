import classes from './ShoppingCart.module.css';
import Image from 'next/image';
export default function ShoppingCart() {
	return (
		<>
			<div className={classes.ShoppingCart}>
				<section className={classes.card}>
					<div className={classes.card_info}>
						<h2 className={classes.card_title}>text</h2>
						<p className={classes.card_description}>texttexttexttext</p>
						<button className={classes.card_price}>text KWD</button>
					</div>
					<div className={`${classes.card_count} ${classes.flex} `}>
						<Image
							onClick={() => removeFromCart(item)}
							src='/images/svg/minus.svg'
							alt=''
							width={12}
							height={12}
						/>
						<div className={classes.card_count_draw}>
							<p className={classes.card_counting}>text</p>
						</div>
						<Image
							onClick={() => addToCart(item)}
							src='/images/svg/plus.svg'
							alt=''
							width={12}
							height={12}
						/>
					</div>
					<Image
						src='/images/test.jpg'
						alt=''
						width={75}
						height={75}
						className={classes.card_img}
					/>
				</section>
			</div>
		</>
	);
}
