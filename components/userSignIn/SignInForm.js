import classes from './SignInForm.module.css';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function SignInForm({ signinHandler }) {
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
			email: entered_Email,
			password: entered_Password,
		};
		// here to check the object
		signinHandler(usernameData);
	}

	return (
		<div className={classes.card}>
			<h1 className={classes.card_title}>LOGIN </h1>

			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='Email'></label>
					<input
						type='text'
						required
						id='Email'
						placeholder='EMAIL'
						ref={EmailRef}
						className={classes.placeholder}
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='Password'></label>
					<input
						type='password'
						required
						id='Password'
						placeholder='PASSWORD'
						ref={PasswordRef}
						className={classes.placeholder}
					></input>
				</div>
				<div className={classes.actions}>
					<button> Sign In</button>
					<Link href='/signup'>
						<button>Create Account</button>
					</Link>
					<Link href='/restpassword'>
						<h2 className={classes.actions_password}>RESET YOUR PASSWORD</h2>
					</Link>
				</div>
			</form>
		</div>
	);
}
