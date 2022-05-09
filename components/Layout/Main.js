import Headers from './Header';
import Navigation from './Navigation';
import classes from './Main.module.css';

export default function Main() {
	return (
		<div className={classes.body}>
			<Headers />
			<Navigation />
		</div>
	);
}
