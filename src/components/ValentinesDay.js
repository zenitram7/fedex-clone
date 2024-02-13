import { Container, Grid, Box, Typography, Link, Button } from '@mui/material';
import React from 'react'
import vDay from '../assets/valentinesDay.jpg';
import vDay2 from '../assets/valentinesDay2.jpg';
import vDay3 from '../assets/valentinesDay3.jpg';
import vDay4 from '../assets/valentinesDay4.jpg';
import vDay5 from '../assets/valentinesDay5.jpg';
import vDay6 from '../assets/valentinesDay6.jpg';


const ValentinesDay = () => {
    return (
        <>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={vDay}
                                alt=''
                                style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px', marginBottom: '20px' }}
                            />
                        </Box>
                        <Typography variant='h5' style={{}}>
                            Get ready for 2024 FedEx® Small Business Grants
                        </Typography>
                        <Typography variant='h7'>
                            This could be your chance to win a cash grant and connect
                            with other entrepreneurs. Learn more so you’re all set for
                            the upcoming entry period.
                        </Typography>
                        <Link href='#' style={{ display: 'flex', marginTop: '10px' }}>Prep To Apply</Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={vDay2}
                                alt='small business'
                                style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px', marginBottom: '20px' }}
                            />
                        </Box>
                        <Typography variant='h5'>A modern miracle</Typography>
                        <Typography variant='h7'>
                            A young skateboarder wanted to send a gift
                            to his idol Tony Hawk – with no address. Was
                            it just a pipe dream? Or could he overcome the obstacles?</Typography>
                        <Link href='#' style={{ display: 'flex', marginTop: '10px' }}>See The Whole Story</Link>
                    </Grid>
                </Grid>
            </Container>
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
                                src={vDay3}
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
                                src={vDay4}
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
                                <Button variant='contained' style={{ backgroundColor: '#8000ff' }}>View Custom Packaging</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={vDay5}
                                alt=''
                                style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px', marginBottom: '20px' }}
                            />
                        </Box>
                        <Typography variant='h4' style={{}}>
                            Pair flexibility with on-the-go convenience
                        </Typography>
                        <Typography variant='h7'>
                            FedEx Delivery Manager® helps you customize when,
                            where, and how you get packages. Enroll for free,
                            then download the FedEx® Mobile app. You’ll be
                            able to use your phone to make deliveries even
                            more convenient.
                        </Typography>
                        <Link href='#' style={{ display: 'flex', marginTop: '10px' }}>Get The Fedex App</Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src={vDay6}
                                alt='small business'
                                style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px', marginBottom: '15px' }}
                            />
                        </Box>
                        <Typography variant='h4'>Pick up essentials and drop off packages</Typography>
                        <Typography variant='h7'>
                            Check one more thing off your to-do list.
                            Drop off shipments at retail locations
                            including FedEx Office, Office Depot®
                            OfficeMax®, Walgreens, and select grocery
                            stores. Some are even open 24 hours.
                        </Typography>
                        <Link href='#' style={{ display: 'flex', marginTop: '10px' }}>Find Locations Near You</Link>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default ValentinesDay; 
