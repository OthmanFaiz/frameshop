import Image from 'next/image';
import classes from './Header.module.css';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { useState } from 'react';

export default function Headers({ category }) {
	function showSettings(event) {
		event.preventDefault();
	}

	const [showMenu, setShowMenu] = useState(false);

	function handleOnOpen() {
		setShowMenu(!showMenu);
	}

	const hmstyles = {
		bmBurgerButton: {
		  position: 'fixed',
		  width: '36px',
		  height: '30px',
		  left: '36px',
		  top: '36px'
		},
		bmBurgerBars: {
		  background: '#373a47'
		},
		bmBurgerBarsHover: {
		  background: '#a90000'
		},
		bmCrossButton: {
		  height: '24px',
		  width: '24px'
		},
		bmCross: {
		  background: '#bdc3c7'
		},
		bmMenuWrap: {
		  position: 'fixed',
		  top: '0',
		  left: '0',
		  width: '100%',
		  height: '100%'
		},
		bmMenu: {
		  background: '#303333',
		  padding: '2.5em 1.5em 0',
		  fontSize: '1.15em'
		},
		bmMorphShape: {
		  fill: '#373a47'
		},
		bmItemList: {
		  color: '#FFFFFF',
		  padding: '0.8em'
		},
		bmItem: {
		  display: 'block'

		},
		bmOverlay: {
		  background: 'rgba(0, 0, 0, 0.3)'
		}
	  }

	return (
		<header className={`${classes.flex} ${classes.flex__col}`}>
			<div className={`${classes.hero}`}>
				<div className={`${classes.nav} ${classes.flex} ${classes.flex__sb}`}>
					<div className={classes.hero__menu}>
						{/* https://www.npmjs.com/package/react-burger-menu   sexy npm package */}
						<Image
							className={classes.hero_size}
							src='/images/svg/burger.svg'
							alt=''
							width={24}
							height={24}
							onClick={handleOnOpen}
						/>
						{showMenu && (
						<Menu styles={hmstyles} isOpen={showMenu}
						onStateChange={() => handleOnOpen()}
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
						)}
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
