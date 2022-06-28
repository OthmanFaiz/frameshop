import classes from './SignInForm.module.css';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function SignInForm() {
	const [active, setActive] = useState(true);

	// form ref
	const EmailRef = useRef();
	const PasswordRef = useRef();

	// form handler
	function submitHandler(event) {
		event.preventDefault();
		const entered_Email = EmailRef.current.value;
		const entered_Password = PasswordRef.current.value;

		const usernameData = {
			Email: entered_Email,
			Password: entered_Password,
		};
		// here to check the object
		console.log(usernameData);
	}

	return (
		<div className={classes.card}>
			<h1 className={classes.card_title}>Sign in</h1>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='Email'></label>
					<input
						type='text'
						required
						id='Email'
						placeholder='Email'
						ref={EmailRef}
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='Password'></label>
					<input
						type='password'
						required
						id='Password'
						placeholder='Password'
						ref={PasswordRef}
					></input>
				</div>
				<div className={classes.actions}>
					<button> sign in</button>
				</div>
			</form>
			<Link href='/signup'>
				<button>create account</button>
			</Link>
		</div>
	);
}
