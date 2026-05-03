import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Graduate Research',
    description:
      'Building predictive-maintenance AI pipelines with real equipment data for the Purdue Data Mine x Cummins collaboration.',
  },
  {
    title: 'Full-stack Delivery',
    description:
      'Shipping production web platforms and internal tools with React, Spring Boot, FastAPI, Docker, and Kubernetes.',
  },
  {
    title: 'Applied ML',
    description:
      'Deploying RAG-driven assistants, code intelligence, and model-backed workflows that improve reliability and productivity.',
  },
];

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        pb: 6,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top, rgba(217, 119, 6, 0.18), transparent 48%), radial-gradient(circle at 20% 20%, rgba(23, 50, 77, 0.18), transparent 42%)',
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Chip
                label="M.S. Computer Science at Purdue"
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: 'rgba(217, 119, 6, 0.12)',
                  color: '#b45309',
                  fontWeight: 600,
                }}
              />
              <Typography
                variant="overline"
                sx={{ letterSpacing: '0.22em', color: 'text.secondary', fontWeight: 700 }}
              >
                Tejas Yalamanchili
              </Typography>
              <Typography
                component={motion.h1}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                variant="h1"
                sx={{
                  fontSize: { xs: '2.75rem', md: '3.75rem' },
                  color: 'text.primary',
                  maxWidth: 680,
                }}
              >
                Building AI systems and full-stack products that hold up in production.
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                Software engineer and ML engineer focused on predictive maintenance, agent
                observability, and cloud-backed platforms with reliable end-to-end delivery.
              </Typography>
              <Stack direction="row" spacing={1.25} flexWrap="wrap" useFlexGap>
                {['Java', 'Python', 'Go', 'React', 'Spring Boot', 'PyTorch'].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.7)',
                      border: '1px solid rgba(16, 32, 51, 0.08)',
                      color: 'text.primary',
                    }}
                  />
                ))}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.03 }}
                  href="#projects"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#17324d',
                    color: '#fff',
                    textTransform: 'none',
                    boxShadow: '0 12px 24px rgba(23, 50, 77, 0.22)',
                    '&:hover': { bgcolor: '#10263c' },
                  }}
                >
                  Explore projects
                </Button>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.03 }}
                  href="/Tejas_Yalamanchili.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: '#17324d',
                    borderColor: 'rgba(23, 50, 77, 0.25)',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(23, 50, 77, 0.06)',
                      borderColor: '#17324d',
                    },
                  }}
                >
                  Open resume
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {highlights.map((highlight) => (
                <Grid item xs={12} sm={6} key={highlight.title}>
                  <Paper
                    sx={{
                      p: 2.75,
                      height: '100%',
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.86)',
                      border: '1px solid rgba(16, 32, 51, 0.08)',
                      boxShadow: '0 24px 45px rgba(16, 32, 51, 0.08)',
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="subtitle2" sx={{ color: '#d97706', fontWeight: 700 }}>
                        {highlight.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {highlight.description}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
              <Grid item xs={12} sm={6}>
                <Paper
                  sx={{
                    p: 2.75,
                    height: '100%',
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, rgba(23, 50, 77, 0.96), rgba(38, 75, 111, 0.92))',
                    color: '#f8fafc',
                    border: '1px solid rgba(16, 32, 51, 0.12)',
                    boxShadow: '0 24px 45px rgba(16, 32, 51, 0.15)',
                  }}
                >
                  <Stack spacing={1.25}>
                    <Typography variant="subtitle2" sx={{ color: '#fdba74', fontWeight: 700 }}>
                      Current focus
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(248, 250, 252, 0.86)' }}>
                      Production AI tooling, predictive maintenance systems, and agent runtime
                      infrastructure with observability built in from day one.
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
