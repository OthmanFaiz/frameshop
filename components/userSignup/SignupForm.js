import classes from './SignupForm.module.css';
import { useState, useRef } from 'react';
import bcrypt from 'bcryptjs';

export default function SignInForm({ signupHandler }) {
	const [active, setActive] = useState(true);

	// form ref
	const UserNameRef = useRef();
	const FullNameRef = useRef();
	const PhoneNumberRef = useRef();
	const EmailRef = useRef();
	const PasswordRef = useRef();
	const ConfirmPasswordRef = useRef();

	// form handler
	function submitHandler(event) {
		event.preventDefault();
		const entered_UserName = UserNameRef.current.value;
		const entered_FullName = FullNameRef.current.value;
		const entered_PhoneNumber = PhoneNumberRef.current.value;
		const entered_Email = EmailRef.current.value;
		const entered_Password = PasswordRef.current.value;
		const entered_ConfirmPasswordRef = ConfirmPasswordRef.current.value;

		const NewUserData = {
			userName: entered_UserName,
			fullName: entered_FullName,
			phoneNumber: entered_PhoneNumber,
			email: entered_Email,
			password: bcrypt.hashSync(entered_Password, 10),
			// https://www.abeautifulsite.net/posts/hashing-passwords-with-nodejs-and-bcrypt
			signup_date: new Date()
		};
		// signup function
		signupHandler(NewUserData);
	}

	return (
		<div className={classes.card}>
			<h1 className={classes.card_title}>Creat Account</h1>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='UserName'></label>
					<input
						type='text'
						required
						id='UserName'
						placeholder='UserName'
						ref={UserNameRef}
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='FullName'></label>
					<input
						type='text'
						required
						id='FullName'
						placeholder='FullName'
						ref={FullNameRef}
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
