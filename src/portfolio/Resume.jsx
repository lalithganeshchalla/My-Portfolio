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
  Grid,
  Snackbar,
  Alert
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logoImage from '../assets/apple-touch-icon.png';

const Resume = () => {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'light';
  });
  const [activeNav, setActiveNav] = useState('Resume');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

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
      title: "MasterCode – Hackathon Platform",
      desc: "Engineered a full-stack hackathon platform using MERN stack with real-time coding challenges and dynamic leaderboards. Implemented secure authentication for 200+ developers and facilitated 500+ code submissions.",
      url: "https://master-code-one.vercel.app",
    },
    {
      title: "Secure Personal Health Record System",
      desc: "Developed healthcare data management system using Ciphertext-Policy Attribute-Based Encryption (CP-ABE) to enforce fine-grained access control. Ensured HIPAA compliance through secure database architecture.",
    },
    {
      title: "AI PromptHub – Community Platform",
      desc: "Built responsive community-driven platform for discovering and sharing AI prompts. Increased user engagement by 40% through social features and curated library of 100+ prompts.",
      url: "https://generative-ai-prompts.vercel.app",
    },
    {
      title: "TaskFlow – Productivity Application",
      desc: "Developed intuitive task management app with drag-and-drop functionality. Improved user productivity by 30% through optimized UI and seamless task tracking.",
      url: "https://task-manager-three-gold.vercel.app",
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
      localStorage.setItem('mode', newMode);
      return newMode;
    });
  };

  // Updated download function with correct filename
  const handleDownloadPDF = () => {
    const pdfPath = '/LalithGaneshChalla.pdf';
    
    try {
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'Lalith Ganesh Challa Resume.pdf'; // This will be the downloaded filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setSnackbar({ open: true, message: 'Resume download started!', severity: 'success' });
    } catch (error) {
      console.error('Download failed:', error);
      setSnackbar({ 
        open: true, 
        message: 'Download failed. Please check if the file exists.', 
        severity: 'error' 
      });
    }
  };

  const handleViewPDF = () => {
    window.open('/LalithGaneshChalla.pdf', '_blank');
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
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
                    color: activeNav === item.label ? 'primary.main' : 'text.primary',
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

          <Box
            sx={{
              minHeight: "100vh",
              bgcolor: "background.default",
              p: { xs: 2, sm: 4 },
              pt: { xs: 6, sm: 8 },
              position: "relative",
              display: "flex",
              justifyContent: "center",
              overflowX: "hidden",
            }}
          >
            {/* Download Button - Updated with correct filename */}
            <Button
              variant="contained"
              onClick={handleDownloadPDF}
              sx={{
                position: { xs: "fixed", sm: "absolute" },
                bottom: { xs: 16, sm: "auto" },
                right: { xs: 16, sm: 30 },
                top: { sm: 10 },
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "primary.main",
                color: "#fff",
                px: { xs: 2, sm: 2.5 },
                py: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                "&:hover": { bgcolor: "primary.dark" },
                textTransform: 'none'
              }}
            >
              <img
                src="/assets/download.png"
                alt="Download"
                style={{ width: "20px", height: "20px" }}
              />
              <Box sx={{ display: { xs: "none", sm: "block" } }}>Download Resume</Box>
              <Box sx={{ display: { xs: "block", sm: "none" } }}>Download</Box>
            </Button>
            
            <Card
              sx={{
                width: "100%",
                maxWidth: "900px",
                p: { xs: 2.5, sm: 5 },
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                overflowWrap: "break-word"
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
                    Full-Stack Developer
                  </Typography>
                </Box>

                <Box sx={{ textAlign: { xs: "left", sm: "right" } }}>
                  <Typography variant="body2">📧 challalalithganesh@gmail.com</Typography>
                  <Typography variant="body2">📱 +91 9515394859</Typography>
                  <Typography variant="body2">
                    🔗{" "}
                    <Link
                      href="https://www.linkedin.com/in/challa-lalith-ganesh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>{" "}
                    •{" "}
                    <Link 
                      href="https://github.com/lalithganeshchalla" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>{" "}
                    •{" "}
                    <Link
                      href="https://lalithganeshchallaportfolio.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Professional Summary */}
              <Box sx={{ bgcolor: "background.default", p: 2.5, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Professional Summary
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Results-driven Full-Stack Developer skilled in Java, JavaScript, and .NET Core with proven experience building responsive web and mobile applications using React, Flutter, and Node.js. Demonstrated success in deploying scalable solutions serving 200+ users. Strong foundation in database management, REST API development, and agile methodologies. Seeking to deliver innovative, user-focused solutions in a collaborative team environment.
                </Typography>
              </Box>

              {/* Education & Certifications */}
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Education
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1" fontWeight="500">
                        Master of Computer Applications (MCA)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        D.N.R College of P.G. Course, Adikavi Nannaya University
                      </Typography>
                      <Typography variant="body2">
                        2022 - 2024 • CGPA: 8.33
                      </Typography>
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body1" fontWeight="500">
                        Bachelor of Computer Science
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sri YN College, Adikavi Nannaya University
                      </Typography>
                      <Typography variant="body2">
                        2019 - 2022 • CGPA: 6.77
                      </Typography>
                    </Box>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Certifications
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        • Accenture Developer Job Simulation — Forage | Dec 2023
                      </Typography>
                      <Typography variant="body2">
                        • Web Development Certificate — Devtown | Jun 2023
                      </Typography>
                      <Typography variant="body2">
                        • Git & GitHub — Coursera | Aug 2024
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              </Grid>

              {/* Technical Skills */}
              <Box sx={{ mt: 3, bgcolor: "background.default", p: 2.5, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Technical Skills
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2">
                      <strong>Programming Languages:</strong> Java, JavaScript, TypeScript, C# (.NET Core), Dart
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Frontend Technologies:</strong> React, Flutter, HTML5, CSS3, Bootstrap
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body2">
                      <strong>Backend Technologies:</strong> Node.js, Express.js, .NET Core, REST APIs
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Databases & Tools:</strong> MySQL, Firebase, MongoDB, Git, GitHub, Postman, Vercel
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Projects */}
              <Box sx={{ mt: 3, bgcolor: "background.default", p: 2.5, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="600" gutterBottom>
                  Projects
                </Typography>

                <Box sx={{ mt: 2 }}>
                  {projects.map((project) => (
                    <Card
                      key={project.title}
                      variant="outlined"
                      sx={{ p: 2.5, mb: 2, borderRadius: 2 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexDirection: { xs: "column", sm: "row" },
                          gap: 1
                        }}
                      >
                        <Typography variant="h6" fontWeight="500" sx={{ fontSize: '1.1rem' }}>
                          {project.title}
                        </Typography>
                        {project.url && (
                          <Button
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outlined"
                            size="small"
                            sx={{ borderRadius: 2 }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ mt: 1.5, color: "text.secondary", lineHeight: 1.6 }}
                      >
                        {project.desc}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Box>

              {/* Leadership & Footer */}
              <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
                      Leadership & Activities
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      <strong>Physics Cluster Team Lead:</strong> Organized study groups and academic support sessions for 30+ students, achieving 15% average grade improvement.
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
                      <strong>Community Engagement:</strong> Active participant in blood donation drives and institutional events.
                    </Typography>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card variant="outlined" sx={{ p: 2.5, borderRadius: 2 }}>
                    <Typography variant="h6" fontWeight="600" gutterBottom>
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
                          sx={{ mb: 0.5 }}
                        >
                          {strength}
                        </Typography>
                      ))}
                    </Box>
                  </Card>
                </Grid>
              </Grid>

              {/* Footer with updated download buttons */}
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}
              >
                <Typography variant="caption" color="text.secondary">
                  Last updated: {today}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleDownloadPDF}
                    sx={{ borderRadius: "20px" }}
                  >
                    Download PDF
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleViewPDF}
                    sx={{ borderRadius: "20px" }}
                  >
                    View PDF
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    href="mailto:challalalithganesh@gmail.com"
                    sx={{ borderRadius: "20px" }}
                  >
                    Contact Me
                  </Button>
                </Box>
              </Grid>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default Resume;