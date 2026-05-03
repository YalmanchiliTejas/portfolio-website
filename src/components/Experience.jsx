import React from 'react';
import { Box, Container, Typography, Stack, Paper, Grid, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CumminsLogo from '../assets/Cummins.png';
import TechMahindraLogo from '../assets/TechMahindra.png';
import ProvidenceLogo from '../assets/Providence.png';
import AUUGLogo from '../assets/AUUG.png';

const experiences = [
  {
    title: 'Graduate Research Assistant',
    company: 'Cummins',
    period: 'Aug 2025 - Present',
    points: [
      'Lead a collaborative Purdue Data Mine-Cummins project to build predictive-maintenance AI pipelines using Python and Docker on real equipment data, from feature engineering and model training to validation on real failure cases.',
      'Designed an AI-driven agent system leveraging predictive-maintenance model outputs to detect failures, map them to affected components, and trigger automated supplier part-ordering workflows ahead of warranty expiration, improving reliability and reducing at-risk warranty expirations to about 20%.',
    ],
    logo: CumminsLogo,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Cummins',
    period: 'May 2024 - Present',
    points: [
      'Developed a robust engineer monitoring interface using Spring Boot and Docker, deploying on Kubernetes and integrating five new features including real-time tracking to improve system reliability and uptime.',
      'Deployed RAG and LlamaIndex-based chatbots with Hugging Face for technician assistance, improving troubleshooting workflows through guided repair steps.',
    ],
    logo: CumminsLogo,
  },
  {
    title: 'Machine Learning Intern',
    company: 'Tech Mahindra',
    period: 'May 2023 - Aug 2023',
    points: [
      'Leveraged CODEBERT and PyTorch to consolidate and categorize similar functions within Nissan automotive codebases into clusters, increasing developer productivity by 40% through semantic code search across organized code groups.',
      'Constructed a highly adaptable chatbot using RAG and large language models to deliver context-aware enterprise search responses, reducing search query resolution time by 25%.',
    ],
    logo: TechMahindraLogo,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Providence Global',
    period: 'Jun 2022 - Aug 2022',
    points: [
      'Engineered a web API using .NET Core to facilitate seamless migration of keys and settings to Azure cloud and Azure App Configuration, achieving a 30% reduction in deployment time.',
      'Optimized a SQL database for client records by implementing normalization and indexing, reducing query time from 30 seconds to 4 seconds and improving overall performance.',
    ],
    logo: ProvidenceLogo,
  },
  {
    title: 'Software Engineer Intern',
    company: 'AUUG',
    period: 'May 2022 - Jun 2022',
    points: [
      'Developed a C# library with .NET that streamed musical information to multiple devices, expanding cross-platform availability.',
      'Harnessed the O2 communication protocol to ensure efficient data transmission and improve the user experience.',
      'Optimized application performance, resulting in a 15% reduction in latency and stronger streaming responsiveness.',
    ],
    logo: AUUGLogo,
  },
];

const Experience = () => {
  return (
    <Box
      component="section"
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
          Roles aligned with the current resume, spanning production software engineering, applied ML,
          and research-driven systems work.
        </Typography>
        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              key={index}
              sx={{
                p: 3.5,
                background: '#ffffff',
                borderRadius: 4,
                border: '1px solid rgba(16, 32, 51, 0.08)',
                boxShadow: '0 24px 45px rgba(16, 32, 51, 0.08)',
                '&:hover': {
                  transform: 'translateY(-6px)',
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
                      background: '#f6efe6',
                      border: '1px solid rgba(16, 32, 51, 0.08)',
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
                      <Typography variant="body1" sx={{ color: '#d97706', fontWeight: 600 }}>
                        {exp.company}
                      </Typography>
                      <Chip
                        label={exp.period}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: 'rgba(16, 32, 51, 0.2)', color: 'text.secondary' }}
                      />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <Box component="ul" sx={{ pl: 2.5, pt: 2, m: 0 }}>
                {exp.points.map((point, i) => (
                  <Typography
                    component="li"
                    key={i}
                    sx={{
                      mb: 1,
                      color: 'text.secondary',
                      '&::marker': { color: '#d97706' },
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
