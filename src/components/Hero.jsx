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
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
        background: '#0f172a', // Background color
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        {/* Main Heading with Metallic Blue Gradient */}
        <Typography
          component={motion.h1}
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          variant="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem' },
            mb: 2,
            background: 'linear-gradient(90deg, #1e90ff, #87cefa, #4682b4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Backend Engineer & Machine Learning Researcher
        </Typography>

        {/* Subtitle */}
        <Typography
          component={motion.h5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          variant="h5"
          sx={{ mb: 4, opacity: 0.8, color: '#f9fafb' }}
        >
          Passionate about developing cutting-edge AI solutions and machine learning models. 
          Experienced in deep learning, computer vision, and natural language processing.
        </Typography>

        <Grid container spacing={2} sx={{ mb: 5 }}>
          {[
            {
              title: 'ML Research',
              description: 'Publishing practical research on multimodal systems and agent alignment.',
            },
            {
              title: 'Software Engineering',
              description: 'Building production-grade ML platforms and observability tooling.',
            },
            {
              title: 'Applied AI',
              description: 'Deploying real-time inference pipelines for safety-first products.',
            },
          ].map((highlight) => (
            <Grid item xs={12} md={4} key={highlight.title}>
              <Paper
                sx={{
                  p: 2.5,
                  height: '100%',
                  borderRadius: 3,
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  boxShadow: '0 20px 35px rgba(15, 23, 42, 0.35)',
                }}
              >
                <Stack spacing={1}>
                  <Chip
                    label={highlight.title}
                    size="small"
                    sx={{
                      alignSelf: 'flex-start',
                      background: 'rgba(124, 58, 237, 0.2)',
                      color: '#e2e8f0',
                    }}
                  />
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {highlight.description}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
          <Button
            component={motion.a}
            whileHover={{ scale: 1.1 }}
            href="#projects"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(90deg, #1e90ff, #4682b4)',
              color: '#fff',
              boxShadow: '0px 4px 10px rgba(30, 144, 255, 0.5)',
            }}
          >
            View Projects
          </Button>
          <Button
            component={motion.a}
            whileHover={{ scale: 1.1 }}
            href="#contact"
            variant="outlined"
            size="large"
            sx={{
              color: '#1e90ff',
              borderColor: '#1e90ff',
              '&:hover': {
                backgroundColor: 'rgba(30, 144, 255, 0.1)',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
