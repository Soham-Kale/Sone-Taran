import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import image from '../asset/img.png'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
    const nextPage = useNavigate();
    function next() {
        nextPage('/SecondPage');
    }
    return (
        <Box sx={{ height: '100%' }}>
            <Grid
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ height: '100%' }}
            >
                <Grid item>
                    <Box
                        component="img"
                        src={image}
                        sx={{
                            width: { lg: 500, sm: 370, xs: '90%' },
                            height: { lg: 450, sm: 350, xs: 'auto' },
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                <Box display='flex' alignItems='center' justifyContent='center' sx={{ marginTop: '55px' }}>
                    <Button
                        variant="contained"
                        onClick={next}
                        sx={{
                            backgroundColor: "#FFD500",
                            width: '239px',
                            height: '55px',
                            borderRadius: '20px',
                            boxShadow: 'none',
                            marginTop: "60px",
                            marginBottom: '20px',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: '600', fontSize: '21px', fontFamily: 'Inter' }}
                        >
                            Get Started
                        </Typography>
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
}

export default FirstPage;