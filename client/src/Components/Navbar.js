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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/EverCartDarkCroped.png';
import routes from '../config/routes';






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
		<AppBar position="static" sx={{ height: "80px", background: "#000000", margin: "0px", padding: "0px" }}>
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
					<img src={logo} alt="logo" style={{ height: "80px", width: "250px" }} />
				</div>
{/* THIS IS THE CODE FOR SMALL SCREENS */}
				<Hidden mdUp>
					<Menu
						
						id="menu-appbar"
						anchorEl={open ? <Link /> : null}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={open}
						onClose={handleDrawerClose}
					>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.HOMEPAGE_PAGE} style={{ color: "#ffffff", textDecoration: 'none' }}>Home</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.BOLGS} style={{ color: "#ffffff", textDecoration: 'none' }}>Blogs</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.ABOUT} style={{ color: "#ffffff", textDecoration: 'none' }}>About</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.CONTACT_US} style={{ color: "#ffffff", textDecoration: 'none' }}>Contact Us</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.FAQS} style={{ color: "#ffffff", textDecoration: 'none' }}>FAQs</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.CART} style={{ color: "#ffffff", textDecoration: 'none' }}>
								<ShoppingCartIcon/>
							</Link>
						</MenuItem>
						<MenuItem onClick={handleDrawerClose}>
							<Link to={routes.PROFILE} style={{ color: "#ffffff", textDecoration: 'none' }}>
								<AccountCircleIcon />
							</Link>
						</MenuItem>
					</Menu>
				</Hidden>
{/* THIS IS THE CODE FOR BIG SCREENS */}
				<Hidden mdDown>
					<Typography variant="h6" sx={{ fontSize: "18px",justifyContent: 'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Link to={routes.HOMEPAGE_PAGE} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							Home
						</Link>
						<Link to={routes.BOLGS} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							Blogs
						</Link>
						<Link to={routes.ABOUT} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							About
						</Link>
						<Link to={routes.CONTACT_US} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							Contact Us
						</Link>
						<Link to={routes.FAQS} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '10px' }}>
							FAQs
						</Link>
						<Link to={routes.CART} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							<ShoppingCartIcon sx={{ marginLeft: "20px" }} />
						</Link>
						<Link to={routes.PROFILE} style={{ color: "#ffffff", textDecoration: 'none', marginRight: '20px' }}>
							<AccountCircleIcon />
						</Link>
					</Typography>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;