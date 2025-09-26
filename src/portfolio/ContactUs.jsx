import React, { useMemo, useState } from 'react';
import './Home.css';
import {Avatar, Box ,Card, Container, CssBaseline,Divider,Grid,IconButton,Link,Typography,createTheme,ThemeProvider} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link as RouterLink,
   //useNavigate 
  } from 'react-router-dom';
import profileImage from '../assets/my.jpg';
import logoImage from '../assets/apple-touch-icon.png';
import GitHub from '../assets/gif/GitHub.gif';
import LinkedIn from '../assets/gif/Linkedin.gif';
import phone from '../assets/gif/contact.gif';
import email from '../assets/gif/email.gif';
import MyForm from '../components/MyForm';

const ContactUs = () => {
  //const navigate = useNavigate();
  const [mode, setMode] = useState('light');
  const [activeNav, setActiveNav] = useState('Contact Us');

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
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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
                sx={{ width: 220, height: 220 }}
                
              />
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            {/* <Typography variant="h4" fontWeight="bold" gutterBottom>
              Building Scalable Web & Mobile Solutions
            </Typography> */}
            <Typography
              variant="h4"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              Get In Touch
            </Typography>

            <Typography variant="body1" color="text.secondary" mt={2}>
              I'm always open to new opportunities and collaborations.
            </Typography>

          <MyForm />  
          </Grid>
          <Grid item xs={12} md={2} textAlign="center">
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              My Contact Details 
            </Typography>
             <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, // responsive
        gap: 2,
      }}
    >
      <a href="mailto:your-email@gmail.com?subject=Portfolio%20Inquiry&body=Hi,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noopener noreferrer">
      <Card
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center", // ✅ vertically center
          gap: 2,
          width: 300,
          borderRadius: 20,
          boxShadow: '0 4px 8px rgba(0, 0, 0.1, 0.6)'
        }}
      >
        <img src={email} alt="Gmail" style={{ width: 40, height: 40 }} />
        <Typography variant="body1" color="text.secondary">
          myemail@gmail.com
        </Typography>
      </Card>
      </a>

      <Card
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: 300,
          borderRadius: 20,
          boxShadow: '0 4px 8px rgba(0, 0, 0.1, 0.6)'
        }}
      >
        <img src={phone} alt="Phone" style={{ width: 40, height: 40 }} />
        <Typography variant="body1" color="text.secondary">
          +91 9876543210
        </Typography>
      </Card>
        <a href="https://github.com/lalithganeshchalla" target="_blank" rel="noopener noreferrer">
      <Card
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: 300,
          borderRadius: 20,
          boxShadow: '0 4px 8px rgba(0, 0, 0.1, 0.6)'
        }}
      >
        <img src={GitHub} alt="GitHub" style={{ width: 40, height: 40 }} />
        <Typography variant="body1" color="text.secondary">
          GitHub
        </Typography>
      </Card>
        </a>
        <a href="https://www.linkedin.com/in/challa-lalith-ganesh" target="_blank" rel="noopener noreferrer">
      <Card
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: 300,
          borderRadius: 20,
          boxShadow: '0 4px 8px rgba(0, 0, 0.1, 0.6)'
        }}
      >
        <img src={LinkedIn} alt="LinkedIn" style={{ width: 40, height: 40 }} />
        <Typography variant="body1" color="text.secondary" fontWeight={200} >
          Linkedin
        </Typography>
      </Card>
      </a>
    </Box>
              </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;
