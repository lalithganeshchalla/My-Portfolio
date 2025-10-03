import React, { useMemo, useState } from 'react';
import { Divider, IconButton, Button} from '@mui/material';
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
  ThemeProvider
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
        "Flutter + Firebase app with real-time sync — improved task completion rate by 25%.",
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
  
 

    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 print:shadow-none print:rounded-none relative">
        {/* Download button at top right */}
        <Link
          href="/resume1.pdf"
          download
          className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg shadow hover:bg-blue-700"
        >
          ⬇️ Download Resume
        </Link>

        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold">Lalith Ganesh Challa</h1>
            <p className="mt-1 text-sm text-gray-600">Junior Programmer • Software Developer / Full Stack Engineer</p>
          </div>

          <div className="text-sm text-gray-700 space-y-1">
            <div>📧 challalalithganesh@gmail.com</div>
            <div>📱 +91 9515394859</div>
            <div>
              🔗 <a className="underline" href="https://www.linkedin.com/in/challa-lalith-ganesh/" target="_blank" rel="noreferrer">LinkedIn</a> •{' '}
              <a className="underline" href="https://github.com/lalithganeshchalla" target="_blank" rel="noreferrer">GitHub</a> •{' '}
              <a className="underline" href="https://lalithganeshchallaportfolio.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
            </div>
          </div>
        </header>

        <main className="mt-6 grid grid-cols-1 gap-6">
          {/* Profile */}
          <section className="bg-gray-50 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">Profile</h2>
            <p className="mt-2 text-sm text-gray-700">
              Passionate and detail-oriented Junior Programmer skilled in Java, JavaScript, .NET Core, and
              Flutter. Experienced in developing full-stack applications with modern frameworks and database
              management. Proven ability to deliver responsive, user-focused solutions with strong problem-solving
              and debugging skills. Seeking opportunities as a Software Developer / Full Stack Engineer to
              contribute innovative solutions.
            </p>
          </section>

          {/* Education + Certifications */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white border">
              <h3 className="font-semibold">Education</h3>
              <div className="mt-3 text-sm text-gray-700 space-y-3">
                <div>
                  <div className="font-medium">Master of Computer Applications (MCA)</div>
                  <div className="text-gray-600 text-xs">D.N.R College of P.G. Course, Adikavi Nannaya University — Bhimavaram, AP</div>
                  <div className="text-xs">2022 - 2024 • CGPA: 8.33</div>
                </div>

                <div>
                  <div className="font-medium">Bachelor of Computer Science</div>
                  <div className="text-gray-600 text-xs">Sri YN College, Adikavi Nannaya University — Narsapuram, AP</div>
                  <div className="text-xs">2019 - 2022 • CGPA: 6.77</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border">
              <h3 className="font-semibold">Certifications</h3>
              <ul className="mt-3 text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Accenture Developer Job Simulation — Forage (2023)</li>
                <li>Web Development Certificate — Devtown (2022)</li>
                <li>Git & GitHub — Coursera (2023)</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold">Projects</h3>
            <div className="mt-3 space-y-4">
              {projects.map((p) => (
                <div key={p.title} className="p-3 bg-white border rounded-lg">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">{p.title}</h4>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" className="text-xs underline">
                        Live
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills + Tools */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white border">
              <h3 className="font-semibold">Technical Skills</h3>
              <div className="mt-3 text-sm text-gray-700 space-y-2">
                <div>
                  <strong>Programming:</strong> Java, JavaScript, TypeScript, .NET Core
                </div>
                <div>
                  <strong>Frameworks & Tools:</strong> Flutter, ReactJS, ExpressJS, Git/GitHub
                </div>
                <div>
                  <strong>Databases:</strong> MySQL, Firebase, MongoDB
                </div>
                <div>
                  <strong>Other:</strong> REST APIs, Agile Development, Debugging, Communication
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border">
              <h3 className="font-semibold">Volunteer & Leadership</h3>
              <p className="mt-3 text-sm text-gray-700">
                <strong>Team Lead</strong> — Physics Cluster (Bachelor’s Final Semester): Organized study groups and
                academic support sessions. <br />
                Active participation in blood donation drives, cultural fests, and community events.
              </p>
            </div>
          </section>

          {/* Strengths */}
          <section className="p-4 rounded-lg bg-gray-50">
            <h3 className="font-semibold">Strengths</h3>
            <ul className="mt-3 text-sm text-gray-700 list-disc list-inside">
              <li>Problem-Solving & Debugging</li>
              <li>Collaboration in Agile Teams</li>
              <li>Adaptability & Quick Learning</li>
              <li>Creative Solution Design</li>
            </ul>
          </section>

          {/* Footer / Actions */}
          <section className="flex flex-col sm:flex-row gap-3 justify-between items-center">
            <div className="text-xs text-gray-600">Last updated: {today}</div>
            <div className="flex gap-2">
              <Button
              variant='contained'
              sx={{borderRadius:'20px'}}
                // onClick={() => window.print()}
                href='/resume1.pdf'
                download
                className="px-4 py-2 rounded-lg border text-sm hover:shadow"
              >
                Save PDF
              </Button><br></br>
              <a
                href="mailto:challalalithganesh@gmail.com"
                className="px-4 py-2 rounded-lg border text-sm hover:shadow inline-block"
              >
                Contact
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>

        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Resume;
