// src/App.js
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './styles/main.scss';
import Education from './components/Education';
import Papers from './components/Papers';

const canvasTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#12324a',
    },
    secondary: {
      main: '#b76e2b',
    },
    background: {
      default: '#f6f1e8',
      paper: '#ffffff',
    },
    text: {
      primary: '#142738',
      secondary: '#62707d',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Manrope", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.75rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '2rem',
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

function App() {
  return (
    <ThemeProvider theme={canvasTheme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Papers />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
