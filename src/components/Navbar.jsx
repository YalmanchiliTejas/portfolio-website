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
                  backgroundColor: '#fff',
                }}
              />
            </Box>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                textDecoration: 'none',
                color: '#fff', // White by default
                fontWeight: 600,
                transition: 'color 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  color: '#1e90ff', // Metallic blue on hover
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
                  color: '#fff', // White by default
                  fontWeight: 500,
                  transition: 'color 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    color: '#1e90ff', // Metallic blue on hover
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
                color: '#fff', // White by default
                transition: 'color 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  color: '#1e90ff', // Metallic blue on hover
                },
              }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/tejasyalamanchili"
              target="_blank"
              sx={{
                color: '#fff', // White by default
                transition: 'color 0.3s ease', // Smooth transition on hover
                '&:hover': {
                  color: '#1e90ff', // Metallic blue on hover
                },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Box>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, color: '#fff' }}
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
            bgcolor: 'background.default',
            height: '100%',
            color: '#fff',
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer} sx={{ color: '#fff' }}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link, index) => (
              <ListItem button key={index} component="a" href={link.href} onClick={toggleDrawer}>
                <ListItemText
                  primary={link.label}
                  sx={{
                    color: '#fff', // White by default
                    transition: 'color 0.3s ease', // Smooth transition on hover
                    '&:hover': {
                      color: '#1e90ff', // Metallic blue on hover
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
                  color: '#fff', // White by default
                  transition: 'color 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    color: '#1e90ff', // Metallic blue on hover
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/tejasyalamanchili"
                target="_blank"
                sx={{
                  color: '#fff', // White by default
                  transition: 'color 0.3s ease', // Smooth transition on hover
                  '&:hover': {
                    color: '#1e90ff', // Metallic blue on hover
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
