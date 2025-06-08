import React, { useMemo, useState } from 'react';
import { Divider, IconButton  } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import {
  Box,
  Container,
  CssBaseline,
  Link,
  // Switch,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/apple-touch-icon.png';

const Tools = () => {
  const [mode, setMode] = useState('light');
  const [activeNav, setActiveNav] = useState('Tools');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? { background: { default: '#f5f5f5' }, text: { primary: '#000' } }
            : { background: { default: '#121212' }, text: { primary: '#fff' } })
        },
        typography: {
          fontFamily: 'Arial, sans-serif'
        }
      }),
    [mode]
  );

  const handleThemeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Resume', path: '/resume' },
    { label: 'Projects', path: '/projects' },
    { label: 'Tools', path: '/tools' },
    { label: 'Contact Us', path: '/contactus' }
  ];
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='xl' disableGutters sx={{ mt: 2, mb: 4 }}>
        {/* Header */}
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          mb={2}
        >
          <Box display="flex" alignItems="center" gap={2} sx={{ ml: 2 }}>
            <img src={logoImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />

            <Typography variant="h6">Lalith Ganesh Challa</Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Developer
            </Typography>

          </Box>

          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" mt={{ xs: 2, sm: 0 }}>
            {navLinks.map((item, index) => (
              <React.Fragment key={item.label}>
                {index !== 0 && <Typography color="text.secondary">|</Typography>}
                <Link
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  onClick={() => setActiveNav(item.label)}
                  sx={{
                    color: activeNav === item.label ? 'primary.main' : 'text.primary',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeNav === item.label ? '50%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '50%',
                    },
                  }}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
            {/* <Switch
              checked={mode === 'dark'}
              onChange={handleThemeToggle}
              inputProps={{ 'aria-label': 'theme toggle' }}
            /> */}
            <IconButton onClick={handleThemeToggle} color="inherit" aria-label="Toggle theme" sx={{ mr: 2 }}>
              {mode === 'dark' ? (
                <DarkModeIcon sx={{ color: '#fff' }} /> // Yellow moon in dark mode
              ) : (
                <LightModeIcon sx={{ color: '#FFC107' }} /> // Blue sun in light mode
              )}
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Box mt={4}>
          <Box
            sx={{
              // width: '100%',
              // height: { xs: '80vh', md: '800px' },
              // border: 'none',
              // overflow: 'hidden'
            }}
          >
           <Box pl={3}>
           
    </Box>


          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Tools;
