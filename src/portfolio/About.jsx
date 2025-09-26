import React, { useMemo, useState } from "react";
import {
  Box,
  Chip,
  Container,
  CssBaseline,
  Divider,
  IconButton,
  Link,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link as RouterLink } from "react-router-dom";

import logoImage from "../assets/apple-touch-icon.png";

// Dummy data
const experiences = []; // 👈 empty for now
const education = [
  {
    title: "Master of Computer Applications",
    company: "D.N.R College of P.G. Course, Adikavi Nannaya University",
    location: "Bhimavaram, Andhra Pradesh",
    type: "Full Time",
    date: "2022 – 2024",
  },
  {
    title: "Bachelor of Computer Science",
    company: "Sri Yerramilli Narayana Murthy College, Adikavi Nannaya University",
    location: "Narsapuram, Andhra Pradesh",
    type: "Full Time",
    date: "2019 – 2022",

  },
];


const About = () => {
  const [mode, setMode] = useState(() => {
      return localStorage.getItem('mode') || 'light';
    });
  const [activeNav, setActiveNav] = useState("About");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: { default: "#f5f5f5" },
                text: { primary: "#000" },
              }
            : {
                background: { default: "#121212" },
                text: { primary: "#fff" },
              }),
        },
        typography: {
          fontFamily: "Arial, sans-serif",
        },
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

        {/* About Section */}
        <Container maxWidth="md" sx={{ py: 6 }}>
          <Box mb={6}>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              About Me
            </Typography>
            <Typography color="text.secondary">
              “I am a Junior Programmer with strong expertise in Java, JavaScript, DotNet, and Flutter, dedicated to developing efficient, scalable, and user-friendly web and mobile applications. I have successfully designed and implemented multiple projects, including secure personal health record systems and interactive coding platforms, demonstrating my ability to apply technical knowledge in real-world solutions. With a solid foundation in database management, networking, and modern development practices, I am driven by creativity, continuous learning, and problem-solving. I am passionate about building innovative applications that provide meaningful impact and enhance user experiences.”
            </Typography>
          </Box>

          {/* Work Experience */}
          <Box mb={6}>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Work Experience
            </Typography>
            {experiences.length === 0 ? (
              <Typography color="text.secondary">
                I don’t have professional experience yet, but I’m actively
                building projects and enhancing my skills.
              </Typography>
            ) : (
              experiences.map((exp, idx) => (
                <Box key={idx} mb={3}>
                  <Typography variant="h6" fontWeight="bold">
                    {exp.title}
                  </Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={1}
                    color="text.secondary"
                    fontSize="0.9rem"
                  >
                    <WorkIcon fontSize="small" />
                    {exp.company} &nbsp; | &nbsp;
                    <LocationOnIcon fontSize="small" />
                    {exp.location}
                  </Box>
                  <Box
                    mt={1}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Chip
                      label={exp.type}
                      color="success"
                      size="small"
                      sx={{ fontWeight: "bold" }}
                    />
                    <Typography color="text.secondary">{exp.date}</Typography>
                  </Box>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))
            )}
          </Box>

          {/* Education */}
          <Box mb={6}>
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Education
            </Typography>
            {education.map((edu, idx) => (
              <Box key={idx} mb={3}>
                <Typography variant="h6" fontWeight="bold">
                  {edu.title}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={1}
                  color="text.secondary"
                  fontSize="0.9rem"
                >
                  <SchoolIcon fontSize="small" />
                  {edu.company} &nbsp; | &nbsp;
                  <LocationOnIcon fontSize="small" />
                  {edu.location}
                </Box>
                <Box
                  mt={1}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Chip
                    label={edu.type}
                    color="success"
                    size="small"
                    sx={{ fontWeight: "bold" }}
                  />
                  <Typography color="text.secondary">{edu.date}</Typography>
                </Box>
                <Divider sx={{ mt: 2 }} />
              </Box>
            ))}
          </Box>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default About;
