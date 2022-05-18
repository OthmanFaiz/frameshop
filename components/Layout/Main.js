import classes from './Main.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function Main({ category, items }) {
	// counter function for item count, need  a tweek
	const [counter, setCounter] = useState(0);

	// Addition button is clicked
	const handleClickAddtion = () => {
		setCounter(counter + 1);
	};

	// decrement button
	const handleClickSubtraction = () => {
		setCounter(counter - 1);
	};
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
											<button className={classes.card_price}>
												{item.price} KWD
											</button>
										</div>
										<div className={`${classes.card_count} ${classes.flex} `}>
											<Image
												onClick={handleClickSubtraction}
												src='/images/svg/minus.svg'
												alt=''
												width={12}
												height={12}
											/>
											<div className={classes.card_count_draw}>
												<p className={classes.card_counting}>{counter}</p>
											</div>
											<Image
												onClick={handleClickAddtion}
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
