import Head from 'next/head';
import Headers from '../components/Layout/Header';
import Main from '../components/Layout/Main';
import Footer from '../components/Layout/Footer';
import AddItem from '../components/Item/AddItem';
import Loading from '../components/Layout/loading';
import jwt from 'jsonwebtoken';
import { useCart } from '../lib/CartContext';

import { useState, useEffect } from 'react';

export default function Home() {
	const [category, setCategory] = useState({});
	const [items, setItems] = useState([]);

	const { cart, setCart, userLoggedIn, setUserLoggedIn , user, setUser } = useCart();
	const [showCart, setShowCart] = useState(false);
	
	const [showAddItem, setShowAddItem] = useState({state: false, item: null});

	useEffect(() => {
		fetch('/api/items/category')
			.then((res) => res.json())
			.then((data) => setCategory(data));

		fetch('/api/items')
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	useEffect(() => {
		if (Object.entries(cart).length > 0) {
			setShowCart(true);
		} else {
			setShowCart(false);
		}
	}, [cart]);

	useEffect(() => {
		if (localStorage.getItem('token') && !userLoggedIn) {
			setUserLoggedIn(true);
		}

		if (userLoggedIn && Object.entries(user).length === 0) {
			const token = localStorage.getItem('token');
			const decoded = jwt.decode(token);
			const email = decoded.email;
			fetch('/api/getuser', {
				method: 'POST',
				body: JSON.stringify({email}),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res) => res.json()).then((data) => setUser({fullName: data.checkuser.fullName, email: data.checkuser.email, phoneNumber: data.checkuser.phoneNumber}));
		}
	}, [userLoggedIn]);

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
				{showCart && <Footer cart={cart} />}
			</>
		);
	} else {
		return <Loading />;
	}
}
