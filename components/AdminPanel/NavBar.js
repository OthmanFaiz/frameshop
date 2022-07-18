import classes from './NavBar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
	return (
		<>
			<section className={classes.header}>
				<div className={classes.header_logo}>
					<Image
						src={'/images/svg/logo.svg'}
						alt=''
						width={109}
						height={36}
						className={classes.header_logo_img}
					/>
				</div>
				<div className={classes.header_searchBar}></div>
			</section>
			<section className={classes.nav}>
				<ul className={classes.nav_list}>
					<Link href='/DashBoard'>
						<li className={classes.nav_list_link}>DashBoard</li>
					</Link>
					<Link href='/Customers'>
						<li className={classes.nav_list_link}>Customers</li>
					</Link>
					<Link href='/Stuff'>
						<li className={classes.nav_list_link}>Stuff</li>
					</Link>
					<Link href='/Orders'>
						<li className={classes.nav_list_link}>Orders</li>
					</Link>
					<Link href='/Analysis'>
						<li className={classes.nav_list_link}>Analysis</li>
					</Link>
					<Link href='/Settings'>
						<li className={classes.nav_list_link}>Settings</li>
					</Link>
				</ul>
			</section>
		</>
	);
}
