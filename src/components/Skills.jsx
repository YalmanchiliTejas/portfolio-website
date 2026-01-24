// src/components/Skills.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import flaskLogo from '../assets/flask.svg';

const skillCategories = {
  "Languages": [
    { name: "Java", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="40" height="40" /> },
    { name: "Go", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" alt="Go" width="40" height="40" /> },
    { name: "Rust", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" alt="Rust" width="40" height="40" /> },
    { name: "Python", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40" /> },
    { name: "C/C++", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40" /> },
    { name: "C#", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" width="40" height="40" /> },
    { name: "ARM Assembly", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/arm/arm-original.svg" alt="ARM Assembly" width="40" height="40" /> },
    { name: "HTML", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML" width="40" height="40" /> },
    { name: "CSS", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" width="40" height="40" /> },
    { name: "JavaScript", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" /> },
    { name: "SQL", icon: <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="SQL" width="40" height="40" /> },
    { name: "CUDA", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nvidia/nvidia-original.svg" alt="CUDA" width="40" height="40" /> },
    { name: "GraphQL", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg" alt="GraphQL" width="40" height="40" /> },
    { name: "TypeScript", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" width="40" height="40" /> }
  ],
  "Frameworks & Tools": [
    { name: "ASP .NET", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg" alt="ASP .NET" width="40" height="40" /> },
    { name: "Spring Boot", icon: <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot" width="40" height="40" /> },
    { name: "Flask", icon: <img src={flaskLogo} alt="Flask" width="40" height="40" /> },
    { name: "React", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40" /> },
    { name: "Flutter", icon: <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="Flutter" width="40" height="40" /> },
    { name: "NumPy", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" alt="NumPy" width="40" height="40" /> },
    { name: "Pandas", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" alt="Pandas" width="40" height="40" /> },
    { name: "PyTorch", icon: <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" width="40" height="40" /> },
    { name: "TensorFlow", icon: <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" width="40" height="40" /> },
    { name: "Xcode", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/xcode/xcode-original.svg" alt="Xcode" width="40" height="40" /> }
  ],
  "Tools & Technologies": [
    { name: "Azure", icon: <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="Azure" width="40" height="40" /> },
    { name: "AWS", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="40" height="40" /> },
    { name: "Hugging Face", icon: <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Hugging Face" width="40" height="40" /> },
    { name: "GitHub", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="40" height="40" /> },
    { name: "DagsHub", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="DagsHub" width="40" height="40" /> },
    { name: "Linux", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux" width="40" height="40" /> },
    { name: "Kubernetes", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" width="40" height="40" /> },
    { name: "Docker", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" width="40" height="40" /> }
  ]
};

const Skills = () => {
  return (
    <Box component="section" id="skills" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 4, color: 'text.primary', textAlign: 'center' }}>
          Skills
        </Typography>
        <Grid container spacing={4}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Grid item xs={12} md={4} key={category}>
              <Paper 
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{ 
                  p: 3, 
                  bgcolor: '#ffffff',
                  borderRadius: 4,
                  height: '100%',
                  border: '1px solid rgba(31, 41, 55, 0.08)',
                  boxShadow: '0 24px 45px rgba(31, 41, 55, 0.08)',
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {category}
                </Typography>
                <Grid container spacing={2}>
                  {skills.map((skill) => (
                    <Grid item xs={6} key={skill.name}>
                      <Box
                        component={motion.div}
                        whileHover={{ scale: 1.1 }}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          p: 1,
                          borderRadius: 1,
                          '&:hover': {
                            bgcolor: 'rgba(91, 124, 250, 0.12)'
                          }
                        }}
                      >
                        {skill.icon}
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {skill.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
