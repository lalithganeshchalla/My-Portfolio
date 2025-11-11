import React, { useMemo, useState } from 'react';
import './Home.css';
import {
  Avatar,
  Box,
  Card,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
  createTheme,
  ThemeProvider
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import profileImage from '../assets/my.jpg';
import logoImage from '../assets/apple-touch-icon.png';
import Gmail from '../assets/gif/Gmail.gif';
import GitHub from '../assets/gif/GitHub.gif';
import LinkedIn from '../assets/gif/Linkedin.gif';

const Home = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'light';
  });
  const [activeNav, setActiveNav] = useState('Home');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          background: { default: '#ffffff' },
          mode,
          ...(mode === 'light'
            ? {
              background: { default: '#fff' },
              text: { primary: '#000' }
            }
            : {
              background: { default: '#121212' },
              text: { primary: '#fff' }
            })
        },
        typography: {
          fontFamily: 'Arial, sans-serif'
        }
      }),
    [mode]
  );

  const handleThemeToggle = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newMode);   // persist
      return newMode;
    });
  };

  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Resume', path: '/resume' },
    { label: 'Projects', path: '/projects' },
    { label: 'Tools', path: '/tools' },
    { label: 'About', path: '/about' },
    { label: 'Contact Us', path: '/contactus' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters sx={{ mt: 2, mb: 2 }}>
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
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Lalith Ganesh Challa
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Full-Stack Developer
              </Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            {navLinks.map((item, index) => (
              <React.Fragment key={item.label}>
                {index !== 0 && (
                  <Typography color="text.secondary">|</Typography>
                )}
                <Link
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  onClick={() => setActiveNav(item.label)}
                  sx={{
                    color:
                      activeNav === item.label ? 'primary.main' : 'text.primary',
                    position: 'relative',
                    fontWeight: activeNav === item.label ? 'bold' : 'normal',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: activeNav === item.label ? '50%' : '0%',
                      height: '2px',
                      bottom: -4,
                      left: '50%',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease-out',
                      transform: 'translateX(-50%)'
                    },
                    '&:hover::after': {
                      width: '50%'
                    }
                  }}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
            <IconButton
              onClick={handleThemeToggle}
              color="inherit"
              aria-label="Toggle theme"
              sx={{ mr: 2 }}
            >
              {mode === 'dark' ? (
                <DarkModeIcon sx={{ color: '#fff' }} />
              ) : (
                <LightModeIcon sx={{ color: '#FFC107' }} />
              )}
            </IconButton>
          </Box>
        </Box>
        <Divider />

        {/* Hero Section */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          my={8}
        >
          {/* Profile Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              sx={{
                border: '4px solid #00bcd4',
                borderRadius: '50%',
                display: 'inline-block',
                p: 1
              }}
            >
              <Avatar
                src={profileImage}
                alt="Lalith Ganesh"
                sx={{ width: 220, height: 220, userSelect: 'none' }}
                imgProps={{
                  draggable: false,
                  onContextMenu: (e) => e.preventDefault(), // disable right-click menu
                  onDragStart: (e) => e.preventDefault(),
                }}
              />
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Building Scalable Web & Mobile Solutions
            </Typography>
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              with Flutter and React JS
            </Typography>

            <Typography variant="body1" color="text.secondary" mt={2}>
              Motivated MCA Graduate with expertise full-stack development.
              Delivering intuitive user experiences across the platforms.
            </Typography>

            {/* Tech Icons */}
            <Box mt={3} display="flex" gap={3} flexWrap="wrap" justifyContent="center">
              <a href="mailto:your-email@gmail.com?subject=Portfolio%20Inquiry&body=Hi,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noopener noreferrer">
                <Card
                  sx={{
                    borderRadius: '60px',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.6)',
                    },
                  }}
                >
                  <img src={Gmail} alt="Gmail" width={50} />
                </Card>
              </a>

              <a href="https://github.com/lalithganeshchalla" target="_blank" rel="noopener noreferrer">
                <Card
                  sx={{
                    borderRadius: '60px',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.6)',
                    },
                  }}
                >
                  <img src={GitHub} alt="GitHub" width={50} />
                </Card>
              </a>

              <a href="https://www.linkedin.com/in/challa-lalith-ganesh" target="_blank" rel="noopener noreferrer">
                <Card
                  sx={{
                    borderRadius: '60px',
                    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.4)',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                      boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.6)',
                    },
                  }}
                >
                  <img src={LinkedIn} alt="LinkedIn" width={50} />
                </Card>
              </a>
            </Box>


            {/* Buttons */}
            <Box mt={4} display="flex" gap={2}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#f57c00', color: '#fff', px: 3, py: 1.5,
                  borderRadius: 10
                }}
                onClick={() => navigate('/projects')}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#f57c00',
                  color: '#f57c00',
                  px: 3,
                  py: 1.5,
                  borderRadius: 10
                }}
                onClick={() => navigate('/resume')}
              >
                Download Resume (PDF)
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

    </ThemeProvider>
  );
};

export default Home;
