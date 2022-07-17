import classes from './SignoutForm.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function SignoutForm({ signoutHandler,user }) {

	// form handler
	function submitHandler(event) {
		event.preventDefault();
		signoutHandler();
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
				Signout {user.userName}{' '}
				<Image src='/images/svg/indoor.svg' alt='' width={24} height={24} />
			</h1>

			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.actions}>
					<button> Signout</button>
					<Link href='/restpassword'>
						<h2 className={classes.actions_password}>RESET YOUR PASSWORD</h2>
					</Link>
				</div>
			</form>
		</div>
	);
}
