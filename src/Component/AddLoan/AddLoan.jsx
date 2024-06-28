import { useNavigate } from 'react-router-dom'
import image from "./asset/soham.png"
import { Box, Button, Typography } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import './loan.css'

function AddLoan() {
    const loan = useNavigate();
    function LoanPage() {
        loan('/Profile');
    }
    return (
        <div>
            <h6 className='tag'><Button onClick={LoanPage} sx={{
            color:"#FFD500", 
            marginRight: "-20px",
            "&:hover":{backgroundColor:'transparent'}
            }}><KeyboardBackspace/></Button> &nbsp; Add Loan</h6> 
            <CustProfile/> <br />
            <InputField/> <br />
            <Interest/>  <br />
            <Box display='flex' alignItems='center' justifyContent='center' sx={{ marginTop: '15px' }}>
                    <Button
                        variant="contained"
                        onClick={LoanPage}
                        sx={{
                            backgroundColor: "#FFD500",
                            width: '230px',
                            height: '50px',
                            borderRadius: '20px',
                            boxShadow: 'none',
                            marginBottom: '5px',
                        }}>

                        <Typography
                            variant="body1"
                            sx={{ fontWeight: '600', fontSize: '15px', fontFamily: 'Inter' }}
                        >
                        Create New Loan
                        </Typography>
                    </Button>
                </Box>
        </div>
    )
}

function CustProfile() {
    return(
        <>
            <div className="names2">
                <img className='custImg' src={image} alt="soham" /> 
                <div style={{paddingBottom: "10px", marginLeft: "25%"}}> 
                    <h6 className='customerName3'>Soham Kale</h6>
                    <h6 className='number2'>7728527871</h6>
                </ div>
            </div>
        </>
    )
}

function Input() {
    const style={color: 'red'};
    return(
        <>
        <div class="form-row">
            <div class="form-group">
                <label className='label1'>Loan Id<span style={style}>*</span> :</label> <br />
                <input className='input1' type="text" />
                </div>
                <div class="form-group">
                <label className='label1'>Amount<span style={style}>*</span> :</label> <br />
                <input className='input1' type="text" />
            </div>
        </div>
        </>
    )
}

function Input2() {
    const style={color: 'red'};
    return(
        <>
        <div class="form-row">
            <div class="form-group">
                <label className='label1'>Net Weight (gm)<span style={style}>*</span> :</label> <br />
                <input className='input1' type="text" />
                </div>
                <div class="form-group">
                <label className='label1'>Gross Weight (gm)<span style={style}>*</span> :</label> <br />
                <input className='input1' type="text" />
            </div>
        </div>
        </>
    )
}

function Input3() {
    const style={color: 'red'};
    return(
        <>
        <div class="form-row">
            <div class="form-group">
                <label className='label1'>Purity<span style={style}>*</span> :</label> <br />
                <input className='input1' type="text" />
                </div>
                <div class="form-group">
                <label className='label1'>Today’s Gold rate for 1gm<span style={style}>*</span> :</label> <br />
                <input className='input1' type="text" />
            </div>
        </div>
        </>
    )
}

function Input4() {
    const style={color: 'red'};
    return(
        <>
        <div class="form-row">
            <div class="form-group">
                <label className='label1'>Interest Calculated by<span style={style}>*</span></label> <br />
                <input className='input1' type="month" placeholder='Month' />
                </div>
                <div class="form-group">
                <label className='label1'>Interest (%)<span style={style}>*</span></label> <br />
                <input className='input1' type="text" />
            </div>
        </div>
        </>
    )
}

function  InputField() {
    const style={color: 'red'};
    return(
        <>
            <div className='sizeOfBox'>
                <Input/>
                <label className='label3'>Item Name<span style={style}>*</span> :</label> <br />
                <input className='input3' type="text" />
                <Input2/>
                <Input3/>
            </div>
        </>
    )
}

function Interest() {
    const style={color: 'red'};
    return(
        <>
            <div className='lastDiv'>

                <div className='combine'>
                    <h3 className='num'><span>#1001</span></h3>
                    <h6 className='impDate'>Start Date : 16-03-2024</h6>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label className='label1'>Tenure in<span style={style}>*</span></label> <br />
                        <input className='input1' type="month" placeholder='Month' />
                        </div>
                        <div class="form-group">
                        <label className='label1'>Tenure in<span style={style}>*</span></label> <br />
                        <input className='input1' type="text" />
                    </div>
                </div>
                <Input4/>
            </div>
        </>
    )
}

export default AddLoan;