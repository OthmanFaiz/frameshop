import Header from '../components/Layout/Header';
import SignupForm from '../components/userSignup/SignupForm';
import Router from 'next/router';

export default function SignIn() {
	async function signupHandler(userData) {
		const response = await fetch('/api/newuser', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json();
		if(data.state === 'success') {
			// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page
			Router.push('/signIn');
		}
	}
	return (
		<>
			<Header />
			<SignupForm signupHandler={signupHandler} />
		</>
	);
}
