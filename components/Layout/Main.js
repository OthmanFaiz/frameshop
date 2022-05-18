import classes from './Main.module.css';
import Image from 'next/image';

export default function Main({ category, items }) {
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
										<div className={classes.card_info}>
											<h2 className={classes.card_title}>{item.name}</h2>
											<p className={classes.card_description}>
												{item.description}
											</p>
											<div className={classes.card_price}>{item.price} KWD</div>
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
