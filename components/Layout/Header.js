import Image from 'next/image';
import classes from './Header.module.css';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Headers({ category }) {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState(false);
	const [home, setHome] = useState(false)

	useEffect(() => {
		if (router.pathname === '/') {
			setHome(true)
		} else {
			setHome(false)
		}
	}, [router.pathname])

	function handleOnOpen() {
		setShowMenu(!showMenu);
	}

	const hmstyles = {
		// bmBurgerButton: {
		//   position: 'fixed',
		//   width: '36px',
		//   height: '30px',
		//   left: '36px',
		//   top: '36px'
		// },
		// bmBurgerBars: {
		//   background: '#373a47'
		// },
		// bmBurgerBarsHover: {
		//   background: '#a90000'
		// },
		bmCrossButton: {
		  height: '32px',
		  width: '32px'
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
		  display: 'flex'
		},
		bmOverlay: {
		  background: 'rgba(0, 0, 0, 0.3)'
		}
	  }

	return (
		<header className={`${classes.flex} ${classes.flex__col}`}>
			<div className={home ? `${classes.hero}` : `${classes.hero_nothome}`}>
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
						<Menu customCrossIcon={<Image src={'/images/svg/x.svg'} alt='' width={32} height={32} />} styles={hmstyles} isOpen={showMenu}
						onStateChange={() => handleOnOpen()}
						>
							<div className={classes.hm_logo}>
								<Image src={'/images/svg/logo.svg'} alt='' width={109} height={36} />
							</div>

							<div className={classes.hm_home}>
								<Image src={'/images/svg/home.svg'} alt='' width={32} height={32} />
								<Link href='/'>
									<h4 onClick={() => handleOnOpen()} className={classes.hm_item}>
										Home
									</h4>
								</Link>
							</div>

							<div className={classes.hm_li}>
								<Image src={'/images/svg/branches.svg'} alt='' width={32} height={32} />
								<Link href='/locations'>
									<h4 onClick={() => handleOnOpen()} className={classes.hm_item}>
										Branches
									</h4>
								</Link>
							</div>

							<div className={classes.hm_li}>
								<Image src={'/images/svg/phone.svg'} alt='' width={32} height={32} />
								<Link href='/locations'>
									<h4 onClick={() => handleOnOpen()} className={classes.hm_item}>
										Contact us
									</h4>
								</Link>
							</div>

								<Link href='/signup'>
									<div className={classes.hm_signup} onClick={() => handleOnOpen()} >
											<p className={classes.hm_signuptext} >sign up</p>
									</div>
								</Link>

							<div className={classes.hm_social}>
								<div className={classes.social_items}>
									<Image src={'/images/svg/instagram.svg'} alt='' width={32} height={32} />
								</div>
								<div className={classes.social_items}>
									<Image src={'/images/svg/twitter.svg'} alt='' width={32} height={32} />
								</div>
								<div className={classes.social_items}>
									<Image src={'/images/svg/whatsapp.svg'} alt='' width={32} height={32} />
								</div>
								<div className={classes.social_items}>
									<Image src={'/images/svg/facebook.svg'} alt='' width={32} height={32} />
								</div>
							</div>

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
			{home && (
			<nav className={classes.scrollbar}>
				<ul className={classes.flex}>
					{category.items.map((item) => (
						<li key={item._id} className={classes.scorllbar__item}>
							<span className={classes.scorllbar__text}>{item._id}</span>
						</li>
					))}
				</ul>
			</nav>
			)}
		</header>
	);
}
