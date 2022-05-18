import Image from 'next/image';
import classes from './Header.module.css';

export default function Headers({ category }) {
	return (
		<header className={`${classes.flex} ${classes.flex__col}`}>
			<div className={`${classes.nav} ${classes.hero}`}>
				<div className={classes.hero__menu}>
					<Image src='/images/svg/burger.svg' alt='' width={24} height={24} />
				</div>
				<div className={classes.hero__logo}>
					<Image src='/images/svg/logo.svg' alt='' width={109} height={36} />
				</div>
				<div className={classes.hero__search}>
					<Image
						className={classes.hero_size}
						src='/images/svg/search.svg'
						alt=''
						width={24}
						height={24}
					/>
				</div>
			</div>

			<nav className={classes.scrollbar}>
				<ul className={classes.flex}>
					{category.items.map((item) => (
						<li key={item._id} className={classes.scorllbar__item}>
							<span className={classes.scorllbar__text}>{item._id}</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
