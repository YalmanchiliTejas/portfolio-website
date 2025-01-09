import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
import logo from '../assets/profile_pic.jpeg'; // Replace with the actual path to your .jpeg file

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar>
        {/* Logo and Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, gap: 1 }}>
          <Box
            sx={{
              height: 50,
              width: 50,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: '#fff', // Fallback color if image doesn't load
            }}
          >
            <img
              src={logo}
              alt="Tejas Logo"
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'contain',
                backgroundColor: '#fff', // Fallback color if image doesn't load
              }}
            />
          </Box>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 600,
              '&:hover': {
                color: '#7c3aed',
              },
            }}
          >
            Tejas Yalamanchili
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          {[
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experience' },
            {
                label: 'Resume',
                href: 'https://drive.google.com/file/d/1F_ZOHfjxnbX99TnhB_ira_y0F8H7QLtN/view?usp=sharing',
              },
          ].map((link, index) => (
            <Typography
              key={index}
              component="a"
              href={link.href}
              target={link.label === 'Resume' ? '_blank' : '_self'} // Open resume in a new tab
              rel={link.label === 'Resume' ? 'noopener noreferrer' : ''}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 500,
                '&:hover': {
                  color: '#7c3aed',
                },
              }}
            >
              {link.label}
            </Typography>
          ))}

          
          {/* Social Icons */}
          <IconButton
            href="https://github.com/YalmanchiliTejas"
            target="_blank"
            color="inherit"
            sx={{
              '&:hover': {
                color: '#7c3aed',
              },
            }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/tejasyalamanchili"
            target="_blank"
            color="inherit"
            sx={{
              '&:hover': {
                color: '#7c3aed',
              },
            }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
