import Header from '../components/Layout/Header';
import SignupForm from '../components/userSignup/SignupForm';

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
		console.log(data);
	}
	return (
		<>
			<Header />
			<SignupForm signupHandler={signupHandler} />
		</>
	);
}
