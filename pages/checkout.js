import Header from '../components/Checkout/Header';
import Payment from '../components/Checkout/Payment';
import ShoppingCart from '../components/Checkout/ShoppingCart';

export default function Checkout() {
	return (
		<>
			<Header />
			<ShoppingCart />
			<Payment />
		</>
	);
}
