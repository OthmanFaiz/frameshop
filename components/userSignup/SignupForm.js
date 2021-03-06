import classes from './SignupForm.module.css';
import { useState, useRef } from 'react';
import bcrypt from 'bcryptjs';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInForm({ signupHandler }) {

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
			signup_date: new Date(),
		};
		// signup function
		signupHandler(NewUserData);
	}

	return (
		<div className={classes.card}>
			<Link href="/">
				<Image
					src='/images/svg/x-black.svg'
					alt=''
					width={36}
					height={36}
				/>
			</Link>
			<h1 className={classes.card_title}>
				Create Account{' '}
				<Image src='/images/svg/user-plus.svg' alt='' width={24} height={24} />
			</h1>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/user.svg' alt='' width={16} height={16} />
					</div>

					<label htmlFor='UserName'>
						<input
							type='text'
							required
							id='UserName'
							placeholder='User Name'
							ref={UserNameRef}
							className={classes.placeholder}
						></input>
					</label>
				</div>

				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/user.svg' alt='' width={16} height={16} />
					</div>

					<label htmlFor='FullName'>
						<input
							type='text'
							required
							id='FullName'
							placeholder='Full Name'
							ref={FullNameRef}
							className={classes.placeholder}
						></input>
					</label>
				</div>

				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/phoneblack.svg' alt='' width={16} height={16} />
					</div>
					<label htmlFor='PhoneNumber'>
						<input
							type='text'
							required
							id='PhoneNumber'
							placeholder='Phone Number'
							ref={PhoneNumberRef}
							className={classes.placeholder}
						></input>
					</label>
				</div>
				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/mail.svg' alt='' width={16} height={16} />
					</div>
					<label htmlFor='Email'>
						<input
							type='text'
							required
							id='Email'
							placeholder='Email'
							ref={EmailRef}
							className={classes.placeholder}
						></input>
					</label>
				</div>
				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/lock.svg' alt='' width={16} height={16} />
					</div>
					<label htmlFor='Password'>
						<input
							type='Password'
							required
							id='Password'
							placeholder='Password'
							ref={PasswordRef}
							className={classes.placeholder}
						></input>
					</label>
				</div>
				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/lock.svg' alt='' width={16} height={16} />
					</div>
					<label htmlFor='ConfirmPassword'>
						<input
							type='Password'
							required
							id='ConfirmPassword'
							placeholder='Confirm Password'
							ref={ConfirmPasswordRef}
							className={classes.placeholder}
						></input>
					</label>
				</div>
				<div className={classes.actions}>
					<button> Create Account</button>
				</div>
			</form>
		</div>
	);
}
