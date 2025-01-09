import React from 'react';
import { Box, Container, Typography, Stack, Paper, Grid } from '@mui/material';
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
    <Box id="experience" sx={{ py: 8, bgcolor: 'linear-gradient(135deg, #1f2937, #0f172a)', color: '#f9fafb' }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
          Experience
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
                p: 3,
                bgcolor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={2}>
                  <Box
                    component="img"
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    sx={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#1e90ff' }}>
                    {exp.title}
                  </Typography>
                  <Typography sx={{ color: '#87cefa', mb: 2 }}>{exp.company}</Typography>
                  <Typography sx={{ color: '#b0c4de', mb: 2 }}>{exp.period}</Typography>
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
