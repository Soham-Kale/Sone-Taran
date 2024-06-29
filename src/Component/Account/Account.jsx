import { useNavigate } from 'react-router-dom'
import image from "./asset/soham.png"
import { Box, Button, List } from '@mui/material'
import { KeyboardBackspace, NavigateNext } from '@mui/icons-material'
import './account.css'

function Account() {
    const dues = useNavigate();
    function duesPage() {
        dues('/Dues');
    }
    const account = useNavigate();
    function accountPage() {
        account('/Account');
    }
    const home = useNavigate();
    function homePage() {
        home('/Home');
    }
    const customer = useNavigate();
    function customerPage() {
        customer('/CustomerPage');
    }

    return (
        <Box>
            <h6 className='tag'><Button onClick={homePage} sx={{
            color:"#FFD500",
            marginRight: "-20px"
            }}><KeyboardBackspace/></Button> &nbsp; Account</h6>
            <CustProfile/> <br /><br /><br />
            <Box1/>
            <Box2/>
            <Box3/>
            <Box4/>
            <Box5/>
            <Box6/>
            <Box className='bottom'>
                <ul>
                    <li><button onClick={homePage}>Home</button></li>
                    <li><button onClick={customerPage}>Customers</button></li>
                    <li><button onClick={duesPage}>Dues</button></li>
                    <li><button onClick={accountPage}>Account</button></li>
                </ul>
            </Box>
        </Box>
    )
}

function CustProfile() {
    return(
        <>
            <Box className="names2">
                <img className='sohamImg4' src={image} alt="soham" /> 
                <h1 className='customerName2'>Business Name</h1>
                <Box style={{paddingBottom: "10px"}}>
                    <h6 className='number3'>Soham Kale</h6>
                    <h6 className='number3'>7728527871</h6>
                </Box>
            </Box>
        </>
    )
}


function Box1() {
    const setting = useNavigate();
    function settingPage() {
        setting('/Setting');
    }
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h3 className='rectangle'></h3>
                <h6 className='customerName'>Settings</h6> 
                <Button className='iconStyle' onClick={settingPage}>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>
            </Box>
        </>
    )
}

function Box2() {
    const download = useNavigate();
    function DownloadReport() {
        download('/DownloadReport');
    }
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h6 className='customerName'>Download Report</h6> 
                <Button className='iconStyle'  onClick={DownloadReport}>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>
            </Box>
        </>
    )
}

function Box3() {
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h6 className='customerName'>Terms & Conditions</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>
            </Box>
        </>
    )
}

function Box4() {
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h6 className='customerName'>Privacy Policy</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>           
            </Box>
        </>
    )
}

function Box5() {
    const them = useNavigate();
    function toggle() {
        them('/ThemeToggle');
    }
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h6 className='customerName'>Dark mode</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>            
            </Box>
        </>
    )
}

function Box6() {
    return(
        <>
            <Box className="names" style={{marginBottom: "8px"}}>
                <h6 className='customerName'>Log Out</h6> 
                <Button className='iconStyle'>
                    <NavigateNext sx={{marginTop: "-15px", color: "black"}}/>
                </Button>            
            </Box>
        </>
    )
}

export default Account;