import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import './closeLoan.css'
import { useNavigate } from 'react-router-dom';

function closeLoan() {

    const circle = useNavigate();
    function circlePage() {
        circle('/LoanProfile');
    }

    return (
        <div>
            <h6 className='tag'><Button onClick={circlePage} sx={{
            color:"#FFD500", 
            marginRight: "-20px",
            "&:hover":{backgroundColor:'transparent'}
            }}><KeyboardBackspace/></Button> &nbsp; Close Loan</h6><br /> 
            <Box3/>
        </div>
    )
}

function Box3() {
    return(
        <>
            <div className='stypeInput'>
                <div className='tagsCombo'>
                    <h6 className='bold'><span>#1002</span></h6>
                    <h6 className='multipleDate'>01-01-2024  To  01-06-2024</h6>
                </div>

                <table className=''>
                    <tr>
                        <td className='tableStyle'>Principal Amount</td>
                        <td className='tableStyle'>Interset Type</td>
                        <td className='tableStyle'>Interset</td>
                        <td className='tableStyle'>Tenure</td>
                    </tr>
                    <tr>
                        <td>20,000.00</td>
                        <td>SIMPLE</td>
                        <td>2.5%</td>
                        <td>25 Months</td>
                    </tr>
                </table>
            </div>

            <div className='flexBox'>
                <h6 className='closeDate'>Close Date : </h6>
                <input className='month' type="date" />

                <h6 className='closeDate'>Discount on Interest : </h6>
                <h6 className='month'>1000</h6>
            </div>

            <div className='calculate'>
                <p className='principal'>Principal Remaining :</p>
                <h4 className='actulaAmount'><span>2,000.00</span></h4>
            </div>

            <div className='calculate'>
                <p className='principal'>Interest Remaining : :</p>
                <h4 className='actulaAmount'><span>1,000.00</span></h4>
            </div>

            {/* <button className='cloLoan'><span>Close Loan</span></button> */}
            <Box display='flex' alignItems='center' justifyContent='center' sx={{ marginTop: '55px' }}>
                    <Button
                        variant="contained"
                        // onClick={goNext}
                        sx={{
                            backgroundColor: "#FFD500",
                            width: '239px',
                            height: '55px',
                            marginTop: "-20px",
                            borderRadius: '20px',
                            boxShadow: 'none',
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: '600', fontSize: '21px', fontFamily: 'Inter' }}
                        >
                            Close Loan
                        </Typography>
                    </Button>
                </Box>
        </>
    )
}

export default closeLoan;