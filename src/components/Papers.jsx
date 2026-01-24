import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { PictureAsPdf, ArrowOutward } from '@mui/icons-material';

const papers = [
{
  title: 'Reimplementing PyTorch Cycle GANs for Art Style to Art Style Conversion',
  authors: 'Tejas Yalamanchili, Shrinivas Venkatesan',
  year: '2025',
  venue: 'Technical Report',
  abstract: `Cycle GAN in Pytorch specifically for art-style translation, constricting the dataset to paintings across multiple styles and evaluating photo to art and art to art conversions within this focused domain. In addition to reproducing the original objective from the paper (LSGAN with cycle and identity losses), we will explore replacing the LSGAN adversarial component with alternative formulations such as hinge loss, while also incorporating additional regularization terms including perceptual content loss (LPIPS/VGG), Gram-matrix style loss, and discriminator feature matching loss. Our goal is to evaluate how this modified objective influences style fidelity, realism, and content preservation in the translated images`,
  topics: ['CVD', 'GANs'],
  pdf: '/CS593_project_final_report.pdf'
},
];

const Papers = () => {
  return (
    <Box
      id="papers"
      sx={{
        py: 10,
        background: 'transparent',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, color: 'text.primary' }}>
            Papers & Publications
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 720, mx: 'auto' }}>
            Peer-reviewed work and technical reports focused on applied ML systems, agent tooling, and
            safety-first AI products.
          </Typography>
        </Stack>
        <Grid container spacing={4}>
          {papers.length === 0 ? (
            <Grid item xs={12}>
              <Card
                sx={{
                  background: '#ffffff',
                  border: '1px dashed rgba(31, 41, 55, 0.25)',
                  borderRadius: 4,
                  boxShadow: '0 24px 45px rgba(31, 41, 55, 0.08)',
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Papers coming soon
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    Add your PDF files to the site root (for example, <code>/paper-title.pdf</code>)
                    and list them in this section to make them available for readers.
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    <Chip label="ML Systems" size="small" variant="outlined" />
                    <Chip label="Research" size="small" variant="outlined" />
                    <Chip label="Publications" size="small" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ) : (
            papers.map((paper, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: '#ffffff',
                    border: '1px solid rgba(31, 41, 55, 0.08)',
                    borderRadius: 4,
                    boxShadow: '0 24px 45px rgba(31, 41, 55, 0.08)',
                  }}
                >
                  <CardContent sx={{ pb: 2 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Chip label={paper.venue} size="small" color="secondary" />
                      <Chip label={paper.year} size="small" variant="outlined" />
                    </Stack>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {paper.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                      {paper.authors}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                      {paper.abstract}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {paper.topics.map((topic) => (
                        <Chip key={topic} label={topic} size="small" sx={{ mb: 1 }} />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <Button
                      href={paper.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      startIcon={<PictureAsPdf />}
                      endIcon={<ArrowOutward />}
                      sx={{
                        background: '#2f5d62',
                        '&:hover': { background: '#284f53' },
                        textTransform: 'none',
                      }}
                    >
                      Read Paper
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Papers;
