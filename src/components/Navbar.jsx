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
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Papers', href: '#papers' },
    { label: 'Skills', href: '#skills' },
    {
      label: 'Resume',
      href: '/Tejas_Yalamanchili.pdf',
    },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(255, 251, 245, 0.82)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 16px 38px rgba(16, 32, 51, 0.08)',
          borderBottom: '1px solid rgba(16, 32, 51, 0.08)',
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
                color: '#102033',
                fontWeight: 600,
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#6366f1',
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
                  color: '#102033',
                  fontWeight: 500,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#6366f1',
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
                color: '#102033',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#6366f1',
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/tejasyalamanchili"
              target="_blank"
              sx={{
                color: '#102033',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#6366f1',
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#102033' }}
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
            bgcolor: '#f8f3eb',
            height: '100%',
            color: '#102033',
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer} sx={{ color: '#102033' }}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} component="a" href={link.href} onClick={toggleDrawer}>
                <ListItemText
                  primary={link.label}
                  sx={{
                    color: '#102033',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#6366f1',
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
                  color: '#102033',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#6366f1',
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/tejasyalamanchili"
                target="_blank"
                sx={{
                  color: '#102033',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#6366f1',
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
