import { useState } from 'react';
import classes from './Main.module.css';

import NavBar from './NavBar';
import SideBar from './SideBar';

import DashBoard from './DashBoard';
import Customers from './Customers';
import Stuff from './Stuff';
import Menu from './Menu';
import Orders from './Orders';
import Analysis from './Analysis';
import Settings from './Settings';

export default function Main() {
	const [page, setPage] = useState('DashBoard');

	function changePage(page) {
		setPage(page);
	}

	return (
		<>
			<div className={classes.layout}>
				<NavBar />
				<div className={classes.split}>
					<SideBar changePage={changePage} />
					{
						page === 'DashBoard' ? <DashBoard /> :
						page === 'Customers' ? <Customers /> :
						page === 'Stuff' ? <Stuff /> :
						page === 'Menu' ? <Menu /> :
						page === 'Orders' ? <Orders /> :
						page === 'Analysis' ? <Analysis /> :
						page === 'Settings' ? <Settings /> :
						null
					}

				</div>
			</div>
		</>
	);
}
