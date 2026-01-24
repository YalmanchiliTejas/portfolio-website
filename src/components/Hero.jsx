import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

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
            'radial-gradient(circle at top, rgba(91, 124, 250, 0.18), transparent 55%), radial-gradient(circle at 20% 20%, rgba(47, 93, 98, 0.2), transparent 45%)',
          zIndex: 0,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Chip
                label="Available for collaborations · 2025"
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: 'rgba(47, 93, 98, 0.12)',
                  color: '#2f5d62',
                  fontWeight: 600,
                }}
              />
              <Typography
                component={motion.h1}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                variant="h1"
                sx={{
                  fontSize: { xs: '2.75rem', md: '3.75rem' },
                  color: 'text.primary',
                }}
              >
                Full-stack software engineer and AI engineer building dependable, production-ready systems.
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                I combine end-to-end product engineering with applied ML to deliver scalable platforms,
                intelligent user experiences, and trustworthy AI pipelines.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.03 }}
                  href="#projects"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#2f5d62',
                    color: '#fff',
                    textTransform: 'none',
                    boxShadow: '0 10px 24px rgba(47, 93, 98, 0.25)',
                    '&:hover': { bgcolor: '#284f53' },
                  }}
                >
                  Explore projects
                </Button>
                <Button
                  component={motion.a}
                  whileHover={{ scale: 1.03 }}
                  href="#contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: '#2f5d62',
                    borderColor: '#2f5d62',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: 'rgba(47, 93, 98, 0.08)',
                      borderColor: '#2f5d62',
                    },
                  }}
                >
                  Let’s connect
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {[
                {
                  title: 'Graduate Research',
                  description:
                    'Building predictive-maintenance AI pipelines with real equipment data for Purdue Data Mine–Cummins.',
                },
                {
                  title: 'Full-stack Delivery',
                  description:
                    'Shipping production web platforms with React, FastAPI, and cloud infrastructure for real-time dashboards.',
                },
                {
                  title: 'Applied ML',
                  description:
                    'Deploying RAG-driven assistants and ML systems to improve reliability and developer productivity.',
                },
              ].map((highlight) => (
                <Grid item xs={12} sm={6} key={highlight.title}>
                  <Paper
                    sx={{
                      p: 2.5,
                      height: '100%',
                      borderRadius: 4,
                      background: 'rgba(255, 255, 255, 0.86)',
                      border: '1px solid rgba(31, 41, 55, 0.08)',
                      boxShadow: '0 24px 45px rgba(31, 41, 55, 0.08)',
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="subtitle2" sx={{ color: '#5b7cfa', fontWeight: 600 }}>
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
                    p: 2.5,
                    height: '100%',
                    borderRadius: 4,
                    background: '#ffffff',
                    border: '1px dashed rgba(31, 41, 55, 0.15)',
                  }}
                >
                  <Stack spacing={1}>
                    <Typography variant="subtitle2" sx={{ color: '#2f5d62', fontWeight: 600 }}>
                      Focus areas
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Predictive maintenance, ML observability, and scalable full-stack product
                      engineering.
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
