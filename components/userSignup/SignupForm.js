import classes from './SignupForm.module.css';
import { useState, useRef } from 'react';
import Link from 'next/link';

export default function SignInForm() {
	const [active, setActive] = useState(true);

	// form ref
	const UserNameRef = useRef();
	const PhoneNumberRef = useRef();
	const EmailRef = useRef();
	const PasswordRef = useRef();
	const ConfirmPasswordRef = useRef();

	// form handler
	function submitHandler(event) {
		event.preventDefault();
		const entered_UserName = UserNameRef.current.value;
		const entered_PhoneNumber = PhoneNumberRef.current.value;
		const entered_Email = EmailRef.current.value;
		const entered_Password = PasswordRef.current.value;
		const entered_ConfirmPasswordRef = ConfirmPasswordRef.current.value;

		const NewUserData = {
			UserName: entered_UserName,
			PhoneNumber: entered_PhoneNumber,
			Email: entered_Email,
			Password: entered_Password,
			ConfirmPassword: entered_ConfirmPasswordRef,
		};
		// here to check the object
		console.log(NewUserData);
	}

	return (
		<div className={classes.card}>
			<h1 className={classes.card_title}>Creat Account</h1>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor=' UserName'></label>
					<input
						type='text'
						required
						id=' UserName'
						placeholder=' UserName'
						ref={UserNameRef}
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='PhoneNumber'></label>
					<input
						type='text'
						required
						id='PhoneNumber'
						placeholder='PhoneNumber'
						ref={PhoneNumberRef}
					></input>
				</div>
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
						type='Password'
						required
						id='Password'
						placeholder='Password'
						ref={PasswordRef}
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='ConfirmPassword'></label>
					<input
						type='Password'
						required
						id='ConfirmPassword'
						placeholder='ConfirmPassword'
						ref={ConfirmPasswordRef}
					></input>
				</div>
				<div className={classes.actions}>
					<button> Creat Account</button>
				</div>
			</form>
		</div>
	);
}
