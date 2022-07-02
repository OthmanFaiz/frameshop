import classes from './ShoppingCart.module.css';
import Image from 'next/image';

import { useCart } from '../../lib/CartContext';

export default function ShoppingCart() {
	const { cart, setCart } = useCart();

	const removeFromCart = (id) => {
		if (cart[id].quantity > 1) {
			setCart({
				...cart,
				[id]: {
					...cart[id],
					quantity: cart[id].quantity - 1,
				},
			});
		} else {
			delete cart[id];
			setCart({ ...cart });
		}
	};

	const addToCart = (id) => {
		setCart({
			...cart,
			[id]: {
				...cart[id],
				quantity: cart[id].quantity + 1,
			},
		});
	};

	return (
		<>
			<div className={classes.ShoppingCart}>
				<h1 className={classes.ShoppingCart_title}>Shopping cart</h1>

				{Object.keys(cart).length > 0 &&
					Object.keys(cart).map((item) => (
						<section className={classes.card} key={cart[item]._id}>
							<div className={classes.card_info}>
								<h2 className={classes.card_title}>{cart[item].name}</h2>
								<p className={classes.card_description}>
									{cart[item].description}
								</p>
								<button className={classes.card_price}>
									{cart[item].price} KWD
								</button>
							</div>
							<div className={`${classes.card_count} ${classes.flex} `}>
								<Image
									onClick={() => removeFromCart(cart[item]._id)}
									src='/images/svg/minus.svg'
									alt=''
									width={12}
									height={12}
								/>
								<div className={classes.card_count_draw}>
									<p className={classes.card_counting}>{cart[item].quantity}</p>
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
					))}
			</div>
		</>
	);
}
