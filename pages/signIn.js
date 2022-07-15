import Header from '../components/Layout/Header';
import SignInForm from '../components/userSignIn/SignInForm';
import SignoutForm from '../components/userSignout/SignoutForm';
import bcrypt from 'bcryptjs';
import { useCart } from '../lib/CartContext';

export default function SignIn() {
	const { userLoggedIn, setUserLoggedIn, user, setUser } = useCart();

	async function signinHandler(userData) {
		const response = await fetch('/api/signin', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json();
		if (data.checkuser && (await bcrypt.compare(userData.password, data.checkuser.password))){
			localStorage.setItem('token', data.checkuser.token); // set token in local storage
			setUser({fullName: data.checkuser.fullName, email: data.checkuser.email, phoneNumber: data.checkuser.phoneNumber}); // set user in state
			setUserLoggedIn(true); // set isSignedIn to true
		} else {
			console.log('wrong password or email');
		}
	}

	function signoutHandler() {
		localStorage.removeItem('token'); // remove token from local storage
		setUser({}); // set user to empty object
		setUserLoggedIn(false); // set isSignedIn to false
	}
	return (
		<>
			<Header />
			{!userLoggedIn && <SignInForm signinHandler={signinHandler} />}
			{userLoggedIn && <SignoutForm user={user} signoutHandler={signoutHandler} />}
		</>
	);
}
