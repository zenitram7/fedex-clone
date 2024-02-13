import { Typography, Container, Grid, Box, Link, List, ListItem, ListItemText, MenuItem, Select, FormControl, Divider, IconButton, AppBar, InputLabel } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Container maxWidth style={{ marginTop: '10%', paddingTop: '5%', backgroundColor: 'lightgray' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h5' gutterBottom style={{ color: '#8000ff' }}>
                            Our Company
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText style={{ cursor: 'pointer' }}>About FedEx</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText style={{ cursor: 'pointer' }}>Our Portfolio</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText style={{ cursor: 'pointer' }}>Careers</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h5' gutterBottom style={{ color: '#8000ff' }}>
                            About FedEx
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText style={{ cursor: 'pointer' }}>NewsRoom</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText style={{ cursor: 'pointer' }}>Developers</ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText style={{ cursor: 'pointer' }}>Contact Us</ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h5' gutterBottom style={{ color: '#8000ff' }}>
                            Language
                        </Typography>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h6' style={{ paddingBottom: '5%' }}>
                                Pick a language
                            </Typography>
                            <FormControl fullWidth>
                                <InputLabel id='input-language-label'>Language</InputLabel>
                                <Select labelId='input-language-label'
                                    id='input-language'
                                    label='language'
                                >
                                    <MenuItem>Spanish</MenuItem>
                                    <MenuItem>French</MenuItem>
                                    <MenuItem>Japanese</MenuItem>

                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '20px 0', backgroundColor: 'black' }} />
                <Grid>
                    <Box>
                        <Typography>Follow FedEx</Typography>
                    </Box>
                </Grid>
                <Grid>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton>
                        <XIcon />
                    </IconButton>
                    <IconButton>
                        <MailOutlineIcon />
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
            </Container>
            <Box>
                <AppBar position='static' style={{ backgroundColor: '#8000ff', padding: '20px' }}>
                    <Container maxWidth='xl' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography>© FedEx</Typography>
                        <Box style={{ display: 'flex', alignItems: 'center', flexDirection: 'row-reverse' }}>
                            <Typography variant='body2'>| Site Map ||</Typography>
                            <Typography variant='body2'>| Terms Of Use |</Typography>
                            <Typography variant='body2'>|| Privacy |</Typography>
                        </Box>
                    </Container>
                </AppBar>
            </Box>
        </>
    )
}

export default Footer; 
