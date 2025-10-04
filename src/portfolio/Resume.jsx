import React, { useMemo, useState } from 'react';
import { Divider, IconButton, Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './Home.css';
import {
  Box,
  Container,
  CssBaseline,
  Link,
  Typography,
  createTheme,
  ThemeProvider,
  Card,
  Grid
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/apple-touch-icon.png';

const Resume = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'light';
  });
  const [activeNav, setActiveNav] = useState('Resume');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          background: { default: '#ffffffff' },
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
      title: "Hidden Cipher-Text Policy Attribute Based Encryption with Personal Health Record System",
      desc:
        "Implemented a secure encryption model embedding access policies into medical data, ensuring confidentiality and compliance with privacy standards.",
    },
    {
      title: "MasterCode",
      desc:
        "Responsive hackathon platform with leaderboards, real-time coding challenges and modern UI.",
      url: "https://master-code-one.vercel.app",
    },
    {
      title: "Task Management App (To-Do App)",
      desc:
        "React.js web app with real-time task synchronization — improved task completion rate by 25%.",
      url: "https://task-manager-three-gold.vercel.app",
    },
    {
      title: "AI Prompts Website",
      desc:
        "ReactJS + NodeJS platform for discovering & sharing AI prompts; used by 200+ users.",
      url: "https://generative-ai-prompts.vercel.app",
    },
  ];
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleThemeToggle = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newMode);   // persist
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters sx={{ mt: 2, mb: 4 }}>
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
        <Box mt={4} flexWrap="wrap" sx={{ mr: 4, ml: 4 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            My Resume
          </Typography>
          {/* <iframe
            src="/resume1.pdf"
            title="Resume"
            width="100%"
            height="800px"
            style={{ border: 'none' }}
          /> */}



          <Box
            sx={{
              minHeight: "100vh",
              bgcolor: "#f9fafb",
              p: {xs: 2, sm: 4},
              pt: {xs:6,sm: 8},
              position: "relative",
              display: "flex",
              justifyContent: "center",
              overflowX: "hidden",
            }}
           >
            <Link
              href="/resume1.pdf"
              download
              underline="none"
              sx={{
      position: { xs: "fixed", sm: "absolute" },
      bottom: { xs: 16, sm: "auto" },
      right: { xs: 16, sm: 30 },
      top: { sm: 10 },
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      gap: 1,
      bgcolor: "#1976d2",
      color: "#fff",
      px: { xs: 2, sm: 2.5 },
      py: 1,
      borderRadius: 2,
      textDecoration: "none",
      fontSize: "0.875rem",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      "&:hover": { bgcolor: "#1565c0" },
    }}
            >
              <img
                src="/assets/download.png"
                alt="Download"
                style={{ width: "25px", height: "25px" }}
              />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>Download Resume</Box>
            </Link>
            <Card
              sx={{
                width: "100%",
                maxWidth: "900px",
                p: { xs: 2.5, sm: 5 },
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                // position: "relative",
                overflowWrap:"break-word"
              }}
            >


              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "flex-start", sm: "center" },
                  gap: 2,
                }}
              >
                <Box>
                  <Typography variant="h4" fontWeight="bold"
                     sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                  >
                    Lalith Ganesh Challa
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Junior Programmer • Software Developer / Full Stack Engineer
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2">📧 challalalithganesh@gmail.com</Typography>
                  <Typography variant="body2">📱 +91 9515394859</Typography>
                  <Typography variant="body2">
                    🔗{" "}
                    <Link
                      href="https://www.linkedin.com/in/challa-lalith-ganesh/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>{" "}
                    •{" "}
                    <Link href="https://github.com/lalithganeshchalla" target="_blank">
                      GitHub
                    </Link>{" "}
                    •{" "}
                    <Link
                      href="https://lalithganeshchallaportfolio.vercel.app/"
                      target="_blank"
                    >
                      Portfolio
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Profile */}
              <Box sx={{ bgcolor: "#f9fafb", p: 2.5, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="600">
                  Profile
                </Typography>
                <Typography variant="body2" sx={{ mt: 1.5, color: "text.secondary" }}>
                  Passionate and detail-oriented Junior Programmer skilled in Java,
                  JavaScript, .NET Core, and Flutter. Experienced in developing
                  full-stack applications with modern frameworks and database
                  management. Proven ability to deliver responsive, user-focused
                  solutions with strong problem-solving and debugging skills. Seeking
                  opportunities as a Software Developer / Full Stack Engineer to
                  contribute innovative solutions.
                </Typography>
              </Box>

              {/* Education & Certifications */}
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography fontWeight="600">Education</Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" fontWeight="500">
                        Master of Computer Applications (MCA)
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        D.N.R College of P.G. Course, Adikavi Nannaya University —
                        Bhimavaram, AP
                      </Typography>
                      <Typography variant="caption" display="block">
                        2022 - 2024 • CGPA: 8.33
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" fontWeight="500">
                        Bachelor of Computer Science
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Sri YN College, Adikavi Nannaya University — Narsapuram, AP
                      </Typography>
                      <Typography variant="caption" display="block">
                        2019 - 2022 • CGPA: 6.77
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography fontWeight="600">Certifications</Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">
                       • Accenture Developer Job Simulation — Forage (2023)
                      </Typography>
                      <Typography variant="body2">
                       • Web Development Certificate — Devtown (2022)
                      </Typography>
                      <Typography variant="body2">
                       • Git & GitHub — Coursera (2023)
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>

              {/* Projects */}
              <Box sx={{ mt: 3, bgcolor: "#f9fafb", p: 2.5, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="600">
                  Projects
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {projects.map((p) => (
                    <Card
                      key={p.title}
                      variant="outlined"
                      sx={{ p: 2, mb: 2, borderRadius: 2 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography fontWeight="500">{p.title}</Typography>
                        {p.url && (
                          <Link
                            href={p.url}
                            target="_blank"
                            variant="caption"
                            underline="hover"
                          >
                            Live
                          </Link>
                        )}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1, color: "text.secondary" }}
                      >
                        {p.desc}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Box>

              {/* Skills + Volunteer */}
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography fontWeight="600">Technical Skills</Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        <strong>Programming:</strong> Java, JavaScript, TypeScript,
                        .NET Core
                      </Typography>
                      <Typography variant="body2">
                        <strong>Frameworks & Tools:</strong> Flutter, ReactJS,
                        ExpressJS, Git/GitHub
                      </Typography>
                      <Typography variant="body2">
                        <strong>Databases:</strong> MySQL, MongoDB
                      </Typography>
                      <Typography variant="body2">
                        <strong>Other:</strong> REST APIs, Agile Development,
                        Debugging, Communication
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography fontWeight="600">Volunteer & Leadership</Typography>
                    <Typography
                      variant="body2"
                      sx={{ mt: 1.5, color: "text.secondary" }}
                    >
                      <strong>Team Lead</strong> — Physics Cluster: Organized study
                      groups and academic sessions. Active participant in blood
                      donation drives, cultural fests, and community events.
                    </Typography>
                  </Card>
                </Grid>
              </Grid>

              {/* Strengths */}
              <Box sx={{ mt: 3, bgcolor: "#f9fafb", p: 2.5, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="600">
                  Strengths
                </Typography>
                <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                  {[
                    "Problem-Solving & Debugging",
                    "Collaboration in Agile Teams",
                    "Adaptability & Quick Learning",
                    "Creative Solution Design",
                  ].map((strength) => (
                    <Typography
                      component="li"
                      key={strength}
                      variant="body2"
                      color="text.secondary"
                    >
                      {strength}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Footer */}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 3 }}
              >
                <Typography variant="caption" color="text.secondary">
                  Last updated: {today}
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/resume1.pdf"
                    download
                    sx={{ borderRadius: "20px" }}
                  >
                    Save PDF
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=challalalithganesh@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: "20px" }}
                  >
                    Contact
                  </Button>

                </Box>
              </Grid>
            </Card>
          </Box>

        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
