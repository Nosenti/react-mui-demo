import { useState } from 'react';
import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import MuiAutocomplete from './components/MuiAutocomplete';
import MuiButton from './components/MuiButton';
import MuiRadioButton from './components/MuiRadioButton';
import MuiRating from './components/MuiRating';
import MuiSelect from './components/MuiSelect';
import MuiTextField from './components/MuiTextField';
import MuiTypography from './components/MuiTypography';
import MuiLayout from './components/MuiLayout';
import MuiCard from './components/MuiCard';
import MuiAccordion from './components/MuiAccordion';
import MuiImageList from './components/MuiImageList';
import MuiNavbar from './components/MuiNavbar';
import MuiLink from './components/MuiLink';
import MuiDrawer from './components/MuiDrawer';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiResponsiveness from './components/MuiResponsiveness';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
})

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <MuiResponsiveness/>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
