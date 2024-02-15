import { Container, Typography, Box, Button, Grid } from '@mui/material';
import React from 'react';
import preFooter1 from '../assets/preFooter1.jpg';
import preFooter2 from '../assets/preFooter2.jpg';


const PreFooter = () => {
    return (
        <>
            <Box>
                <Typography variant='h3' gutterBottom style={{ textAlign: 'center', marginTop: '5%' }}>
                    Make a lasting impression on your customers
                </Typography>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box style={{ marginTop: '25%' }}>
                                <Typography variant='h4' style={{ marginBottom: '20px' }}>
                                    Wow recipients with customized<br />
                                    packaging.
                                </Typography>
                                <Typography variant='h7'>
                                    Personalize product boxes to help your brand stand out and stay top of mind.
                                    Now’s the perfect time to create sweet shipping supplies for Valentine’s Day.
                                </Typography>
                                <Box style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                                    <Button variant='contained' style={{ backgroundColor: '#8000ff' }}>View Custom Packaging</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <img
                                    src={preFooter1}
                                    alt='small business'
                                    style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <img
                                    src={preFooter2}
                                    alt='small business'
                                    style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box style={{ marginTop: '25%' }}>
                                <Typography variant='h4' style={{ marginBottom: '20px' }}>
                                    Prepare for a busy spring

                                </Typography>
                                <Typography variant='h7'>
                                    Running a small business can be demanding
                                    year-round, but you’ve got this. Get advice
                                    on navigating customer service challenges,
                                    creating campaign strategies, and more.
                                </Typography>
                                <Box style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                                    <Button variant='contained' style={{ backgroundColor: '#8000ff' }}>Check Out Business Tips</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box style={{ textAlign: 'start', paddingLeft: '5%', paddingTop: '5%' }}>
                <Typography variant='h6'>FedEx money-back guarantee</Typography>
                <Typography variant='body1' style={{ paddingTop: '3%' }}>We offer a money-back guarantee for select services.
                    This guarantee may be suspended, modified, or revoked. Please check
                    money-back guarantee for the latest status of our money-back guarantee.
                </Typography>
            </Box>
        </>
    )
}

export default PreFooter; 
