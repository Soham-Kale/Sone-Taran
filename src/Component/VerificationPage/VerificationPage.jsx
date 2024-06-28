import image from "../asset/img.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./verification.css"
import { Box, Typography, Button, Grid } from "@mui/material";

function VerificationPage({currentNumber}) {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    // const [otpValue, setOtpValue] = useState("");

    const add = useNavigate();
    function nextPage() {
        add('/Home');
    }

    function handleChange(e, index) {
        if (isNaN(e.target.value)) return false
        setOtp([...otp.map((data, indx) => (indx === index ? e.target.value : data))])

        if (e.target.value == "") {
            e.target.previousSibling.focus();
        }

        if (e.target.value && e.target.nextSibling) {
            e.target.nextSibling.focus();
        }
    }

    return (
        <>
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

            <Typography sx={{width: '150px', height: '30px', paddingTop: '10px', textAlign: 'left', marginLeft: '30px',
                fontFamily: 'Poppins',  fontSize: '22px', fontWeight: '600',  color: ' #FFD500'}}>
                    Enter OTP</Typography>

            <Typography sx={{width: '370px',height: '40px',
                fontFamily: 'Poppins',
                fontSize: '15px',
                marginLeft: '30px',
                fontWeight: '500',
                paddingTop: '15px',
                textAlign: 'left',
                marginBottom: '15px',
                color:' #575757'
            }}>An 4 digit code has been sent to your +91{currentNumber}</Typography>

            <Box className="otp-area">
            {
                otp.map((data, i) => {
                    return <input 
                    type="text" 
                    value={data} 
                    maxLength={1}
                    onChange={(e) => handleChange(e, i)}/>
                })
            }
            </Box>

            {/* <Box>
                <Typography 
                    sx={{ height: '20px',
                        fontFamily: 'Poppins',
                        fontSize: '17px',
                        fontWeight:' 500',
                        textAlign: 'center',
                        marginBottom: '50px'}}
                >You should recieve the OTP in 
                <Typography
                sx={{ color: '#ED6400',
                    fontSize: '20px',
                    fontWeight: '550',
                    fontFamily: 'Poppins',
                    lineHeight: '19.5px',
                    textAlign: 'center'}}>
                    30 Second</Typography>
                </Typography>
            </Box> */}

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
                        You should recieve the OTP in 
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: { lg: '15px', md: '14px', sm: '13px', xs: '12px' },
                            fontWeight: '400',
                            textAlign: 'center',
                            color: '#FFD500',
                            ml: 1,
                        }}
                    >
                        30 Second
                    </Typography>
                </Box>

            <Box display='flex' alignItems='center' justifyContent='center' sx={{my:1}}>
                    <Button variant='contained' onClick={nextPage} sx={{backgroundColor: "#FFD500", width: '235px', height: '50px', borderRadius: '20px', boxShadow: 'none'}}>
                        <Typography sx={{color: 'white',
                                fontFamily: 'Inter',
                                fontSize: '18px',
                                fontWeight: '700',
                        }}>Verify</Typography>
                    </Button>
            </Box>   
            </Grid>
            </Box>

            {/* <Box sx={{ height: '100%', px: { xs: 2, sm: 4, md: 6 }, py: { xs: 4, sm: 6, md: 8 } }}>
                <Grid
                    container
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
                                width: { lg: 500, sm: 370, xs: '100%' },
                                height: { lg: 450, sm: 350, xs: 'auto' },
                                objectFit: 'cover',
                            }}
                        />
                    </Grid>

                    <Typography
                        sx={{
                            width: { xs: 'auto', sm: '150px' },
                            height: '30px',
                            pt: '20px',
                            textAlign: { xs: 'center', sm: 'left' },
                            ml: { xs: 0, sm: '30px' },
                            fontFamily: 'Poppins',
                            fontSize: { xs: '18px', sm: '22px' },
                            fontWeight: '600',
                            color: '#FFD500',
                            mt: { xs: 3, sm: 4, md: 5 },
                        }}
                    >
                        Enter OTP
                    </Typography>

                    <Typography
                        sx={{
                            width: { xs: 'auto', sm: '246px' },
                            height: 'auto',
                            fontFamily: 'Poppins',
                            fontSize: { xs: '15px', sm: '17px' },
                            ml: { xs: 0, sm: '30px' },
                            fontWeight: '500',
                            pt: '30px',
                            textAlign: { xs: 'center', sm: 'left' },
                            mb: { xs: 3, sm: 6 },
                            color: '#575757',
                        }}
                    >
                        A 4 digit code has been sent to your phone number
                    </Typography>

                    <Box className="otp-area" sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 3, sm: 4 } }}>
                        {otp.map((data, i) => (
                            <input
                                key={i}
                                type="text"
                                value={data}
                                maxLength={1}
                                onChange={(e) => handleChange(e, i)}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    margin: '0 5px',
                                    textAlign: 'center',
                                    fontSize: '20px',
                                    border: '1px solid #ccc',
                                    borderRadius: '5px',
                                }}
                            />
                        ))}
                    </Box>

                    <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 4 } }}>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: { xs: '15px', sm: '17px' },
                                fontWeight: '500',
                                mb: 1,
                            }}
                        >
                            You should receive the OTP in
                        </Typography>
                        <Typography
                            sx={{
                                color: '#ED6400',
                                fontSize: { xs: '18px', sm: '20px' },
                                fontWeight: '550',
                                fontFamily: 'Poppins',
                            }}
                        >
                            30 Seconds
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" justifyContent="center" sx={{ my: { xs: 4, sm: 6 } }}>
                        <Button
                            variant="contained"
                            onClick={nextPage}
                            sx={{
                                backgroundColor: '#FFD500',
                                width: { xs: '180px', sm: '239px' },
                                height: { xs: '45px', sm: '55px' },
                                borderRadius: '20px',
                                boxShadow: 'none',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    fontFamily: 'Inter',
                                    fontSize: { xs: '18px', sm: '20px' },
                                    fontWeight: '700',
                                }}
                            >
                                Verify
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Box> */}

        </>
    )
}

export default VerificationPage;