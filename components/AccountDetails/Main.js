import classes from './Main.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Main() {
	const [showAddress, setshowAddress] = useState(false);

	function deleteAddress() {
		setshowAddress(!showAddress);
	}
	return (
		<>
			<section className={classes.card}>
				<h1 className={classes.card_title}>Addresses</h1>
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
				<div className={classes.control}>
					<button className={classes.control_button}>
						Add New Address
						<span className={classes.control_button_plus}> +</span>
					</button>
				</div>
			</section>
		</>
	);
}
