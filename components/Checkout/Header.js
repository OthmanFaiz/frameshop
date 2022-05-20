import classes from './Header.module.css';
import Image from 'next/image';

export default function Header() {
	return (
		<>
			<div className={`${classes.header} ${classes.flex}`}>
				<div className={classes.arrow}>
					<Image src='/images/arrow.png' alt='' width={24} height={24} />
				</div>
				<div className={classes.hero__logo}>
					<Image src='/images/svg/logo.svg' alt='' width={109} height={36} />
				</div>
			</div>
			<br></br>
		</>
	);
}