import classes from './SignInForm.module.css';

export default function SignInForm() {
	function submitHandler(event) {
		event.preventDefault();
	}

	return (
		<div className={classes.card}>
			<h1 className={classes.card_title}>Sign in</h1>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='Username'></label>
					<input
						type='text'
						required
						id='Username'
						placeholder='Username'
					></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='Email'></label>
					<input type='text' required id='Email' placeholder='Email'></input>
				</div>
				<div className={classes.actions}>
					<button> sign in</button>
					<button>create account</button>
				</div>
			</form>
		</div>
	);
}
