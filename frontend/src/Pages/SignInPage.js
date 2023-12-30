import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { signInWithGooglePopUp } from '../config/firebase';
import { logInWithEmailAndPassword } from '../config/firebase';

const defaultTheme = createTheme();

export default function SignIn() {

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get("email");
		const password = data.get("password");
		
		try {
			if (!email || !password) {
				throw new Error("Email and password are required.");
			}
			await logInWithEmailAndPassword(email, password);
			console.log("User Logged in Successfully");
		} catch (err) {
			console.error("Error during login:", err.message);
		}
	};

	const handleGoogleSignIn = async () => {
		try {
			await signInWithGooglePopUp();
		} catch (err) {
			console.error('Error during Google sign-in:', err.message);
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 1, mb: 2 ,backgroundColor: 'black',color: "white"}}
						>
							Sign In
						</Button>
						<Button
						fullWidth
						variant="contained"
						sx={{ mt: 0, mb: 2 ,backgroundColor: 'black',color: "white"}}
						onClick={handleGoogleSignIn}
						>
							Sign In With Google
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2" sx={{color: "black"}}>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2" sx={{color: "black"}}>
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}