import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "./addCustomer.css"

export const AddCustomer = () => {
  const style={color: 'red'};
  const loan = useNavigate();
  function loanPage() {
    loan('/AddLoan');
  }
  function customerPage() {
    loan('/CustomerPage');
  }

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

  return (
    <Box item component={Box} display='flex' flexDirection='column'>
        <h6 className='tag'><Button onClick={customerPage} sx={{
          color:"#FFD500",   
          marginRight: "-20px" 
        }}><KeyboardBackspace/></Button> &nbsp; ADD Customers</h6><br />        
        
        <img className='custProfile'></img>

        <label className='label'>First Name<span style={style}>*</span></label> <br />
        <input className='input' type="text" />
        <label className='label'>Last Name<span style={style}>*</span></label> <br />
        <input className='input' type="text" />
        <label className='label'>Contact Number<span style={style}>*</span></label> <br />
        <input className='input' type="text" />
        <label className='label'>Email<span style={style}>*</span></label> <br />
        <input className='input' type="text" />
        <label className='label'>Address<span style={style}>*</span></label> <br />
        <input className='input' type="text" />

          <Box sx={{}} className="frow">   
            {/* <div className="fgroup">   
              <label className='label1'>Upload Aadhaar Card :</label> <br />
              <input className='inputBo' type="text" />
            </div> 
            <div class="form-group">
              <label className='label1'>Upload PAN Card :</label> <br />
              <input className='inputBo' type="text" />
            </div> */}
            <Button
              sx={{
                marginTop: "15px",
                width:  {lg: "25%", sm: "28%", xs: "60%"},
                marginLeft: {lg: "-20%", sm: "-30%", xs:"-55px"},
                height: "40px",
                marginBottom: "20px"
              }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}

            >
              Aadhaar Card
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box> 

        <div class="flex-parent jc-center">
          <button onClick={loanPage} className='btn3'><span>Save & Create loan</span></button> &nbsp; &nbsp;  &nbsp; &nbsp;
          <button onClick={customerPage} className='btn4'><span>Save</span> </button> &nbsp; &nbsp;  &nbsp;&nbsp;
        </div>
    </Box>
  )
}

export default AddCustomer;