import React, { useMemo, useState } from 'react';
import { Divider, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box, Container, CssBaseline, Link, Typography, createTheme, ThemeProvider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/apple-touch-icon.png';
import html from '../assets/techstack/html.png';
import css from '../assets/techstack/css.png';
import js from '../assets/techstack/js.png';
import react from '../assets/techstack/react.png';
import tailwind from '../assets/techstack/tailwind.png';
import bootstrap from '../assets/techstack/bootstrap.png';
import vscode from '../assets/techstack/vscode.png';
import git from '../assets/techstack/git.png';
import github from '../assets/techstack/github.png';
import figma from '../assets/techstack/figma.png';
import npm from '../assets/techstack/npm.png';
import postman from '../assets/techstack/postman.png';
import androidstudios from '../assets/techstack/androidstudio.png';
import flutter from '../assets/techstack/flutter.png';import ts from '../assets/techstack/typescript.png';


const Tools = () => {
  const [mode, setMode] = useState(() => {
      return localStorage.getItem('mode') || 'light';
    });
  const [activeNav, setActiveNav] = useState('Tools');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
           background: { default: '#ffffff' },
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
    { label: "About", path: "/about" },
    { label: 'Contact Us', path: '/contactus' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters sx={{ mt: 2, mb: 4 }}>
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
        <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            //color="text.primary"
            color="primary"
          >
            Tech Stack
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Technologies I've been working with recently
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(6, 1fr)'
            }}
            gap={3}
            justifyItems="center"
            alignItems="center"
          >
            {[react ,flutter , js,ts, html,css, tailwind, bootstrap].map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                alt="Tech Icon"
                sx={{ width: 60, height: 60, objectFit: 'contain' }}
              />
            ))}
          </Box>

          {/* Tools */}
          <Typography
            variant="h4"
            fontWeight="bold"
            mt={8}
            mb={4}
            //color="text.primary"
            color='primary'
          >
            Tools
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(6, 1fr)'
            }}
            gap={4}
            justifyItems="center"
            alignItems="center"
          >
            {[vscode,androidstudios, git, github, figma, npm, postman].map((img, i) => (
              <Box
                key={i}
                component="img"
                src={img}
                alt="Tool Icon"
                sx={{ width: 60, height: 60, objectFit: 'contain' }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Tools;
