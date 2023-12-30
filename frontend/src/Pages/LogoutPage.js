import React from 'react';
import {logout} from '../config/firebase';

const LogoutPage = () => {

	const logoutUser = async () => {
		try {
			await logout();
		} catch (err) {
			console.error('Error during loggingout user:', err.message);
		}
	}

	return (
		<div>
			<h1>Are You sure you want to logout</h1>
			<button
			onClick={logoutUser}
			>
				logout
			</button>
		</div>
	)
}

export default LogoutPage