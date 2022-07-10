import classes from './SignInForm.module.css';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInForm({ signinHandler }) {

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
			<Image
				src='/images/svg/x.svg'
				alt=''
				width={36}
				height={36}
				color={'black'}
			/>

			<h1 className={classes.card_title}>
				LOGIN{' '}
				<Image src='/images/svg/indoor.svg' alt='' width={24} height={24} />
			</h1>

			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<div className={classes.control_icon}>
						<Image src='/images/svg/user.svg' alt='' width={16} height={16} />
					</div>

					<label htmlFor='Email'>
						<input
							type='text'
							required
							id='Email'
							placeholder='EMAIL'
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
							type='password'
							required
							id='Password'
							placeholder='PASSWORD'
							ref={PasswordRef}
							className={classes.placeholder}
						></input>
					</label>
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
