import Header from '../components/SharedComponent/Header';
import SignupForm from '../components/userSignup/SignupForm';

export default function SignIn() {
	async function signupHandler(userData) {
		const response = await fetch('http://localhost:3000/api/newuser', {
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
