import { useNavigate } from "react-router-dom";
import image from "../asset/img.png"
import "./third.css"
import { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function ThirdPage() {

    const [businessName, setBusinessName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");

    const add = useNavigate();
    function next() {
        add('/Home');
    }

    return(
        <>
            <Box className='firstBox' sx={{ height: '100%' }}>
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
                            width: { lg: 500, sm: 370, xs: '80%' },
                            height: { lg: 450, sm: 350, xs: 'auto' },
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: '30px',
                    fontWeight: '700',
                    textAlign: 'center',
                    height: '45px',
                    marginTop: '-90px', // Move the "Register" text 40px above its current position
                }}>
                    Regi
                    <Box component="span" sx={{ color: '#FFD500' }}>ster</Box>
                </Typography>

                <Typography variant="h6"
                    sx={{
                        fontSize: '20px',
                        fontWeight: '600',
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        height: '25px',
                        marginBottom: '16px'
                    }}
                >Create your new account</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* <TextField id="outlined-basic" label="Business Name *" variant="outlined" />
                    <TextField id="outlined-basic" label="First Name *" sx={{ marginTop: '10px' }} variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name *" sx={{ marginTop: '10px' }} variant="outlined" />
                    <TextField id="outlined-basic" label="Mobile Number  *" sx={{ marginTop: '10px' }} variant="outlined" /> */}
                        <input type="text" className="inpBox" placeholder="   Business Name *" />
                        <input type="text" className="inpBox" placeholder="   First Name *"/>
                        <input type="text" className="inpBox" placeholder="   Last Name *"/>
                        <input type="text" className="inpBox" placeholder="   Mobile Number  *"/>
                </Box>

                <Typography sx={{
                    height: '5px',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    marginTop: '5px',
                    paddingLeft: '10px',
                    color: '#000000',
                    fontWeight: '400',
                    textAlign: 'center',
                }}>By signing up you agree to our
                    <Box component="span" sx={{ color: '#FFD500' }}> Terms & Conditions</Box> <br />
                    and <Box component="span" sx={{ color: '#FFD500' }}> Privacy Policy</Box>
                </Typography>

                <Box display='flex' alignItems='center' justifyContent='center' sx={{ my: 6 }}>
                    <Button variant='contained' onClick={next} sx={{ backgroundColor: "#FFD500", width: '230px', height: '45px', borderRadius: '20px', boxShadow: 'none' }}>
                        <Typography sx={{
                            color: 'white',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontWeight: '700',
                        }}>Sign Up</Typography>
                    </Button>
                </Box>

                <Typography sx={{
                    height: '5px', fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '400',
                    textAlign: 'center',
                    marginTop: "-40px"
                }}>Already have an Account?  <Button onClick={next} sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '400',
                    textAlign: 'center',
                    color: ' #FFD500',
                }}>Log In</Button></Typography>
            </Grid>
        </Box>
        </>
    )
}

export default ThirdPage;