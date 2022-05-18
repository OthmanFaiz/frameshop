import Head from 'next/head';
import Headers from '../components/Layout/Header';
import Main from '../components/Layout/Main';
import Footer from '../components/Layout/Footer';

import { useState, useEffect } from 'react';

export default function Home() {
	const [category, setCategory] = useState({});
	const [items, setItems] = useState([]);
	const [cart, setCart] = useState({})

	useEffect(() => {
		fetch('http://localhost:3000/api/items/category')
			.then((res) => res.json())
			.then((data) => setCategory(data));

		fetch('http://localhost:3000/api/items')
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	const addToCart = (item) => {
		if(!cart[item._id]) {
			setCart({...cart, [item._id]: {...item, quantity: 1}})
		} else {
			setCart({...cart, [item._id]: {...item, quantity: cart[item._id].quantity + 1}})
		}
	}

	const removeFromCart = (item) => {
		if(cart[item._id].quantity > 1) {
			setCart({...cart, [item._id]: {...item, quantity: cart[item._id].quantity - 1}})
		} else {
			delete cart[item._id]
		}
	}

	if (Object.entries(category).length > 0 && Object.entries(items).length > 0) {
		return (
			<>
				<Head>
					<title>Frameshop testing time</title>
				</Head>

				{/* Components */}
				<Headers category={category} />
				<Main cart={cart} category={category} items={items} addToCart={addToCart} removeFromCart={removeFromCart} />
				<Footer cart={cart} />
			</>
		);
	} else {
		return <h1>loading...</h1>;
	}
}
