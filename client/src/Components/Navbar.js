import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Hidden,
	useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/EverCartDarkCroped.png';

const Navbar = () => {
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

	return (
		<AppBar position="static" sx={{ height: "85px", background: "#000000", margin: "0px", padding: "0px" }}>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
				</IconButton>
				<img src={logo} alt="logo" style={{ height: "85px", width: "220px" }} />
				<Hidden mdUp>
					<IconButton size="large" edge="end" color="inherit" aria-label="open drawer">
						<MenuIcon />
					</IconButton>
				</Hidden>
				<Toolbar sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
					<Hidden mdDown>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/" style={{ color: "#ffffff", textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
								Home
							</Link>
						</Typography>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/contact" style={{ color: "#ffffff", textDecoration: 'none', display: 'flex', alignItems: 'center', padding: 0, marginRight: '20px', marginLeft: "20px" }}>
								Contact Us
							</Link>
						</Typography>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/about" style={{ color: "#ffffff", textDecoration: 'none', display: 'flex', alignItems: 'center', padding: 0, marginRight: '20px', marginLeft: "20px" }}>
								About
							</Link>
						</Typography>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							<Link to="/blogs" style={{ color: "#ffffff", textDecoration: 'none', display: 'flex', alignItems: 'center', padding: 0, marginRight: '20px', marginLeft: "20px" }}>
								Blogs
							</Link>
						</Typography>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }  }}>
							<Link to="/blogs" style={{ color: "#ffffff", textDecoration: 'none', display: 'flex', alignItems: 'center', padding: 0, marginRight: '20px', marginLeft: "20px" }}>
								FAQs
							</Link>
						</Typography>
					</Hidden>
				</Toolbar>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;