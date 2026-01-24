import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import PurdueLogo from '../assets/PurdueLogo.png'; // Import Purdue Logo

const educationData = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'Purdue University, West Lafayette, IN',
    period: 'Aug 2024 - May 2026',
    details: 'Specialization: Machine Intelligence, Systems Programming, Software Engineering',
    gpa: 'GPA: 3.77 / 4.00',
    logo: PurdueLogo, // Add Purdue logo for education
  },
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Purdue University, West Lafayette, IN',
    period: 'Aug 2021 - May 2025',
    details: 'Dean’s List (all semesters)',
    gpa: 'GPA: 3.87 / 4.00',
    logo: PurdueLogo,
  },
];

const relevantCoursework = [
  'Compilers',
  'Data Structures and Algorithms',
  'Data Mining and Machine Learning',
  'Intro to Artificial Intelligence',
  'Operating Systems',
  'Database Systems',
  'Reinforcement Learning',
  'Computer Vision',
  'Programming in C',
];

const certificationsData = [
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    date: 'Feb 2024',
  },
  {
    title: 'Convolutional Networks & Sequence Models',
    provider: 'Coursera',
    date: 'Feb 2024',
  },
];

const assistantshipData = [
  {
    title: 'Graduate Research Assistant',
    organization: 'Cummins (Machine Learning)',
  },
  {
    title: 'Teaching Assistant',
    organization: 'CS252 Systems Programming',
  },
];

const Education = () => {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="md">
        {/* Education Section */}
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
          Education
        </Typography>
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  background: '#ffffff',
                  borderRadius: 3,
                  border: '1px solid rgba(31, 41, 55, 0.08)',
                  boxShadow: '0 20px 40px rgba(31, 41, 55, 0.08)',
                }}
              >
                {/* Purdue Logo */}
                <Box
                  sx={{
                    height: 60, // Adjust as needed for logo dimensions
                    width: 100, // Adjust width for rectangular shape
                    overflow: 'hidden',
                    backgroundColor: '#f3f4f6', // Fallback color if image doesn't load
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                {/* Education Details */}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {edu.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {edu.period}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {edu.details}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {edu.gpa}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" sx={{ my: 6, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
          Relevant Coursework
        </Typography>
        <Grid container spacing={3}>
          {relevantCoursework.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: 'center',
                  background: '#ffffff',
                  borderRadius: 3,
                  border: '1px solid rgba(31, 41, 55, 0.08)',
                  boxShadow: '0 18px 32px rgba(31, 41, 55, 0.08)',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  {course}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Certifications Section */}
        <Typography variant="h3" sx={{ my: 6, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
          Certifications
        </Typography>
        <Grid container spacing={4}>
          {certificationsData.map((cert, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  background: '#ffffff',
                  borderRadius: 3,
                  border: '1px solid rgba(31, 41, 55, 0.08)',
                  boxShadow: '0 20px 40px rgba(31, 41, 55, 0.08)',
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {cert.provider}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {cert.date}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h3" sx={{ my: 6, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
          Teaching & Assistantship
        </Typography>
        <Grid container spacing={4}>
          {assistantshipData.map((role, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  background: '#ffffff',
                  borderRadius: 3,
                  border: '1px solid rgba(31, 41, 55, 0.08)',
                  boxShadow: '0 20px 40px rgba(31, 41, 55, 0.08)',
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {role.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {role.organization}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
