import { Container, Button, ButtonGroup, TextField, Box, Link, Grid, Typography } from '@mui/material';
import React from 'react';
import HeroTop from '../assets/ShipManage.jpg';
import { RateReview } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PlaceIcon from '@mui/icons-material/Place';
import smallBiz from '../assets/smallBiz.jpg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

const ShipManage = () => {


    const containerStyle = {
        backgroundImage: `url(${HeroTop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', // Set the minimum height to ensure the background covers the entire viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    };

    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: '20px',
        margin: '10px',
    }


    const iconStyle = {
        margin: '5px',
        marginRight: '15px',
    }

    return (
        <>


            <div style={containerStyle}>
                <Container maxWidth='sm'>
                    <h1 style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
                        color: 'white',
                        textAlign: 'center',
                        borderRadius: '15px',
                        fontSize: '46px',
                        fontFamily: 'helvetica'
                    }}>Ship, Manage, Track & Deliver</h1>
                    <ButtonGroup size='large' variant='contained' aria-label='' style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', boxShadow: 'none' }}>
                        <Button style={{ backgroundColor: '#8000ff', borderColor: 'black' }}>
                            <RateReview style={iconStyle} />
                            Rate & Review
                        </Button>
                        <Button style={{ backgroundColor: '#8000ff', borderColor: 'black' }}>
                            <LocalShippingIcon style={iconStyle} />
                            Track
                        </Button>
                        <Button style={{ backgroundColor: '#8000ff' }}>
                            <PlaceIcon style={iconStyle} />
                            Locations
                        </Button>
                    </ButtonGroup>
                    <Box display='flex' alignItems='center'>
                        <TextField fullWidth label='Track Your Package'
                            variant='filled'
                            id='fullWidth'
                            placeholder='Tracking Number'
                            style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                        </TextField>
                        <Button variant='contained' size='large' style={{ padding: '14px', backgroundColor: '#ff6200' }}>Track</Button>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Link href='#' style={{ paddingRight: '10px', color: 'white', fontFamily: 'sans-serif' }}>
                            <h4 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>Multiple Tracking Numbers?</h4>
                        </Link>
                        <Link href='#' style={{ color: 'white', fontFamily: 'sans-serif' }}>
                            <h4 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}>Need Help?</h4>
                        </Link>
                    </Box>
                </Container>
            </div>
            <div>
                <Container>
                    <Box style={{ width: '100%', textAlign: 'center', borderTop: '1px solid black', borderBottom: '1px solid black' }}>
                        <h4>Proudly Delivering Your Packages Since 1985 ©</h4>
                    </Box>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Box style={{ marginTop: '25%' }}>
                                    <Typography variant='h4' style={{ marginBottom: '20px' }}>
                                        You're a small business boss. <br />
                                        And we're here for it.
                                    </Typography>
                                    <Typography variant='h7'>
                                        Save up to 40% on select shipping <br />
                                        and surcharges when you open a free account.
                                    </Typography>
                                    <Box style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
                                        <Button variant='contained' style={{ backgroundColor: '#8000ff' }}>Start saving</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <img
                                        src={smallBiz}
                                        alt='small business'
                                        style={{ width: '100%', height: 'auto', marginTop: '15%', borderRadius: '8px' }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                    <Box>
                        <Typography variant='h3' style={{ textAlign: 'center', marginTop: '5%', marginBottom: '5%' }}>
                            Manage Your Shipments & Returns
                        </Typography>
                    </Box>
                    <Grid container spacing={3} justifyContent='center'>
                        <Grid item xs={12} sm={2} style={boxStyle}>
                            <ForwardToInboxIcon style={{ fontSize: '50px', color: '#9400d3' }} />
                            <Link href='#' style={{ textAlign: 'center' }}>
                                Drop Off A Package
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={2} style={boxStyle}>
                            <LocalShippingIcon style={{ fontSize: '50px', color: '#9400d3' }} />
                            <Link href='#' style={{ textAlign: 'center' }}>
                                Redirect A Package
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={2} style={boxStyle}>
                            <StorefrontIcon style={{ fontSize: '50px', color: '#9400d3', marginBottom: '8px' }} />
                            <Link href='#' style={{ textAlign: 'center' }}>
                                Store Hours & Services
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={2} style={boxStyle}>
                            <AnnouncementOutlinedIcon style={{ fontSize: '50px', color: '#9400d3' }} />
                            <Link href='#' style={{ textAlign: 'center' }}>
                                Service Alerts
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={2} style={boxStyle}>
                            <KeyboardReturnOutlinedIcon style={{ fontSize: '50px', color: '#9400d3' }} />
                            <Link href='#' style={{ textAlign: 'center' }}>
                                Return A Package
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>

    )
}

export default ShipManage; 
