import React from 'react';
import { Box, Container, Typography, Stack, Paper, Grid, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CumminsLogo from '../assets/Cummins.png';
import TechMahindraLogo from '../assets/TechMahindra.png';
import ProvidenceLogo from '../assets/Providence.png';
import AUUGLogo from '../assets/AUUG.png';

const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "Cummins",
    period: "Aug 2025 – Present",
    points: [
      "Lead a collaborative Purdue Data Mine–Cummins project to build predictive-maintenance AI pipelines on real equipment data, from feature engineering and model training to validation on real failure cases.",
      "Make models production-ready by profiling data pipelines and tuning training/inference configurations on Linux and GPU-backed environments to improve reliability and time-to-insight.",
    ],
    logo: CumminsLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "Cummins",
    period: "May 2024 - Present",
    points: [
      "Developed a robust engineer monitoring interface using Spring Boot, integrating 5 new features like real-time tracking; reduced issue detection and resolution time by boosting system reliability and uptime.",
      "Deployed RAG and LlamaIndex-based chatbots for technician assistance, improving troubleshooting processes through guided repair steps.",
    ],
    logo: CumminsLogo,
  },
  {
    title: "Machine Learning Intern",
    company: "Tech Mahindra",
    period: "May 2023 - Aug 2023",
    points: [
      "Leveraged CODEBERT to consolidate and categorize similar functions within Nissan’s automotive codebase into clusters, increasing overall developer productivity by 40% by developing a semantic code search to navigate through organized code clusters.",
      "Constructed a highly adaptable chatbot using RAG, enabling effortless customization for enterprise search by empowering the chatbot to deliver context-aware responses, reducing search query resolution time by 25%.",
    ],
    logo: TechMahindraLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "Providence Global",
    period: "Jun 2022 - Aug 2022",
    points: [
      "Engineered a web API using .Net Core to facilitate seamless migration of keys and settings to Azure cloud and Azure App Configuration, achieving a 30% reduction in deployment time through this strategic migration.",
      "Optimized SQL database for client records by implementing data normalization and indexing, reducing query time from 30 sec to 4 sec and improving overall database performance.",
    ],
    logo: ProvidenceLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "AUUG",
    period: "May 2022 - Jun 2022",
    points: [
      "Spearheaded the development of a C# library to enable seamless streaming of musical information across different devices.",
      "Harnessed the O2 communication protocol, ensuring efficient data transmission and enhancing user experience.",
      "Optimized application performance, resulting in a 15% reduction in latency and improved streaming responsiveness.",
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
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, textAlign: 'center', color: 'text.primary' }}>
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
                background: '#ffffff',
                borderRadius: 4,
                border: '1px solid rgba(31, 41, 55, 0.08)',
                boxShadow: '0 24px 45px rgba(31, 41, 55, 0.08)',
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
                      background: '#f3f4f6',
                      border: '1px solid rgba(31, 41, 55, 0.08)',
                      '& img': {
                        objectFit: 'contain',
                        width: '80%',
                        height: '80%',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <Stack spacing={1}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {exp.title}
                    </Typography>
                    <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
                      <Typography variant="body1" sx={{ color: '#5b7cfa', fontWeight: 500 }}>
                        {exp.company}
                      </Typography>
                      <Chip
                        label={exp.period}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'rgba(31, 41, 55, 0.2)', color: 'text.secondary' }}
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
                      color: 'text.secondary',
                      '&::marker': { color: '#5b7cfa' },
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
