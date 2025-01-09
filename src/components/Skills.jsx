// src/components/Skills.jsx
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import flaskLogo from '../assets/flask.svg';

const skillCategories = {
  "Languages": [
    { name: "Java", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" width="40" height="40" /> },
    { name: "Python", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" width="40" height="40" /> },
    { name: "C/C++", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="C++" width="40" height="40" /> },
    { name: "C#", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="C#" width="40" height="40" /> },
    { name: "JavaScript", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40" /> },
    { name: "HTML/CSS", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML/CSS" width="40" height="40" /> },
    { name: "SQL", icon: <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="SQL" width="40" height="40" /> }
  ],
  "Frameworks & Tools": [
    { name: "React", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" width="40" height="40" /> },
    { name: "Django", icon: <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="Django" width="40" height="40" /> },
    { name: "Spring Boot", icon: <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="Spring Boot" width="40" height="40" /> },
    { name: "Flask", icon: <img src={flaskLogo} alt="Flask" width="40" height="40" /> },
    { name: "Flutter", icon: <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="Flutter" width="40" height="40" /> },
    { name: "PyTorch", icon: <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" width="40" height="40" /> },
    { name: "TensorFlow", icon: <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow" width="40" height="40" /> }
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" width="40" height="40" /> },
    { name: "Azure", icon: <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="Azure" width="40" height="40" /> },
    { name: "Docker", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker" width="40" height="40" /> },
    { name: "PostgreSQL", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" width="40" height="40" /> },
    { name: "MongoDB", icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40" /> },
    { name: "Git", icon: <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" width="40" height="40" /> }
  ]
};

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 8 }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 4 }}>Skills</Typography>
        <Grid container spacing={4}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Grid item xs={12} md={4} key={category}>
              <Paper 
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{ 
                  p: 3, 
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  height: '100%'
                }}
              >
                <Typography variant="h6" gutterBottom>{category}</Typography>
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
                            bgcolor: 'rgba(124, 58, 237, 0.1)'
                          }
                        }}
                      >
                        {skill.icon}
                        <Typography variant="body2">{skill.name}</Typography>
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
