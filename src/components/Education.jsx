import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import PurdueLogo from '../assets/PurdueLogo.png';

const educationData = [
  {
    title: 'Master of Science in Computer Science',
    institution: 'Purdue University, West Lafayette, IN',
    period: 'Aug 2024 - May 2026',
    details: "Dean's and Semester Honors List across all completed semesters.",
    gpa: 'GPA: 3.77 / 4.00',
    highlights: ['Compilers', 'Deep Learning', 'Reinforcement Learning', 'Parallel Computing'],
    logo: PurdueLogo,
  },
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Purdue University, West Lafayette, IN',
    period: 'Aug 2021 - May 2025',
    details: "Dean's and Semester Honors List all semesters, plus 2x hackathon winner.",
    gpa: 'GPA: 3.87 / 4.00',
    highlights: ['Operating Systems', 'Computer Networks', 'Databases', 'Systems Programming'],
    logo: PurdueLogo,
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
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
          Education
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6, maxWidth: 720, mx: 'auto' }}>
          Purdue computer science degrees with coursework depth across systems, machine learning,
          databases, and parallel computing.
        </Typography>
        <Grid container spacing={4}>
          {educationData.map((edu, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3.5,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                  background: '#ffffff',
                  borderRadius: 4,
                  border: '1px solid rgba(16, 32, 51, 0.08)',
                  boxShadow: '0 24px 45px rgba(16, 32, 51, 0.08)',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    height: 72,
                    width: 72,
                    minWidth: 72,
                    overflow: 'hidden',
                    backgroundColor: '#f6efe6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                  }}
                >
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    style={{
                      maxHeight: '80%',
                      maxWidth: '80%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
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
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                    {edu.highlights.map((highlight) => (
                      <Chip
                        key={highlight}
                        label={highlight}
                        size="small"
                        sx={{
                          bgcolor: 'rgba(217, 119, 6, 0.08)',
                          color: '#9a580d',
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Stack>
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
