import {Box, Button, Typography} from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import './loanProfile.css'

function LoanProfile() {
    const circle = useNavigate();
    function circlePage() {
        circle('/addLoan');
    }
    const circleShape = useNavigate();
    function close() {
        circleShape('/closeLoan');
    }
    return (
        <div>
            <div style={{marginBottom: "40px"}}>
            <h6 className='tag'><Button onClick={circlePage} sx={{
            color:"#FFD500", 
            marginRight: "-20px",
            "&:hover":{backgroundColor:'transparent'}   
            }}><KeyboardBackspace/></Button> &nbsp;  Loan Profile</h6> &nbsp;&nbsp;

            <button onClick={close} className='smallCircle'></button>
            </div>
            <Box1/>
            <Table/>
            <Transaction/>
        </div>
    )
}

function Box1() {
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
        </>
    )
}

function Table() {
        return(
        <>
            <table className='tableRow'>
            <thead>
                <tr>
                <td># As on Date</td>
                <td className='data'>Principal</td>
                <td className='data2'>Interest</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className='data0'>Expected</td>
                <td className='data'><span>20,000.00</span></td>
                <td className='data2'><span>1,000.00</span></td>
                </tr>
                <tr>
                <td className='data0'>Paid</td>
                <td className='data'><h6>18,000.00</h6></td>
                <td className='data2'><h6>1,000.00</h6></td>
                </tr>
                <tr>
                <td className='data0'>Pending</td>
                <td className='data'><h5>2,000.00</h5></td>
                <td className='data2'><h5>0.00</h5></td>
                </tr>
            </tbody>
                <h6 className='interestRate'>Interest Amount : <span>250.00 </span>  per month </h6>
            </table>
            <h6 className='totalItem'><span>Total Items : 1</span></h6>
    </>
    )
}

function Transaction() {
    const Close = useNavigate();
    function closeLoan() {
        Close('/Interest');
    }
    return(
        <>
            <div className='rowWise'>
                <h2 className='transaction2'>Transactions</h2> &nbsp; &nbsp;
                <button onClick={closeLoan} className='transBtn'><span>Add Transaction</span></button>
            </div>

            <Box className="names3">
                <Box className='flex'>
                    <img className='darkCircle'/> 
                    <Typography className='customeName4'>03-03-2024</Typography>
                    <Typography className='paragra'>Principal Payment</Typography>
                    <Typography className='amount2'>10,000.00</Typography>
                </Box> 
            </Box> <br />

            <div className="names3">
                <div className='flex'>
                    <img className='darkCircle'/> 
                    <h6 className='customeName4'>03-03-2024</h6>
                    <p className='paragra'>Principal Payment</p>
                    <h6 className='amount2'>00,000.00</h6>
                </div>
            </div>
{/* 
            <div className="names3">
                <div className='flex'>
                    <img className='darkCircle'/> 
                    <h6 className='customeName4'>03-03-2024</h6>
                    <p className='paragra'>Interest Payment</p>
                    <h6 className='amount2'>00,000.00</h6>
                </div>
            </div> */}

            {/* <div className="names3">
                <div className='flex'>
                    <img className='darkCircle'/> 
                    <h6 className='customeName4'>03-03-2024</h6>
                    <p className='paragra'>Interest Payment</p>
                    <h6 className='amount2'>00,000.00</h6>
                </div>
            </div> */}
        </>
    )
}

export default LoanProfile;