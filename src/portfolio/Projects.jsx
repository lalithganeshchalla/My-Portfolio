import React, { useMemo, useState } from 'react';
import { Card, Divider, IconButton , Grid, CardMedia, CardContent } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import TaskManager from '../assets/taskmanager.png';
// import PortfolioCover from '../assets/portfolio.png';
// import MasterCode from '../assets/mastercode.png';
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

const Projects = () => {
  const [mode, setMode] = useState('light');
  const [activeNav, setActiveNav] = useState('Projects');

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
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };
  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Resume', path: '/resume' },
    { label: 'Projects', path: '/projects' },
    { label: 'Tools', path: '/tools' },
    { label: "About", path: "/about" },
    { label: 'Contact Us', path: '/contactus' }
  ];
  const projects = [
  {
    title: 'Task Management App',
    description: 'A Task Management (To-Do) App ...',
    image: { src: '/assets/taskmanager.png', alt: 'Task Manager App' },
    link: 'https://task-manager-git-main-lalith-ganeshs-projects.vercel.app/'
  },
  {
    title: 'MasterCode',
    description: 'MasterCode is an education app ...',
    image: { src: '/assets/mastercode.png', alt: 'MasterCode App' },
    link: 'https://master-code-git-main-lalith-ganeshs-projects.vercel.app/'
  },
  {
    title: 'Portfolio',
    description: 'My Portfolio Website ...',
    image: { src: '/assets/portfolio.png', alt: 'Portfolio Cover' },
    link: 'https://rest-app-git-main-lalith-ganeshs-projects.vercel.app/'
  }
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
            <Typography variant="h4" component="h1" gutterBottom>
              Web Development Projects
              </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={6} 
            sx={{
              ":hover": {
                transform: 'scale(1.05)',
                transition: 'transform 0.3s ease-in-out',
              },
              width: '300px',

            }}
            >
              {project.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={project.image.src}
                  alt={project.image.alt}
                  sx={{":hover": {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  }}}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {project.description}
                </Typography>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>


          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
