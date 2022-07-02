import classes from './Payment.module.css';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { useCart } from '../../lib/CartContext';

export default function Payment(props) {
	const { cart } = useCart();
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		if (Object.entries(cart).length > 0) {
			setTotalPrice(
				Object.keys(cart).reduce((acc, cur) => {
					if (cart[cur].quantity > 1) {
						return acc + cart[cur].quantity * cart[cur].price;
					}
					return acc + cart[cur].price;
				}, 0)
			);
		}
	}, [cart]);
	// form ref
	const AddressTypeRef = useRef();
	const AddressNameRef = useRef();
	const PhoneNumberRef = useRef();
	const TownRef = useRef();
	const BlockRef = useRef();
	const StreetRef = useRef();
	const LaneRef = useRef();
	const HouseRef = useRef();
	const FloorRef = useRef();
	const ApartmentRef = useRef();
	//
	// form handler
	function submitHandler(event) {
		event.preventDefault();
		const entered_AddressType = AddressTypeRef.current.value;
		const entered_AddressName = AddressNameRef.current.value;
		const entered_PhoneNumber = PhoneNumberRef.current.value;
		const entered_Town = TownRef.current.value;
		const entered_Block = BlockRef.current.value;
		const entered_Street = StreetRef.current.value;
		const entered_Lane = LaneRef.current.value;
		const entered_House = HouseRef.current.value;
		const entered_Floor = FloorRef.current.value;
		const entered_Apartment = ApartmentRef.current.value;

		const AddressData = {
			AddressType: entered_AddressType,
			AddressName: entered_AddressName,
			PhoneNumber: entered_PhoneNumber,
			Town: entered_Town,
			Block: entered_Block,
			Street: entered_Street,
			Lane: entered_Lane,
			House: entered_House,
			Floor: entered_Floor,
			Apartment: entered_Apartment,
		};
		props.AddAddressData({ AddressData, cart, registered: false });
	}
	return (
		<>
			<section className={classes.title}>
				<h1 className={classes.info}>Payment</h1>

				<div className={classes.section}>
					<h3 className={classes.section_text}>Subtotal</h3>
					<h3 className={classes.section_price}>{totalPrice.toFixed(2)} KWD</h3>
				</div>
				<div className={classes.section}>
					<h3 className={classes.section_text}>Delivery</h3>
					<h3 className={classes.section_price}>1.000 KWD</h3>
				</div>
				<div className={classes.section}>
					<h1 className={classes.section_text}>Total Amount</h1>
					<h1 className={classes.section_price}>
						{(totalPrice + 1).toFixed(2)} KWD
					</h1>
				</div>

				<section className={classes.Section_specialRequest}>
					<h1 className={classes.info}>Special Request</h1>
					<textarea
						placeholder='Add a note...'
						className={classes.specialRequest_textarea}
					></textarea>
				</section>

				<section className={classes.Section_form}>
					<h1 className={classes.info}>Your Address</h1>
					{/* form section */}
					<form className={classes.form} onSubmit={submitHandler}>
						<div className={classes.control}>
							<label htmlFor='AddressType'></label>
							<input
								type='text'
								required
								id='AddressType'
								placeholder='Address type'
								ref={AddressTypeRef}
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='AddressName'></label>
							<input
								type='text'
								required
								id='AddressName'
								placeholder='Address Name'
								ref={AddressNameRef}
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='PhoneNumber'></label>
							<input
								type='text'
								required
								id='PhoneNumber'
								placeholder='Phone Number'
								ref={PhoneNumberRef}
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='Town'></label>
							<input
								type='text'
								required
								id='Town'
								placeholder='Town'
								ref={TownRef}
							></input>
						</div>
						<div className={classes.control}>
							<label htmlFor='Block'></label>
							<input
								type='text'
								required
								id='Block'
								placeholder='Block'
								ref={BlockRef}
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Street'></label>
							<input
								type='text'
								required
								id='Street'
								placeholder='Street'
								ref={StreetRef}
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Lane'></label>
							<input
								type='text'
								id='Lane'
								placeholder='Lane(optional)'
								ref={LaneRef}
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='House'></label>
							<input
								type='text'
								required
								id='House'
								placeholder='House/Building'
								ref={HouseRef}
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Floor'></label>
							<input
								type='text'
								id='Floor'
								placeholder='Floor'
								ref={FloorRef}
							></input>
						</div>{' '}
						<div className={classes.control}>
							<label htmlFor='Apartment'></label>
							<input
								type='text'
								id='Apartment'
								placeholder='Apartment'
								ref={ApartmentRef}
							></input>
						</div>
						<div className={classes.actions}>
							<button> CHECKOUT</button>
							<div className={classes.Image}>
								<Image
									src='/images/svg/outline-payments.svg'
									alt=''
									width={109}
									height={36}
								/>
							</div>
						</div>
					</form>
				</section>
			</section>
		</>
	);
}
