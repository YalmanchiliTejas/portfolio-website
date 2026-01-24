import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu, Close, GitHub, LinkedIn } from '@mui/icons-material';
import logo from '../assets/profile_pic.jpeg'; // Replace with the actual path to your .jpeg file

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Papers', href: '#papers' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    {
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1F_ZOHfjxnbX99TnhB_ira_y0F8H7QLtN/view?usp=sharing',
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 12px 30px rgba(31, 41, 55, 0.08)',
          borderBottom: '1px solid rgba(31, 41, 55, 0.08)',
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
                backgroundColor: '#f3f4f6', // Fallback color if image doesn't load
              }}
            >
              <img
                src={logo}
                alt="Tejas Logo"
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                  backgroundColor: '#f3f4f6',
                }}
              />
            </Box>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
                color: '#1f2937', // Primary text
                fontWeight: 600,
                transition: 'color 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  color: '#5b7cfa', // Accent on hover
                },
              }}
            >
              Tejas Yalamanchili
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navLinks.map((link, index) => (
              <Typography
                key={index}
                component="a"
                href={link.href}
                target={link.label === 'Resume' ? '_blank' : '_self'}
                rel={link.label === 'Resume' ? 'noopener noreferrer' : ''}
                sx={{
                  textDecoration: 'none',
                  color: '#1f2937', // Primary text
                  fontWeight: 500,
                  transition: 'color 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    color: '#5b7cfa', // Accent on hover
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
              sx={{
                color: '#1f2937', // Primary text
                transition: 'color 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  color: '#5b7cfa', // Accent on hover
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/tejasyalamanchili"
              target="_blank"
              sx={{
                color: '#1f2937', // Primary text
                transition: 'color 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  color: '#5b7cfa', // Accent on hover
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#1f2937' }}
            onClick={toggleDrawer}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Component */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            bgcolor: '#f7f5f0',
            height: '100%',
            color: '#1f2937',
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer} sx={{ color: '#1f2937' }}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} component="a" href={link.href} onClick={toggleDrawer}>
                <ListItemText
                  primary={link.label}
                  sx={{
                    color: '#1f2937', // Primary text
                    transition: 'color 0.3s ease', // Smooth transition on hover
                    '&:hover': {
                      color: '#5b7cfa', // Accent on hover
                    },
                  }}
                />
              </ListItem>
            ))}
            {/* Social Icons in Drawer */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
              <IconButton
                href="https://github.com/YalmanchiliTejas"
                target="_blank"
                sx={{
                  color: '#1f2937', // Primary text
                  transition: 'color 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    color: '#5b7cfa', // Accent on hover
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/tejasyalamanchili"
                target="_blank"
                sx={{
                  color: '#1f2937', // Primary text
                  transition: 'color 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    color: '#5b7cfa', // Accent on hover
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
