import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import image from '../asset/img.png'
import { useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import './second.css'

const SecondPage = ({setCurrentNumber=()=>{}}) => {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [disable, setDisable] = useState(true);

    const otpPage = useNavigate();
    function goNext() {
        otpPage('/verificationPage');
    }
    const accountPage = useNavigate();
    function createAccount() {
        accountPage('/thirdPage');
    }
    const navigate = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };


    const handleSubmit =(e)=> {
        e.preventDefault(e);
        setCurrentNumber(phoneNumber)
        if(phoneNumber.length == ""|| phoneNumber.length>10||phoneNumber.length<10){
            setDisable(true);
            alert("Please enter a valid number");
        }else{
            navigate('/verificationPage')
        }

        axios.post("https://girvi-backend-v1.onrender.com/login", {
            phoneNumber: phoneNumber,
            header,
        })
        .then((resp) => console.log(resp.data) )
        .catch((error) => console.log(error))

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
                            height: { lg: 460, sm: 350, xs: 'auto' },
                            objectFit: 'cover',
                        }}
                    />
            </Grid>

                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: { lg: 4, md: 3, sm: 2, xs: 1 } }}>
                    <Typography
                        variant="h2"
                        sx={{
                            width: { lg: '330px', md: '300px', sm: '280px', xs: '240px' },
                            height: { lg: '33px', md: '30px', sm: '28px', xs: '24px' },
                            fontFamily: 'Poppins',
                            fontSize: { lg: '34px', md: '30px', sm: '26px', xs: '22px' },
                            fontWeight: '700',
                            textAlign: 'center',
                            lineHeight: { lg: '45px', md: '40px', sm: '36px', xs: '32px' },
                            color: '#FFD500',
                        }}
                    >
                        Welcome back
                    </Typography>
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: { lg: 2, md: 2, sm: 2, xs: 1 } }}>
                    <Typography
                        sx={{
                            width: { lg: '285px', md: '260px', sm: '240px', xs: '200px' },
                            height: { lg: '25px', md: '23px', sm: '22px', xs: '20px' },
                            textAlign: 'center',
                            fontFamily: 'Poppins',
                            fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' },
                            fontWeight: '400',
                            color: '#000000',
                        }}
                    >
                        Login to your account
                    </Typography>
                </Box>

                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: { lg: 2, md: 2, sm: 2, xs: 1 } }}>
                    <TextField
                        required
                        type='number'
                        onChange={(e) => {setPhoneNumber(e.target.value); setDisable(false)}}
                        name='number'
                        value={phoneNumber.number}
                        id="outlined-basic"
                        label="Enter phone number"
                        variant="outlined"
                        sx={{ width: { lg: '300px', md: '280px', sm: '260px', xs: '240px' }, mt: '20px' }}
                    />
                </Box>

                <Box display='flex' alignItems='center' justifyContent='center' sx={{ marginTop: '55px' }}>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        // onClick={goNext}
                        sx={{
                            backgroundColor: "#FFD500",
                            width: '239px',
                            height: '55px',
                            marginTop: "-20px",
                            borderRadius: '20px',
                            boxShadow: 'none',
                        }}
                        disabled = {disable}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: '600', fontSize: '21px', fontFamily: 'Inter' }}
                        >
                            Get OTP
                        </Typography>
                    </Button>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: { lg: 3, md: 3, sm: 2, xs: 2 }}}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { lg: '15px', md: '14px', sm: '13px', xs: '12px' },
                            fontWeight: '400',
                            textAlign: 'center',
                        }}
                    >
                        Don’t have an Account?
                    </Typography>
                    <Button
                        onClick={createAccount}
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { lg: '15px', md: '14px', sm: '13px', xs: '12px' },
                            fontWeight: '400',
                            textAlign: 'center',
                            color: '#FFD500',
                            ml: 1,
                        }}
                    >
                        Create Account
                    </Button>
                </Box>
            </Grid>
        </Box>

    )
}

export default SecondPage;