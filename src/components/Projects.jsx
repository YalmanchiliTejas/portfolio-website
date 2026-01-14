import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Link } from '@mui/icons-material';

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
  },
  {
  title: 'Agent Relay SDK',
  description: 'Production observability SDK for tracing agent tool calls, resumable sessions, and LLM usage/spend tracking.',
  features: [
    'Automatic tracing of tool inputs/outputs with decorators.',
    'Resumable agent sessions with budget enforcement and run replay.',
    'LLM cost tracking with token usage and provider aggregation.',
    'Cloud-backed storage in MongoDB with export for offline debugging.',
  ],
  tech: ['Python', 'FastAPI', 'MongoDB', 'OpenAI', 'AWS'],
  websiteLink: 'https://agent-relay-website.vercel.app/',
}
];

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1f2937, #0f172a)',
        color: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 6, fontWeight: 700, textAlign: 'center' }}>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 3,
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  {project.description}
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  {project.features.map((feature, i) => (
                    <Typography key={i} component="li" variant="body2" sx={{ opacity: 0.8 }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {project.tech.map((tech, i) => (
                    <Button
                      key={i}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: '#1e90ff',
                        color: '#1e90ff',
                        textTransform: 'none',
                        fontSize: '0.8rem',
                        '&:hover': {
                          background: 'rgba(30, 144, 255, 0.1)',
                        },
                      }}
                    >
                      {tech}
                    </Button>
                  ))}
                </Box>
                {/* Demo Links */}
                {project.youtubeLink && (
                  <Button
                    variant="contained"
                    size="small"
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Link />}
                    sx={{
                      mt: 2,
                      background: 'linear-gradient(90deg, #1e90ff, #4682b4)',
                      color: '#fff',
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
                      mt: 2,
                      background: 'linear-gradient(90deg, #1e90ff, #4682b4)',
                      color: '#fff',
                      '&:hover': {
                        background: '#4682b4',
                      },
                    }}
                  >
                    Visit Website
                  </Button>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
