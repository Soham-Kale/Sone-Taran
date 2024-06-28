import image from '../asset/img.png'
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { Box, Button, Grid, Typography } from "@mui/material";

const OtpLogin = () => {
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    function onSignup() {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }

    return (
        <Box sx={{ height: '100%' }}>
            <Grid
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ height: '100%' }}
            >
                <Grid contained>
                    <Box
                        component="img"
                        src={image}
                        sx={{
                            width: { lg: 500, md: 400, sm: 350, xs: '100%' },
                            height: { lg: 450, md: 360, sm: 330, xs: 'auto' },
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Toaster toastOptions={{ duration: 4000 }} />
                <Box id="recaptcha-container"></Box>
                {user ? (
                    <h2 className="text-center text-white font-medium text-2xl">
                        👍Login Success
                    </h2>
                ) : (
                    <Box >
                        {showOTP ? (
                            <>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    OTPLength={4}
                                    otpType="number"
                                    disabled={false}
                                    autoFocus
                                    className="opt-container "
                                ></OtpInput>

                                <Box display='flex' alignItems='center' justifyContent='center' sx={{ my: 1 }}>
                                    <Button variant='contained' onClick={onOTPVerify} sx={{ backgroundColor: "#FFD500", width: '235px', height: '50px', borderRadius: '20px', boxShadow: 'none' }}>
                                        <Typography sx={{
                                            color: 'white',
                                            fontFamily: 'Inter',
                                            fontSize: '18px',
                                            fontWeight: '700',
                                        }}>Verify</Typography>
                                    </Button>
                                </Box>
                            </>
                        ) : (
                            <>
                                <label
                                    htmlFor=""
                                    style={{ backgroundColor: "black" }}
                                >
                                    Verify your phone number
                                </label>
                                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: { lg: 5, md: 4, sm: 3, xs: 2 } }}>
                                    <Button
                                        variant="contained"
                                        onClick={onSignup}
                                        sx={{
                                            backgroundColor: '#FFD500',
                                            width: { lg: '239px', md: '220px', sm: '200px', xs: '180px' },
                                            height: { lg: '50px', md: '45px', sm: '40px', xs: '35px' },
                                            borderRadius: '20px',
                                            boxShadow: 'none',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: 'white',
                                                fontFamily: 'Inter',
                                                fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' },
                                                fontWeight: '700',
                                            }}
                                        >
                                            Get OTP
                                        </Typography>
                                    </Button>
                                </Box>
                            </>
                        )}
                    </Box>
                )}
            </Grid>
        </Box>
    );
};

export default OtpLogin;
