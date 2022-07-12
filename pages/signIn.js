import Header from '../components/Layout/Header';
import SignInForm from '../components/userSignIn/SignInForm';
import SignoutForm from '../components/userSignout/SignoutForm';
import bcrypt from 'bcryptjs';
import { useState } from 'react';

export default function SignIn() {
	const [user, setUser] = useState({})
	const [isSignedIn, setIsSignedIn] = useState(false)
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
			setUser(data.checkuser); // set user in state
			setIsSignedIn(true); // set isSignedIn to true
		} else {
			console.log('wrong password or email');
		}
	}

	function signoutHandler() {
		localStorage.removeItem('token'); // remove token from local storage
		setUser({}); // set user to empty object
		setIsSignedIn(false); // set isSignedIn to false
	}
	return (
		<>
			<Header />
			{!isSignedIn && <SignInForm signinHandler={signinHandler} />}
			{isSignedIn && <SignoutForm user={user} signoutHandler={signoutHandler} />}
		</>
	);
}
