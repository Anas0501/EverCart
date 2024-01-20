import { createTheme } from '@mui/material/styles';

// Define your theme colors, typography, and other options here
const myTheme = createTheme({
  palette: {
    mode: 'dark', // or 'light'
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kanit, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // Add any other theme customizations you need
});

export default myTheme;