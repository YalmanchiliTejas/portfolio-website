import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import PurdueLogo from '../assets/PurdueLogo.png'; // Import Purdue Logo

const educationData = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'Purdue University, West Lafayette, IN',
    period: 'Aug 2024 - Dec 2025',
    details: 'Specialization: Machine Intelligence, Systems Programming, Software Engineering',
    gpa: 'GPA: 3.91 / 4.00',
    logo: PurdueLogo, // Add Purdue logo for education
  },
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Purdue University, West Lafayette, IN',
    period: 'Aug 2021 - May 2025',
    details: 'Dean’s List (all semesters)',
    gpa: 'GPA: 3.91 / 4.00',
    logo: PurdueLogo, // Reuse Purdue logo for bachelor's degree
  },
];

const certificationsData = [
  {
    title: 'Deep Learning Specialization',
    provider: 'Coursera',
    date: 'Feb 2024',
  },
  {
    title: 'Convolutional Networks and Sequence Models',
    provider: 'Coursera',
    date: 'Feb 2024',
  },
];

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1f2937, #0f172a)',
        color: '#f9fafb',
      }}
    >
      <Container maxWidth="md">
        {/* Education Section */}
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                }}
              >
                {/* Purdue Logo */}
                <Box
                  sx={{
                    height: 60, // Adjust as needed for logo dimensions
                    width: 100, // Adjust width for rectangular shape
                    overflow: 'hidden',
                    backgroundColor: '#fff', // Fallback color if image doesn't load
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
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {edu.period}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {edu.details}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {edu.gpa}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Certifications Section */}
        <Typography variant="h3" sx={{ my: 6, fontWeight: 700, textAlign: 'center' }}>
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {cert.provider}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {cert.date}
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
