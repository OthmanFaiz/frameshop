import classes from './Main.module.css';
import Image from 'next/image';

export default function NavBar() {
	return (
		<section className={classes.header}>
			<div className={classes.header_logo}>
				<Image src={'/images/svg/logo1.svg'} alt='' width={165} height={54} />
			</div>
			<div className={classes.header_searchBar}>
				<input placeholder='SEARCH FOR SOMETHING HERE... '></input>
			</div>

			<div className={classes.header_user}>
				<div className={classes.header_user_details}>
					<Image src={'/images/svg/bell.svg'} alt='' width={24} height={24} />
					<Image
						src={'/images/svg/unsplash.svg'}
						alt=''
						width={24}
						height={24}
					/>
					<h2 className={classes.header_user_details_name}>Othman Alomair</h2>
					<Image
						src={'/images/svg/arrow-bottom.svg'}
						alt=''
						width={24}
						height={24}
					/>
				</div>
			</div>
		</section>
	);
}
