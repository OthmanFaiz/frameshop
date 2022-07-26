import classes from './Main.module.css';

import NavBar from './NavBar';
import SideBar from './SideBar';
import MainBody from './MainBody';

export default function Main() {
	return (
		<>
			<div className={classes.layout}>
				<NavBar />
				<div className={classes.split}>
					<SideBar />
					<MainBody />
				</div>
			</div>
		</>
	);
}
