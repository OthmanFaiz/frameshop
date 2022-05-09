import { Fragment } from 'react';

import classes from './Header.module.css';

export default function Headers() {
	return (
		<Fragment>
			<h1 className={classes.header}>my header</h1>
		</Fragment>
	);
}
