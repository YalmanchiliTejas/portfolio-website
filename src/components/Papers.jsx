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

const papers = [];

const Papers = () => {
  return (
    <Box
      component="section"
      id="papers"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
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
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px dashed rgba(148, 163, 184, 0.35)',
                  borderRadius: 3,
                  boxShadow: '0 24px 45px rgba(15, 23, 42, 0.4)',
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
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: 3,
                    boxShadow: '0 24px 45px rgba(15, 23, 42, 0.4)',
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
                        background: 'linear-gradient(90deg, #7c3aed, #4f46e5)',
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
