import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Stack, Chip, Avatar } from '@mui/material';
import { Link, Security, School, FitnessCenter, Hub } from '@mui/icons-material';

const projects = [
  {
    title: 'Soteria',
    description:
      'Soteria is a multi-platform mobile app designed to allow users to rate and review social hangouts based on perceived safety. It includes a heat map functionality to highlight unsafe zones and notify contacts in case of emergencies.',
    features: [
      'Integrated Google Maps API for real-time heat maps.',
      'Implemented SOS notifications to user contacts.',
      'Developed using Flutter and Firebase.',
    ],
    youtubeLink: 'https://www.youtube.com/watch?v=ZrEm0jis-AQ',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    logoIcon: Security,
    logoGradient: 'linear-gradient(135deg, #38bdf8, #7c3aed)',
  },
  {
    title: 'UniLeap',
    description:
      'UniLeap is a personalized mentoring platform designed to assist students with college applications and career guidance. It provides an AI-powered chatbot for seamless query resolution.',
    features: [
      'Co-founded platform for college application assistance.',
      'Built using Django and React.js.',
      'Implemented RAG-based LlamaIndex chatbot for personalized guidance.',
    ],
    tech: ['Django', 'React.js', 'AWS EC2', 'AWS Amplify', 'LlamaIndex'],
    logoIcon: School,
    logoGradient: 'linear-gradient(135deg, #22d3ee, #6366f1)',
  },
  {
    title: 'Fit Check',
    description: 'E-commerce platform with virtual try-on capabilities.',
    features: [
      'Aggregated apparel from 10+ leading brands.',
      'Integrated ML models for 40% improved cloth mapping accuracy.',
      'Full-cycle AI model training and web development.',
    ],
    tech: ['React', 'Python', 'Machine Learning', 'AWS'],
    logoIcon: FitnessCenter,
    logoGradient: 'linear-gradient(135deg, #f97316, #ec4899)',
  },
  {
    title: 'Agent Relay SDK',
    description:
      'Production observability SDK for tracing agent tool calls, resumable sessions, and LLM usage/spend tracking.',
    features: [
      'Automatic tracing of tool inputs/outputs with decorators.',
      'Resumable agent sessions with budget enforcement and run replay.',
      'LLM cost tracking with token usage and provider aggregation.',
      'Cloud-backed storage in MongoDB with export for offline debugging.',
    ],
    tech: ['Python', 'FastAPI', 'MongoDB', 'OpenAI', 'AWS'],
    websiteLink: 'https://agent-relay-website.vercel.app/',
    logoUrl: 'https://agent-relay-website.vercel.app/favicon.ico',
    logoIcon: Hub,
    logoGradient: 'linear-gradient(135deg, #34d399, #10b981)',
  },
];

const getInitials = (title) =>
  title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.9))',
        color: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Projects
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
            A selection of end-to-end systems that blend software engineering rigor with applied ML
            research, from multi-modal safety tooling to agent observability platforms.
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3.5,
                  background: 'rgba(15, 23, 42, 0.7)',
                  borderRadius: 3,
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  boxShadow: '0 28px 55px rgba(15, 23, 42, 0.45)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    src={project.logoUrl || undefined}
                    sx={{
                      width: 56,
                      height: 56,
                      fontWeight: 700,
                      background: project.logoGradient,
                      color: '#f8fafc',
                    }}
                  >
                    {project.logoIcon
                      ? React.createElement(project.logoIcon, { fontSize: 'small' })
                      : getInitials(project.title)}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {project.description}
                    </Typography>
                  </Box>
                </Stack>
                <Box component="ul" sx={{ pl: 3 }}>
                  {project.features.map((feature, i) => (
                    <Typography key={i} component="li" variant="body2" sx={{ opacity: 0.8 }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: 'rgba(148, 163, 184, 0.4)', color: '#e2e8f0' }}
                    />
                  ))}
                </Box>
                {/* Demo Links */}
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  {project.youtubeLink && (
                    <Button
                      variant="contained"
                      size="small"
                      href={project.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Link />}
                      sx={{
                        background: 'linear-gradient(90deg, #1e90ff, #4682b4)',
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': {
                          background: '#4682b4',
                        },
                      }}
                    >
                      Watch Demo
                    </Button>
                  )}
                  {project.websiteLink && (
                    <Button
                      variant="contained"
                      size="small"
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<Link />}
                      sx={{
                        background: 'linear-gradient(90deg, #1e90ff, #4682b4)',
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': {
                          background: '#4682b4',
                        },
                      }}
                    >
                      Visit Website
                    </Button>
                  )}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
