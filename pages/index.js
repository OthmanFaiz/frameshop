import Head from 'next/head';
import Headers from '../components/Layout/Header';
import Main from '../components/Layout/Main';
import Footer from '../components/Layout/Footer';
import AddItem from '../components/Item/AddItem';

import { useCart } from '../lib/CartContext';

import { useState, useEffect } from 'react';

export default function Home() {
	const [category, setCategory] = useState({});
	const [items, setItems] = useState([]);

	const { cart, setCart } = useCart();
	
	const [showAddItem, setShowAddItem] = useState({state: false, item: null});

	useEffect(() => {
		fetch('http://localhost:3000/api/items/category')
			.then((res) => res.json())
			.then((data) => setCategory(data));

		fetch('http://localhost:3000/api/items')
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	const addToCart = (item) => {
		setCart({...cart, [item._id]: {...item}});
		setShowAddItem({state: false, item: null});
	}
	

	const showAddItemModal = (state, itemId) => {
		setShowAddItem({ state, item: itemId });
	}

	if (Object.entries(category).length > 0 && Object.entries(items).length > 0) {
		return (
			<>
				<Head>
					<title>Frameshop testing time</title>
				</Head>

				{/* Components */}
				<Headers category={category} />
				{showAddItem.state && <AddItem showAddItemModal={showAddItemModal} item={items.items.find(item => item._id === showAddItem.item)} showAddItem={showAddItem} addToCart={addToCart} />}
				<Main
					category={category}
					items={items}
					cart={cart}
					showAddItemModal={showAddItemModal}
				/>
				<Footer cart={cart} />
			</>
		);
	} else {
		return <h1>loading...</h1>;
	}
}
