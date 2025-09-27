// import React, { useMemo, useState } from 'react';
// import './Home.css';
// import { Divider, IconButton } from '@mui/material';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import {
//   Avatar,
//   Box,
//   Button,
//   Container,
//   CssBaseline,
//   Card,
//   Grid,
//   Link,
//   // Switch,
//   Typography,
//   createTheme,
//   ThemeProvider
// } from '@mui/material';
// import profileImage from '../assets/my.jpg';
// import GoogleSvg from '../assets/google.svg';
// import GitHubSvg from '../assets/github.svg';
// import LinkedInSvg from '../assets/linkedin.svg';
// import { Link as RouterLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import logoImage from '../assets/apple-touch-icon.png';

// const Home = () => {
//   const navigate = useNavigate();
//   const [mode, setMode] = useState('light');
//   const [activeNav, setActiveNav] = useState('Home');

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//           ...(mode === 'light'
//             ? {
//               background: { default: '#f5f5f5' },
//               text: { primary: '#000' }
//             }
//             : {
//               background: { default: '#121212' },
//               text: { primary: '#fff' }
//             })
//         },
//         typography: {
//           fontFamily: 'Arial, sans-serif'
//         }
//       }),
//     [mode]
//   );

//   const handleThemeToggle = () => {
//     setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//   };
//   const navLinks = [
//     { label: 'Home', path: '/home' },
//     { label: 'Resume', path: '/resume' },
//     { label: 'Projects', path: '/projects' },
//     { label: 'Tools', path: '/tools' },
//     { label: 'Contact Us', path: '/contactus' }
//   ];

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Container maxWidth="xl" disableGutters sx={{ mt: 2, mb: 2 }}>
//         {/* Header */}
//         <Box
//           display="flex"
//           flexDirection={{ xs: 'column', sm: 'row' }}
//           justifyContent="space-between"
//           alignItems="center"
//           gap={2}
//           mb={2}
//         >
//           <Box display="flex" alignItems="center" gap={2} sx={{ ml: 2 }} >
//             <img src={logoImage} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
//             <Typography variant="h6">Lalith Ganesh Challa</Typography>
//             <Typography variant="body2" color="text.secondary">
//               Frontend Developer
//             </Typography>
//           </Box>
//           <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
//             {navLinks.map((item, index) => (
//               <React.Fragment key={item.label}>
//                 {index !== 0 && <Typography color="text.secondary">|</Typography>}
//                 <Link
//                   component={RouterLink}
//                   to={item.path}
//                   underline="none"
//                   onClick={() => setActiveNav(item.lable)}
//                   sx={{
//                     color: activeNav === item.label ? 'primary.main' : 'text.primary',
//                     position: 'relative',
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       width: activeNav === item.label ? '50%' : '0%',
//                       height: '2px',
//                       bottom: 0,
//                       left: '50%',
//                       backgroundColor: 'primary.main',
//                       transition: 'all 0.3s ease-out',
//                       transform: 'translateX(-50%)',
//                     },
//                     '&:hover::after': {
//                       width: '50%', // Adjust width to your liking
//                     },
//                   }}
//                 >
//                   {item.label}
//                 </Link>
//               </React.Fragment>
//             ))}
//             {/* <Switch
//     checked={mode === 'dark'}
//     onChange={handleThemeToggle}
//     inputProps={{ 'aria-label': 'theme toggle' }}
//   /> */}
//             <IconButton onClick={handleThemeToggle} color="inherit" aria-label="Toggle theme" sx={{ mr: 2 }}>
//               {mode === 'dark' ? (
//                 <DarkModeIcon sx={{ color: '#fff' }} /> // Yellow moon in dark mode
//               ) : (
//                 <LightModeIcon sx={{ color: '#FFC107' }} /> // Blue sun in light mode
//               )}
//             </IconButton>
//           </Box>
//         </Box>
//         <Divider />

//         {/* Main Section */}
//         <Grid container spacing={4} alignItems="center" justifyContent="center" textAlign="center" my={5}>
//           <Grid item xs={12} md={4}>
//             <Avatar
//               src={profileImage}
//               alt="Lalith Ganesh"
//               sx={{ width: 250, height: 250, mx: 'auto' }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h5" fontWeight="bold">
//               Lalith Ganesh Challa
//             </Typography>
//             <Typography variant="h6" fontWeight="bold" mt={1}>
//               A bit about me
//             </Typography>
//             <Box maxWidth="sm" mx="auto" mt={1}>
//               <Typography variant="body1" color="text.secondary">
//                 I am a passionate frontend developer with a keen interest in creating intuitive and dynamic user interfaces.
//               </Typography>
//               <Typography variant="body1" color="text.secondary" mt={2}>
//                 I love exploring new technologies and continuously improving my skills to deliver the best user experience.
//               </Typography>
//               <Box mt={2} display="flex" justifyContent="center" gap={2}>
//                 <Card sx={{ mt: 2, p: 2, backgroundColor: 'background.default', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ':hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
//                   <Link
//                     href="https://mail.google.com/mail/u/0/#inbox?compose=new"
//                     target="_blank"
//                     rel="noopener noreferrer">
//                     <img src={GoogleSvg} alt="Gmail Icon" style={{ width: '30px', verticalAlign: 'middle' }} />
//                   </Link>
//                 </Card>
//                 <Card sx={{ mt: 2, p: 2, backgroundColor: 'background.default', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ':hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
//                   <Link
//                     href="https://github.com/lalithganeshchalla"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img src={GitHubSvg} alt="GitHub Icon" style={{ width: '30px', verticalAlign: 'middle' }} />
//                   </Link>
//                 </Card>
//                 <Card sx={{ mt: 2, p: 2, backgroundColor: 'background.default', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ':hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
//                   <Link
//                     href="https://www.linkedin.com/in/challa-lalith-ganesh"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <img src={LinkedInSvg} alt="LinkedIn Icon" style={{ width: '30px', verticalAlign: 'middle' }} />
//                   </Link>
//                 </Card>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Action Buttons */}
//         <Box mt={4}>
//           <Grid container justifyContent="center" spacing={3}>
//             {[
//               { label: 'Resume', color: '#b1f740', path: '/resume' },
//               { label: 'Projects', color: '#f2a024', path: '/projects' },
//               { label: 'Tools', color: '#24f2c2', path: '/tools' },
//               { label: 'ContactUs', color: '#b3bab8', path: '/contactus' },
//             ].map((item, idx) => (
//               <Grid item key={idx}>
//                 <Button
//                   variant="contained"
//                   onClick={() => navigate(item.path)}
//                   sx={{
//                     bgcolor: item.color,
//                     color: '#000',
//                     borderRadius: '50%',
//                     width: 80,
//                     height: 80,
//                     fontWeight: 'bold',
//                     textTransform: 'none',
//                     ':hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }
//                   }}
//                 >
//                   {item.label}
//                 </Button>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default Home;
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

// tech icons (replace with your actual assets)
// import FlutterGif from '../assets/Flutter.gif';
// import ReactGif from '../assets/React.gif';
// import RubySvg from '../assets/ruby.svg';
// import JavaSvg from '../assets/java.svg';
// import DotNetSvg from '../assets/dotnet.svg';
// import LinkedInSvg from '../assets/linkedin.svg';
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
