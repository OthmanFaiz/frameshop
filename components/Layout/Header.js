import Image from 'next/image';
import classes from './Header.module.css';
import { useState, useEffect } from 'react';

export default function Headers() {
	const [category, setCategory] = useState({});
	useEffect(() => {
		fetch('http://localhost:3000/api/items/category')
		.then(res => res.json())
		.then(data => setCategory(data))
	},[]);
	if (Object.entries(category).length === 0) {
		return <h1>loading</h1>;
	}
	else {
		return (
			<header className={classes.header}>
				<div className={classes.nav}>
					<Image src="/images/svg/burger.svg" alt="" width={24} height={24} />
					<Image src="/images/svg/logo.svg" alt="" width={109} height={36} />
					<Image src="/images/svg/search.svg" alt="" width={24} height={24} />
				</div>
				<div className={classes.hero}>
					<Image src="/images/hero.png" alt="" width={428} height={112} />
				</div>
				<div className={classes.category}>
					{category.items.map(item => <div key={item._id} className={classes.category_item}>{item._id}</div>)}
				</div>
			</header>
		);
	}
}
