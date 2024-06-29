import image from './asset/soham.png'
import { useNavigate } from 'react-router-dom'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import './customer.css'
import { KeyboardBackspace } from '@mui/icons-material'


function CustomerPage() {
  const add = useNavigate();
  function addPage() {
    add('/AddCustomer');
  }

  const dues = useNavigate();
  function duesPage() {
    dues('/Dues');
  }

  const account = useNavigate();
  function accountPage() {
    account('/Account');
  }
  const home = useNavigate();
  function HomePage() {
    home('/Home');
  }

  return (
    <Box>
      <h6 className='tag'><Button onClick={HomePage} sx={{
        color:"#FFD500",
        marginRight: "-20px",
        "&:hover":{backgroundColor:'transparent'}
      }}><KeyboardBackspace/></Button> &nbsp; Customer</h6>
      
      <input className='search' type="text" placeholder='    Search'></input>
      <Box  display='flex' flexDirection='column'>
        <People/> 
        <People1/>
        <People2/>
      </Box>
      <button onClick={addPage} className='plusBtn'><AddIcon  className='plus'/></button>
      <Box className='bottom'>
        <ul>
          <li><button onClick={HomePage}>Home</button></li>
          <li><button onClick={CustomerPage}>Customers</button></li>
          <li><button onClick={duesPage}>Dues</button></li>
          <li><button onClick={accountPage}>Account</button></li>
        </ul>
      </Box>
    </Box>
  )
}


function People() {
  const profile = useNavigate();
  function profilePage() {
    profile('/Profile');
  }
  return(
    <>
      <Button onClick={profilePage} className='styleForBtn' sx={{"&:hover":{backgroundColor:'transparent'}}}>
        <Box className="names">
            <img className='sohamImg' src={image} alt="soham" /> 
            <Box sx={{marginLeft: "20%", marginTop: "-6px"}}>
              <Typography className='customerName'>Soham Kale</Typography>
              <Typography className='number'>7728527871</Typography>
            </Box>
        </Box>   <br />
      </Button>
    </>
  )
}

function People1() {
  const profile = useNavigate();
  function profilePage() {
    profile('/Profile');
  }
  return(
    <>
    <Button onClick={profilePage} className='styleForBtn'sx={{"&:hover":{backgroundColor:'transparent'}}} >
      <Box className="names">
            <img className='sohamImg' src={image} alt="soham" /> 
            <Box sx={{marginLeft: "20%", marginTop: "-6px"}}>
              <Typography className='customerName'>Harsh Kale</Typography>
              <Typography className='number'>8973542621</Typography>
            </Box>
      </Box> <br />
    </Button>
    </>
  )
}

function People2() {
  const profile = useNavigate();
  function profilePage() {
    profile('/Profile');
  }
  return(
    <>
    <Button  onClick={profilePage} className='styleForBtn' sx={{"&:hover":{backgroundColor:'transparent'}}}>
      <Box className="names">
            <img className='sohamImg' src={image} alt="soham" /> 
            <Box sx={{marginLeft: "20%", marginTop: "-6px"}}>
              <Typography className='customerName'>Om Dixit</Typography>
              <Typography className='number'>9274353652</Typography>
            </Box>
      </Box>
    </Button>
    </>
  )
}

export default CustomerPage;