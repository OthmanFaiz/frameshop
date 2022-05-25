import Header from '../components/Checkout/Header';
import Payment from '../components/Checkout/Payment';
import ShoppingCart from '../components/Checkout/ShoppingCart';

export default function Checkout() {
	async function addressHandler(AddressData) {
		const response = await fetch('Adresses', {
			method: 'POST',
			body: JSON.stringify(AddressData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await response.json();
		console.log(data);
	}

	return (
		<>
			<Header />
			<ShoppingCart />
			<Payment AddAddressData={addressHandler} />
		</>
	);
}
