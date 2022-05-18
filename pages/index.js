import Head from 'next/head';
import Headers from '../components/Layout/Header';
import Main from '../components/Layout/Main';
import Footer from '../components/Layout/Footer';

import { useState, useEffect } from 'react';

export default function Home() {
	const [category, setCategory] = useState({});
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/items/category')
			.then((res) => res.json())
			.then((data) => setCategory(data));

		fetch('http://localhost:3000/api/items')
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	if (Object.entries(category).length > 0 && Object.entries(items).length > 0) {
		return (
			<>
				<Head>
					<title>Frameshop testing time</title>
				</Head>

				{/* Components */}
				<Headers category={category} />
				<Main category={category} items={items} />
				<Footer />
			</>
		);
	} else {
		return <h1>loading...</h1>;
	}
}
