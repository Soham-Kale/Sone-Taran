import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material';
import './home.css'

function Home() {
    return (
        <Box>
            <Typography variant='h5' sx={{mt: "20px"}} className='styleOfVarient'> Home</Typography>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Box flexDirection={"column"} sx={{padding:3}} >
                    <Box1 />
                    <Box sx={{marginTop:3}}>
                    <Box3 />
                    </Box>
                </Box>
    
                <Box sx={{padding:3}} >
                    <Box2 />
                    <Box sx={{marginTop:3}}>
                    <Box4 />
                    </Box>
                </Box>
            </Box>
            <CustomerInfo />
        </Box>
    )
}

function Box1() {
    return (
        <>
            <Box className='styleForBox1'>
                <Grid item>
                    <Typography className='styleForInt'>Total Interest</Typography>
                    <Typography className='styleForInt'>20,000</Typography> <br />
                </Grid>

                <Box>
                    <Typography display='inline' className='receivedAmount' variant='bold'>Received :
                        <Box variant='bold' sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontSize: '12px',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}>12000</Box>
                    </Typography>
                </Box>

                <Typography display='inline' variant='bold' className='pendingAmt'>Pending :
                    <Box variant='bold' sx={{
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontSize: '12px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}>8000</Box>
                </Typography>
            </Box>
            {/* <Box className="styleForBox1" sx={{ px: { xs: 1, sm: 3, md: 5 }, py: { xs: 1, sm: 3, md: 5 } }}>
                <Box sx={{ mb: 2 }}>
                    <Typography className="styleForInt" sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>
                        Total Interest
                    </Typography>
                    <Typography className="styleForInt" sx={{ fontSize: { xs: '16px', sm: '18px', md: '20px' } }}>
                        20,000
                    </Typography>
                    <br />
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography
                        display="inline"
                        className="receivedAmount"
                        sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}
                    >
                        Received:
                        <Box
                            sx={{
                                fontFamily: 'Inter',
                                display: 'inline',
                                width: '100px',
                                fontSize: { xs: '12px', sm: '14px', md: '16px' },
                                fontWeight: '550',
                                color: '#4CFA7E',
                                textAlign: 'center',
                                ml: 1,
                            }}
                        >
                            12000
                        </Box>
                    </Typography>
                </Box>

                <Typography
                    display="inline"
                    className="pendingAmt"
                    sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}
                >
                    Pending:
                    <Box
                        sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontSize: { xs: '12px', sm: '14px', md: '16px' },
                            fontWeight: '550',
                            color: '#FF0000',
                            textAlign: 'center',
                            ml: 1,
                        }}
                    >
                        8000
                    </Box>
                </Typography>
            </Box> */}
        </>
    )
}

function Box2() {
    return (
        <>
            <Box className='styleForBox1'>
                <Box>
                    <Typography className='styleForInt'>Total Principal </Typography>
                    <Typography className='styleForInt'>20,000</Typography> <br />
                </Box>

                <Box>
                    <Typography display='inline' className='receivedAmount' variant='bold'>Received :
                        <Box variant='bold' sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            width: '100px',
                            fontSize: '12px',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}>12000</Box>
                    </Typography>
                </Box>

                <Typography display='inline' variant='bold' className='pendingAmt'>Pending :
                    <Box variant='bold' sx={{
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontSize: '12px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}>8000</Box>
                </Typography>
            </Box>
        </>
    )
}

function Box3() {
    return (
        <>
            <Box className='styleForBox1'>
                <Box>
                    <Typography className='styleForInt'>Total</Typography>
                </Box>

                <Box>
                    <Typography sx={{
                        height: '21px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: '550',
                        marginTop: '15px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        textAlign: 'center',
                    }}>Customers : 300</Typography>
                    <Typography display='inline' className='receivedAmount' variant='bold'>Loans :
                        <Box variant='bold' sx={{
                            fontFamily: 'Inter',
                            display: 'inline',
                            fontSize: '12px',
                            fontWeight: '550',
                            color: '#4CFA7E',
                            textAlign: 'center',
                        }}>576</Box>
                    </Typography>
                </Box>

                <Typography display='inline' variant='bold' className='pendingAmt'>Closed :
                    <Box variant='bold' sx={{
                        fontFamily: 'Inter',
                        display: 'inline',
                        width: '100px',
                        fontSize: '12px',
                        fontWeight: '550',
                        color: '#FF0000',
                        textAlign: 'center',
                    }}>243</Box>
                </Typography>
            </Box>
        </>
    )
}

function Box4() {
    return (
        <>
            <Box className='styleForBox1'>
                <Box>
                    <Typography className='styleForInt'>Total Weight </Typography>
                </Box>

                <Box>
                    <Typography sx={{
                        height: '21px',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: '550',
                        marginTop: '15px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5px',
                        textAlign: 'center',
                    }}>Gross : 100 gm</Typography>
                </Box>

                <Typography sx={{
                    height: '21px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: '550',
                    marginTop: '15px',
                    textAlign: 'center',
                }}>Net : 100 gm</Typography>
            </Box>
        </>
    )
}

function CustomerInfo() {
    const dues = useNavigate();
    function duesPage() {
        dues('/Dues');
    }
    const customer = useNavigate();
    function customerPage() {
        customer('/CustomerPage');
    }
    const home = useNavigate();
    function homePage() {
        home('/Home');
    }
    const Account = useNavigate();
    function AccountPage() {
        Account('/Account');
    }
    return (
        <>
            <Typography variant='p' className='recentTran'>Recent Transactions</Typography>
            <div className="name4">
                <Box className='flex'>
                    <img className='darkCircle' />
                    <Typography className='customeName4'>Soham Kale</Typography>
                    <Typography className='paragra'>03-03-2024</Typography>
                    <Typography className='amount2'>10,000.00</Typography>
                </Box>
            </div>

            <Box sx={{mt: "10px"}} className="name4">
                <Box className='flex'>
                    <img className='darkCircle' />
                    <Typography className='customeName4'>Harsh Kale</Typography>
                    <p className='paragra'>03-03-2024</p>
                    <Typography className='amount2'>10,000.00</Typography>
                </Box>
            </Box>

            <Box className='bottom'>
                <ul>
                    <li><button onClick={homePage}>Home</button></li>
                    <li><button onClick={customerPage}>Customers</button></li>
                    <li><button onClick={duesPage}>Dues</button></li>
                    <li><button onClick={AccountPage}>Account</button></li>
                </ul>
            </Box>
        </>
    )
}

export default Home;