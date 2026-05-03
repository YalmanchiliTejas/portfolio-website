import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const skillCategories = {
  'Programming Languages': [
    'Java', 'Go', 'Rust', 'Python', 'C/C++', 'C#', 'ARM Assembly', 'HTML', 'CSS',
    'JavaScript', 'SQL', 'CUDA', 'TypeScript', 'GraphQL',
  ],
  'Frameworks & Libraries': [
    'ASP.NET', 'Spring Boot', 'Flask', 'React', 'Flutter', 'NumPy',
    'Pandas', 'PyTorch', 'TensorFlow', 'Xcode',
  ],
  'Tools & Technologies': [
    'Azure', 'AWS', 'Hugging Face', 'GitHub', 'DagsHub', 'Linux', 'Kubernetes', 'Docker',
  ],
};

const relevantCoursework = [
  'Compilers',
  'Data Structures and Algorithms',
  'Data Mining and Machine Learning',
  'Introduction to Artificial Intelligence',
  'Operating Systems',
  'Database Systems',
  'Reinforcement Learning',
  'Computer Vision Programming',
  'Parallel Computing',
  'Deep Learning',
  'Computer Networks',
  'Systems Programming',
];

const highlights = [
  "Dean's and Semester Honors List throughout both Purdue degrees",
  '2x hackathon winner during B.S. in Computer Science',
  'Graduate Research Assistant on the Purdue Data Mine x Cummins project',
];

const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 2, color: 'text.primary', textAlign: 'center', fontWeight: 700 }}>
          Skills, Coursework & Highlights
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 760, mx: 'auto', mb: 6 }}
        >
          Updated from the local resume PDF with a cleaner, more proportional layout for the skills,
          coursework, and academic summary areas.
        </Typography>
        <Grid container spacing={4}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Grid item xs={12} md={4} key={category}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  p: 3.25,
                  bgcolor: '#ffffff',
                  borderRadius: 4,
                  minHeight: 320,
                  border: '1px solid rgba(16, 32, 51, 0.08)',
                  boxShadow: '0 24px 45px rgba(16, 32, 51, 0.08)',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}>
                  {category}
                </Typography>
                <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor: 'rgba(99, 102, 241, 0.06)',
                        color: 'text.primary',
                        border: '1px solid rgba(99, 102, 241, 0.08)',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3.25,
                bgcolor: '#ffffff',
                borderRadius: 4,
                minHeight: 320,
                border: '1px solid rgba(16, 32, 51, 0.08)',
                boxShadow: '0 24px 45px rgba(16, 32, 51, 0.08)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Relevant Coursework
              </Typography>
              <Grid container spacing={1.5}>
                {relevantCoursework.map((course) => (
                  <Grid item xs={12} sm={6} key={course}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        background: 'rgba(99, 102, 241, 0.07)',
                        border: '1px solid rgba(99, 102, 241, 0.12)',
                        height: '100%',
                      }}
                    >
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                        {course}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3.25,
                bgcolor: '#ffffff',
                borderRadius: 4,
                minHeight: 320,
                border: '1px solid rgba(16, 32, 51, 0.08)',
                boxShadow: '0 24px 45px rgba(16, 32, 51, 0.08)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Academic Highlights
              </Typography>
              <Stack spacing={1.5}>
                {highlights.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.06), rgba(31, 41, 55, 0.04))',
                      border: '1px solid rgba(16, 32, 51, 0.08)',
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
                <Typography variant="body2" sx={{ color: 'text.secondary', pt: 0.5 }}>
                  The resume PDF in this repo does not list standalone certifications, so this area
                  now reflects only resume-supported academic and honors content.
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
