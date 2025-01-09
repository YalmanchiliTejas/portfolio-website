import React from 'react';
import { Box, Container, Typography, Paper, IconButton, Grid } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'tyalaman03@gmail.com',
      link: 'mailto:tyalaman03@gmail.com',
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      value: 'tejasyalamanchili',
      link: 'https://linkedin.com/in/tejasyalamanchili',
    },
    {
      icon: <GitHub />,
      label: 'GitHub',
      value: 'YalmanchiliTejas',
      link: 'https://github.com/YalmanchiliTejas',
    },
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        bgcolor: 'linear-gradient(135deg, #1f2937, #0f172a)',
        color: '#f9fafb',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
          Contact
        </Typography>
        <Grid container spacing={3}>
          {contactInfo.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  cursor: 'pointer',
                }}
                onClick={() => window.open(item.link, '_blank')}
              >
                <IconButton
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    mb: 1,
                    color: '#1e90ff',
                    fontSize: 36,
                  }}
                >
                  {item.icon}
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e90ff' }}>
                  {item.label}
                </Typography>
                <Typography sx={{ color: '#b0c4de' }}>{item.value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
