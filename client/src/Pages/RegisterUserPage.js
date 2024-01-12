import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import routes from '../config/routes';
import Navbar from '../Components/Navbar';
import defaultTheme from '../config/muiTheme';

export default function SignUp() {
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
						Sign up
					</Typography>
					<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
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
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									sx={{
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: 'white',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: 'white',
										},
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									sx={{
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: 'white',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: 'white',
										},
									}}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									sx={{
										'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
											borderColor: 'white',
										},
										'& .MuiInputLabel-root.Mui-focused': {
											color: 'white',
										},
									}}
								/>
							</Grid>
							<Grid item xs={12}>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2,border: '1px solid grey' }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href={routes.LOGIN_PAGE} sx={{color: "white"}} variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}