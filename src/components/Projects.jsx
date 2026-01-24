import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button, Stack, Chip, Avatar } from '@mui/material';
import { Link, FitnessCenter, Hub, Security, School } from '@mui/icons-material';
import agentTrailLogo from '../assets/agentTrailLogo.png';
const projects = [
  {
    title: 'AgentTrail',
    description:
      'Transaction-aware agent runtime library and monitoring platform for reproducible, observable AI deployments.',
    features: [
      'Built and deployed a runtime library that tracks forward and compensation steps with structured run logging and API keys.',
      'Developed a production web platform using React, FastAPI, and AWS (S3, CloudFront, Elastic Beanstalk) for real-time dashboards and OAuth-secured access.',
    ],
    tech: ['React', 'FastAPI', 'AWS', 'S3', 'CloudFront', 'Elastic Beanstalk'],
    websiteLink: 'https://agent-relay-website.vercel.app/',
    logoImage: agentTrailLogo,
    logoIcon: Hub,
    logoGradient: 'linear-gradient(135deg, #34d399, #10b981)',
  },
  {
    title: 'Fit Check',
    description: 'E-commerce platform with virtual try-on capabilities.',
    features: [
      'Aggregated apparel from 10+ leading brands and launched a virtual try-on feature with ML models to increase cloth mapping accuracy by 40%.',
      'Managed full-cycle AI model training and web development, improving page load time and overall site performance.',
    ],
    tech: ['React', 'Python', 'Machine Learning', 'AWS'],
    logoIcon: FitnessCenter,
    logoGradient: 'linear-gradient(135deg, #f97316, #ec4899)',
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
      component="section"
      id="projects"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
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
                  background: '#ffffff',
                  borderRadius: 4,
                  border: '1px solid rgba(31, 41, 55, 0.08)',
                  boxShadow: '0 28px 55px rgba(31, 41, 55, 0.1)',
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
                      sx={{ borderColor: 'rgba(31, 41, 55, 0.2)', color: 'text.secondary' }}
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
                        background: '#2f5d62',
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': {
                          background: '#284f53',
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
                        background: '#2f5d62',
                        color: '#fff',
                        textTransform: 'none',
                        '&:hover': {
                          background: '#284f53',
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
