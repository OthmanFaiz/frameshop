import classes from './Main.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Main({
	category,
	items,
	cart,
	addToCart,
	removeFromCart,
}) {
	return (
		<>
			{category.items.map((cat) => (
				<div className={classes.story} key={cat._id}>
					<div className={classes.story_title}>
						<h1 className={classes.title}>{cat._id}</h1>
					</div>
					<div className={classes.container}>
						{items.items.map((item) => {
							if (item.category === cat._id) {
								return (
									<section key={item._id} className={classes.card}>
										<Link href='/popout'>
											<div className={classes.card_info}>
												<h2 className={classes.card_title}>{item.name}</h2>
												<p className={classes.card_description}>
													{item.description}
												</p>
												<button className={classes.card_price}>
													{item.price} KWD
												</button>
											</div>
										</Link>
										<div className={`${classes.card_count} ${classes.flex} `}>
											<Image
												onClick={() => removeFromCart(item)}
												src='/images/svg/minus.svg'
												alt=''
												width={12}
												height={12}
											/>
											<div className={classes.card_count_draw}>
												<p className={classes.card_counting}>
													{!cart[item._id] ? 0 : cart[item._id].quantity}
												</p>
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
								);
							}
						})}
					</div>
				</div>
			))}
		</>
	);
}
