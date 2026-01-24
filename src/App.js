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
      main: '#2f5d62',
    },
    secondary: {
      main: '#5b7cfa',
    },
    background: {
      default: '#f7f5f0',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: '"Manrope", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
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
        <Projects />
        <Papers />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
