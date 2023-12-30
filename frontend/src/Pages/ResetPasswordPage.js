import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordReset } from '../config/firebase';

const ResetPasswordPage = () => {
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const handleSendPasswordReset = async () => {
		try {
			await sendPasswordReset(email);
			console.log('Password reset email sent successfully');
		} catch (error) {
			console.error('Error sending password reset email:', error.message);
		}
	};

	return (
		<div>
			<div className="login">
				<div className="login_box">
					<input
						type="text"
						className="reset__textBox"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="E-mail Address"
					/>
					<button
						style={{ marginTop: "20px" }}
						className="reset__btn"
						onClick={handleSendPasswordReset}
					>
						Send password reset email
					</button>
					<div style={{ marginTop: "20px" }}>
						Don't have an account? <Link to="/register">Register</Link> now.
					</div>
				</div>
			</div>

		</div>
	)
}

export default ResetPasswordPage