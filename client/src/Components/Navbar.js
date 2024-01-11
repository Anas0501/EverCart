import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Hidden,
	Menu,
	MenuItem,
	useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/EverCartDarkCroped.png';

const Navbar = () => {
	const [open, setOpen] = React.useState(false);
	const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<AppBar position="static" sx={{ height: "85px", background: "#000000", margin: "0px", padding: "0px" }}>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					sx={{ mr: 2 }}
					onClick={handleDrawerOpen}
				>
					{isSmallScreen ? <MenuIcon /> : null}
				</IconButton>

				<div style={{ display: 'flex', alignItems: 'center' }}>
					<img src={logo} alt="logo" style={{ height: "85px", width: "220px" }} />
				</div>

				<Hidden mdUp>
					<Menu
						id="menu-appbar"
						anchorEl={open ? <Link /> : null}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={open}
						onClose={handleDrawerClose}
					>
						<MenuItem onClick={handleDrawerClose}>
							<Link to="/" style={{ color: "#ffffff", textDecoration: 'none' }}>Home</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to="/blogs" style={{ color: "#ffffff", textDecoration: 'none' }}>Blogs</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to="/about" style={{ color: "#ffffff", textDecoration: 'none' }}>About</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to="/contact" style={{ color: "#ffffff", textDecoration: 'none' }}>Contact Us</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to="/faqs" style={{ color: "#ffffff", textDecoration: 'none' }}>FAQs</Link>
						</MenuItem>
					</Menu>
				</Hidden>

				<Hidden mdDown>
					<Typography variant="h6" sx={{ fontSize: "18px", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link to="/" style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							Home
						</Link>
						<Link to="/blogs" style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							Blogs
						</Link>
						<Link to="/about" style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							About
						</Link>
						<Link to="/contact" style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							Contact Us
						</Link>
						<Link to="/faqs" style={{ color: "#ffffff", textDecoration: 'none' }}>FAQs</Link>
					</Typography>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;