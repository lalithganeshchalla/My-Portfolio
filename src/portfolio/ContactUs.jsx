import React, { useMemo, useState } from 'react';
import { Card, Divider, IconButton  } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import messageIcon from '../assets/messageIcon.svg';
import time from '../assets/time.svg';
import splash from '../assets/high-voltage.svg';
import MagicSpark from '../assets/magic-sparkles.svg';
import GoogleIcon  from '../assets/google.svg';
import PhoneIcon from '../assets/phone.svg';
import LinkedInSvg from '../assets/linkedin.svg';

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

const ContactUs = () => {
  const [mode, setMode] = useState('light');
  const [activeNav, setActiveNav] = useState('Contact Us');

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
            <IconButton onClick={handleThemeToggle} color="inherit" aria-label="Toggle theme" sx={{ mr: 2 }}>
              {mode === 'dark' ? (
                <DarkModeIcon sx={{ color: '#fff' }} />
              ) : (
                <LightModeIcon sx={{ color: '#FFC107' }} />
              )}
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Box mt={4}>
          <Box
            sx={{
            }}
          >
            <Card sx={{margin:'30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
              <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100%',p:3 }}>
                <img src={messageIcon} alt='messageIcon' style={{ width: '60px', height: '60px', borderRadius: '10%',backgroundColor: 'blue' ,padding: '10px' }} />
                <Typography variant="h5" sx={{ ml: 2,mt:2 }}>
                  We'd love to here from you.
                </Typography>
                <Typography variant="subtitle2" sx={{ ml: 2,mt:0 }}>
                  Here's what some of my satisfied clients have to say about my work.
                </Typography>
                <Box sx={{ display: 'flex',flexDirection:'row', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                  <Card sx={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '300px' }}>
                    <img src={time} alt='time' style={{ width: '10px', height: '10px' }} />
                    <Typography variant="caption" sx={{ ml: 1}}>
                      24/7 Assistance
                    </Typography>
                   </Card>
                  <Card sx={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '300px' }}>
                    <img src={splash} alt='time' style={{ width: '10px', height: '10px' }} />
                    <Typography variant="caption" sx={{ ml: 1}}>
                      Quick Change Resolutions
                    </Typography>
                  </Card>
                  <Card sx={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '300px' }}>
                    <img src={MagicSpark} alt='time' style={{ width: '10px', height: '10px' }}/>
                    <Typography variant="caption" sx={{ ml: 1 }}>
                      Flexible Working hours
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </Card>
            <Box pl={3}>
            </Box>
          </Box>
        </Box>
        <Divider/>
        <Box sx={{ display: 'flex',flexDirection:'row', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                  <Card sx={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '300px' }}>
                    <Link
                    href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={GoogleIcon} alt='time' style={{ width: '10px', height: '10px' }} />
                    <Typography variant="caption" sx={{ ml: 1}}>
                      challalalithganesh@gmail.com
                    </Typography>
                  </Link>
                    
                   </Card>
                  <Card sx={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '300px' }}>
                    <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={PhoneIcon} alt='time' style={{ width: '10px', height: '10px' }} />
                    <Typography variant="caption" sx={{ ml: 1}}>
                      +91 9515394859
                    </Typography>
                  </Link>
                  </Card>
                  <Card sx={{ margin: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '10px', width: '300px' }}>
                    <Link
                    href="https://www.linkedin.com/in/challa-lalith-ganesh"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={LinkedInSvg} alt='time' style={{ width: '10px', height: '10px' }} />
                    <Typography variant="caption" sx={{ ml: 1}}>
                      @lalithganeshchalla
                    </Typography>
                  </Link>
                  </Card>

                </Box>
                <Divider sx={{ mt: 1 }} />
                <Typography display='flex' flexDirection='column' justifyContent='end' textAlign='center' variant="caption" sx={{ mt: 0, mb: 0 }}>
                  Copyright © 2025 Lalith Ganesh Challa. All rights.
                  </Typography>
      </Container>
    </ThemeProvider>
  );
};
export default ContactUs;
