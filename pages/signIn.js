import Header from '../components/Layout/Header';
import SignInForm from '../components/userSignIn/SignInForm';
import bcrypt from 'bcryptjs';

export default function SignIn() {
	async function signinHandler(userData) {
		const response = await fetch('/api/signin', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json();
		if (bcrypt.compareSync(userData.password, data.checkuser.password)){
			console.log(data);
		} else {
			console.log('wrong password or email');
		}
	}
	return (
		<>
			<Header />
			<SignInForm signinHandler={signinHandler} />
		</>
	);
}
