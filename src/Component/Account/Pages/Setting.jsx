import { Box, Button } from '@mui/material'
import { KeyboardBackspace, NavigateNext } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Setting() {
    const account = useNavigate();
    function accountPage() {
        account('/Account');
    }
    return (
        <Box>
            <h6 className='tag'><Button onClick={accountPage} sx={{
            color:"#FFD500",
            marginRight: "-20px"
            }}><KeyboardBackspace/></Button> &nbsp; Setting</h6> <br />
            <Box1/>
            <Box2/>
            <Box3/>
        </Box>
    )
}

function Box1() {
    return(
        <>
            <Box className="names">
                <h3 className='rectangle'></h3>
                <h6 className='customerName'>Get SMS</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>  
            </Box>
        </>
    )
}

function Box2() {
    return(
        <>
            <Box className="names">
                <h3 className=''></h3>
                <h6 className='customerName'>Get Notification</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>             
            </Box>
        </>
    )
}

function Box3() {
    return(
        <>
            <Box className="names">
                <h3 className=''></h3>
                <h6 className='customerName'>Delete Account?</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>             </Box>
        </>
    )
}

export default Setting