import Image from 'next/image';
import classes from './Header.module.css';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

export default function Headers({ category }) {
	function showSettings(event) {
		event.preventDefault();
	}
	return (
		<header className={`${classes.flex} ${classes.flex__col}`}>
			<div className={`${classes.nav} ${classes.hero}`}>
				<div className={classes.hero__menu}>
					{/* https://www.npmjs.com/package/react-burger-menu   sexy npm package */}
					<Menu
						width={'100%'}
						customBurgerIcon={<img src='/images/svg/burger.svg' />}
					>
						<Link href='/signIn'>
							<h4 id='home' className='menu-item' href='/'>
								sign in
							</h4>
						</Link>
						<a id='about' className='menu-item' href='/about'>
							branches
						</a>
						<a id='contact' className='menu-item' href='/contact'>
							Contact
						</a>
						<a onClick={showSettings} className='menu-item--small' href=''>
							Settings
						</a>
					</Menu>
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
