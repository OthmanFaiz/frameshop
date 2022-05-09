import { Fragment } from 'react';

import classes from './Header.module.css';

export default function Headers() {
	return (
		<Fragment>
			<header className={`${classes.header} `}>
				<h1>Header</h1>
				<div className={`${classes.flex} ${classes.flex} ${classes.flex__sb}`}>
					<div className={classes.hero__menu}>
						<img src='' alt='' />
					</div>
					<div className={classes.hero__logo}>
						<img src='' alt='' />
					</div>
					<div className={classes.hero__search}>
						<img src='' alt='' />
					</div>
				</div>
			</header>
		</Fragment>
	);
}
