import React from 'react';
import { Box, Container, Typography, Stack, Paper, Grid, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CumminsLogo from '../assets/Cummins.png';
import TechMahindraLogo from '../assets/TechMahindra.png';
import ProvidenceLogo from '../assets/Providence.png';
import AUUGLogo from '../assets/AUUG.png';

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Cummins",
    period: "May 2024 - Present",
    points: [
      "Developed a robust engineer monitoring interface using Spring Boot, integrating 5 new features like real-time tracking.",
      "Reduced issue detection and resolution time by boosting system reliability and uptime.",
      "Deployed RAG and LlamaIndex-based chatbots for technician assistance, improving troubleshooting processes.",
    ],
    logo: CumminsLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "Tech Mahindra",
    period: "May 2023 - Aug 2023",
    points: [
      "Leveraged CODEBERT to consolidate and categorize similar functions within Nissan's automotive codebase.",
      "Increased developer productivity by 40% through semantic code search implementation.",
      "Constructed adaptable RAG-based chatbot, reducing search query resolution time by 25%.",
    ],
    logo: TechMahindraLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "Providence Global",
    period: "Jun 2022 - Aug 2022",
    points: [
      "Engineered web API using .Net Core for Azure cloud migration, reducing deployment time by 30%.",
      "Optimized SQL database through normalization and indexing, reducing query time from 30s to 4s.",
    ],
    logo: ProvidenceLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "AUUG",
    period: "May 2022 - Jun 2022",
    points: [
      "Spearheaded development of C# library for musical information streaming.",
      "Implemented O2 communication protocol for efficient data transmission.",
      "Achieved 15% latency reduction improving streaming service responsiveness.",
    ],
    logo: AUUGLogo,
  },
];

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
        color: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
          Experience
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}>
          Recent internships and engineering roles focused on ML systems, platform reliability, and
          applied product delivery.
        </Typography>
        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              sx={{
                p: 3.5,
                background: 'rgba(15, 23, 42, 0.7)',
                borderRadius: 3,
                border: '1px solid rgba(148, 163, 184, 0.2)',
                boxShadow: '0 24px 45px rgba(15, 23, 42, 0.4)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={2}>
                  <Avatar
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    sx={{
                      width: 72,
                      height: 72,
                      background: 'rgba(148, 163, 184, 0.2)',
                      border: '1px solid rgba(148, 163, 184, 0.35)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {exp.title}
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
                      <Typography variant="body1" sx={{ color: '#87cefa', fontWeight: 500 }}>
                        {exp.company}
                      </Typography>
                      <Chip
                        label={exp.period}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'rgba(148, 163, 184, 0.35)', color: '#e2e8f0' }}
                      />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {exp.points.map((point, i) => (
                  <Typography
                    component="li"
                    key={i}
                    sx={{
                      mb: 1,
                      color: '#f9fafb',
                      '&::marker': { color: '#1e90ff' },
                    }}
                  >
                    {point}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
