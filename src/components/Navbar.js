import { AppBar, Container, ListItem, Avatar, Box, Toolbar, FormControl, Drawer, List, InputLabel, MenuItem, Select, TextField, Button, IconButton, ListItemText, useMediaQuery, Hidden } from '@mui/material';
import React, { useState } from 'react'
import logo from '../assets/fedup.png';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [shipping, setShipping] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:1000px)');

    const handleMenuToggle = (e) => {
        setMenuOpen(!menuOpen);
    }

    const handleChange = (e) => {
        setShipping(e.target.event);
    }

    const menuItems = [
        'Shipping',
        'Tracking',
        'Design & Print',
        'Locations',
        'Support',
        'Sign In',
        'Sign Up',
    ]
    return (
        <Box style={{ fontSize: '5px', color: 'white' }}>
            <AppBar position='static' style={{ backgroundColor: '#8000ff', padding: '0px' }}>
                <Container maxWidth='xl'>
                    <Toolbar>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                alt='logo'
                                src={logo}
                                style={{ width: '90px', height: 'auto', marginRight: '50px' }}
                            />
                        </Box>
                        {isSmallScreen ? (
                            <IconButton
                                edge='start'
                                color='inherit'
                                aria-label='menu'
                                onClick={handleMenuToggle}
                                style={{ display: { xs: 'block', md: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <FormControl variant='standard' style={{ m: 1, minWidth: 100, paddingBottom: '5px' }}>
                                        <InputLabel id='shipping-label' style={{ color: 'white' }}>Shipping</InputLabel>
                                        <Select
                                            labelId='shipping-label'
                                            value={shipping}
                                            id='shipping'
                                            label="Shipping"
                                            onChange={handleChange}
                                        >   <MenuItem>Shipping</MenuItem>
                                            <MenuItem value='create a shipment'>Create a Shipment</MenuItem>
                                            <MenuItem value='Shipping Rates & Delivery Times'>Shipping Rates & Delivery Times</MenuItem>
                                            <MenuItem value='Schedule & Manage Pickups'>Schedule & Manage Pickups</MenuItem>
                                            <MenuItem value='Packing & Shipping Supplies'>Packing & Shipping Supplies</MenuItem>
                                            <MenuItem value='International Shipping Guide'>International Shipping Guide</MenuItem>
                                            <MenuItem value='Freight'>Freight</MenuItem>
                                            <MenuItem value='Manage a Return'>Manage a Return</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <div style={{ padding: '10px' }}>
                                        <FormControl variant='standard' style={{ m: 1, minWidth: 100, paddingBottom: '5px' }}>
                                            <InputLabel id='shipping-label' style={{ color: 'white' }}>Tracking</InputLabel>
                                            <Select
                                                labelId='shipping-label'
                                                value={shipping}
                                                id='shipping'
                                                label="shipping"
                                                onChange={handleChange}
                                            >
                                                <Box
                                                    component='form'
                                                    style={{ padding: '12px' }}
                                                    noValidate
                                                    autoComplete='off'
                                                >
                                                    <TextField id='outlined-track' placeholder='Tracking Id' label='Tracking Id' variant='outlined' style={{ width: '100%' }} />
                                                </Box>
                                                <Button variant='contained' style={{ width: '90%', margin: '15px' }}>Track</Button>
                                                <MenuItem value='Advanced Shipment Tracking'>Advanced Shipment Tracking</MenuItem>
                                                <MenuItem value='Manage Your Delivery'>Manage Your Delivery</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div style={{ padding: '5px' }}>
                                        <FormControl variant='standard' style={{ m: 1, minWidth: 100, paddingBottom: '5px' }}>
                                            <InputLabel id='design-and-print-label' style={{ color: 'white' }}>Design & Print</InputLabel>
                                            <Select
                                                labelId='design-and-print-label'
                                                value={shipping}
                                                id='design-and-print'
                                                label="Design-and-Print"
                                                onChange={handleChange}
                                            >   <MenuItem>Design & Print</MenuItem>
                                                <MenuItem value='explore print, products & design'>Explore Print, Products & Design</MenuItem>
                                                <MenuItem value='browse services'>Browse Services</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div style={{ padding: '5px' }}>
                                        <FormControl variant='standard' style={{ m: 1, minWidth: 100, paddingBottom: '5px' }}>
                                            <InputLabel id='locations-label' style={{ color: 'white' }}>Locations</InputLabel>
                                            <Select
                                                labelId='locations-label'
                                                value={shipping}
                                                id='locations'
                                                label="Locations"
                                                onChange={handleChange}
                                            >   <MenuItem>Locations</MenuItem>
                                                <MenuItem value='drop offa package'>Drop off a Package</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div>
                                        <FormControl variant='standard' style={{ m: 1, minWidth: 100, paddingBottom: '5px' }}>
                                            <InputLabel id='support-label' style={{ color: 'white' }}>Support</InputLabel>
                                            <Select
                                                labelId='support-label'
                                                value={shipping}
                                                id='support'
                                                label="Support"
                                                onChange={handleChange}
                                            >   <MenuItem>Support</MenuItem>
                                                <MenuItem value='small business center'>Small Business Center</MenuItem>
                                                <MenuItem value='fedex service guide'>Fedex Service Guide</MenuItem>
                                                <MenuItem value='account management tools'>Account Management Tools</MenuItem>
                                                <MenuItem values='frequently asked questions'>Frequently Asked Questions</MenuItem>
                                                <MenuItem values='file a claim'>File A Claim</MenuItem>
                                                <MenuItem value='billing & invoicing'>Billing & Invoicing </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Box>
                            </>

                        )}
                        <Drawer
                            anchor='left'
                            open={menuOpen}
                            onClose={handleMenuToggle}
                            style={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <List>
                                {menuItems.map((item, index) => (
                                    <ListItem key={index} onClick={handleMenuToggle} style={{ cursor: 'pointer' }}>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                        <div style={{ marginLeft: 'auto' }}>
                            <Box style={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton color='inherit'>
                                    <SearchIcon />
                                </IconButton>
                                <Hidden mdDown>
                                    <Button color='inherit' style={{ marginRight: '5px' }}>
                                        Sign Up
                                    </Button>
                                    <Button color='inherit' style={{ marginRight: '5px' }}>
                                        Sign In
                                    </Button>
                                </Hidden>
                                <Avatar
                                    alt='user'
                                    style={{
                                        marginRight: '5px',
                                    }}
                                />
                            </Box>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar; 
