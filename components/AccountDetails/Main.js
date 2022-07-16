import classes from './Main.module.css';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Main() {
	const [showAddress, setshowAddress] = useState(false);
	const [AddAddress, setAddAddress] = useState(false);

	// functionallty to delete the addresse when press on the trash
	function deleteAddress() {
		setshowAddress();
	}
	// functionallty to add addresse when press on the add button
	function newAddress() {
		setAddAddress(!AddAddress);
	}

	// functionallty to add addresse to database
	function submitAddress() {}

	// form refs
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
		props.AddAddressData({ AddressData });
	}
	return (
		<>
			<section className={classes.card}>
				<div className={classes.card_header}>
					<h1 className={classes.card_header_title}>Addresses</h1>
				</div>

				<div className={classes.card_control}>
					<h3 className={classes.card_control_name}>
						(alqurain) <span> home sweet home</span>
					</h3>
					<h3 className={classes.card_control_address}>
						block 4, street 9 , house 13
					</h3>
					<h3 className={classes.card_control_phone}>
						Phone number: <span>66458885</span>
					</h3>
					<div className={classes.card_control_trash}>
						<Image
							src='/images/svg/trash.svg'
							alt=''
							width={18}
							height={18}
							onClick={deleteAddress}
						/>
					</div>
				</div>
				{/* when button clicked, form appear */}
				{AddAddress ? (
					<form className={classes.form} onSubmit={submitHandler}>
						<div className={classes.control}>
							<label htmlFor='AddressType'></label>
							<input
								type='text'
								required
								id='AddressType'
								placeholder='Address type : house or apartment'
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
						<div className={classes.action}>
							<button
								className={classes.control_button}
								onClick={submitAddress}
							>
								Add New Address
								<span className={classes.control_button_plus}> +</span>
							</button>
						</div>
					</form>
				) : (
					<div className={classes.action}>
						<button className={classes.control_button} onClick={newAddress}>
							Add New Address
							<span className={classes.control_button_plus}> +</span>
						</button>
					</div>
				)}
				{/* <h6 className={classes.card_header_button}> Add +</h6> */}
			</section>
		</>
	);
}
