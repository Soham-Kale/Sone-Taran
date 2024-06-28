import { Box, Button } from '@mui/material';
import { KeyboardBackspace } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../Pages/report.css'

function DownloadReport() {
    const account = useNavigate();
    function accountPage() {
        account('/Account');
    }

    return (
        <Box>
            <h6 className='tag'><Button onClick={accountPage} sx={{
            color:"#FFD500",
            marginRight: "-20px"
            }}><KeyboardBackspace/></Button> &nbsp; Download Report</h6> <br />          
            <Date/>
            <Box1/>
            <Box2/>
            <Box3/>
        </Box>
    )
}

function Date() {
    return(
        <>
            <Box className='dates'>
                <Box className='styleBox' sx={{
                    marginTop: {lg: "39px", sm: "30px", xs: "34px"},
                    marginLeft: {lg: "38%" , sm: "15%", xs: "15%"}
                }}>
                    <span className='start'>Start Date :</span> <br />
                    <button className='startDate'><span>01-01-2024</span></button> 
                </Box>
                <Box className='secondBtn'>
                    <span className='start'>End Date :</span> <br />
                    <button className='startDate'><span>16-03-2024</span></button>  
                </Box>
            </Box>   
        </>
    )
}

function Box1() {
    return(
        <>
            <Box className="names1">
                <h6 className='customerName'>Customer List</h6> 
                <button className='buttonStyle'><span>Download</span></button>
            </Box>
        </>
    )
}

function Box2() {
    return(
        <>
            <Box className="names1">
                <h6 className='customerName'>Loans</h6> 
                <button className='buttonStyle'><span>Download</span></button>
            </Box>
        </>
    )
}


function Box3() {
    return(
        <>
            <Box className="names1">
                <h6 className='customerName'>Transactions</h6> 
                <button className='buttonStyle'><span>Download</span></button>
            </Box>
        </>
    )
}

export default DownloadReport