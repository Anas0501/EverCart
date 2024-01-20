import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from '../Components/Navbar';
import defaultTheme from '../config/muiTheme'
import routes from '../config/routes';
import { useDispatch } from 'react-redux';


export default function SignInSide() {
	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get('email'),
			password: data.get('password'),
		});
	};


	return (
		<ThemeProvider theme={defaultTheme}>
      <Navbar />
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
							sx={{
								'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
									borderColor: 'white',
								},
								'& .MuiInputLabel-root.Mui-focused': {
									color: 'white',
								},
							}}
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
							sx={{
								'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
									borderColor: 'white',
								},
								'& .MuiInputLabel-root.Mui-focused': {
									color: 'white',
								},
							}}
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2, border: '1px solid grey' }}
						>
							Sign In
						</Button>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 0, mb: 2, border: '1px solid grey' }}
						>
							Sign In With Google
						</Button>
						<Grid container>
							<Grid item xs>
								<Link href={routes.FORGOT_PASSWORD} variant="body2" sx={{ color: 'white' }}>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href={routes.REGISTER_PAGE} variant="body2" sx={{ color: 'white' }}>
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