import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import image from "../asset/soham.png"
import { Button,Box,Typography } from '@mui/material'
import { KeyboardBackspace } from '@mui/icons-material'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';


function Dues() {
    const dues = useNavigate();
    function duesPage() {
        dues('/Dues');
    }

    const customer = useNavigate();
    function customerPage() {
        customer('/CustomerPage');
    }

    const past = useNavigate();
    function PastPage() {
        past('/PastDues');
    }
    const account = useNavigate();
    function accountPage() {
        account('/Account');
    }

    const [selected,isSelected]=useState(false);
    const [active,isActive]=useState(false);

    const onPastDueClick=()=>{
        isSelected(true) 
        isActive(false)
        past('/PastDues');
    }

    const onUpcomingDueClick=()=>{
        isSelected(false)
        isActive(true)
        dues('/Dues');
    }

    return (
        <div>
            <h6 className='tag'><Button onClick={duesPage} sx={{
                color:"#FFD500",   
                marginRight: "-20px" 
            }}><KeyboardBackspace/></Button> &nbsp; Past Dues</h6><br />

            <Box sx={{
                backgroundColor:"#FFFFFF", 
                boxShadow:'2',
                // width:"20%",
                width: { lg: '20%', sm: '60%', xs: '90%' },
                margin:'auto',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                padding:"3px",
                borderRadius:20}}>
                <Button variant='outlined' style={{border:'none',color:'black'}}sx={{backgroundColor:active?'#FFD500':'#00000 ',borderRadius:20 ,}} onClick={()=>{onUpcomingDueClick}}><Typography>Upcoming Dues</Typography></Button>
                <Button variant='outlined' style={{border:'none',color:'black'}}sx={{backgroundColor:selected?'#FFD500':'#00000 ', borderRadius:20}} onClick={()=>{onPastDueClick}}><Typography>Past Dues</Typography></Button>
            </Box> <br />

            <input className='search2' type="text" placeholder='    Search'/>
            <h3 className='date'>16-03-2024</h3>

            <People/> <br />
            <People2/> <br />
            <People3/>

            <h3 className='date'>15-03-2024</h3> 
            <People/>

            <div className='bottom'>
                <ul>
                    <li><button>Home</button></li>
                    <li><button onClick={customerPage}>Customers</button></li>
                    <li><button onClick={duesPage}>Dues</button></li>
                    <li><button onClick={accountPage}>Account</button></li>
                </ul>
            </div>
        </div>
    )
}

function People() {
    return(
        <>
            <div className="names">
                <img className='sohamImg' src={image} alt="soham" /> 
                <h6 className='customerName'>Soham Kale</h6>
                <h6 className='amount'>10,000.00</h6>
                <div className='createCircle'> 
                    <h3 className='circle'></h3>
                    <h3 className='circle'></h3>
                    <h3 className='circle'></h3>
                </div>
            </div>
        </>
    )
}


function People2() {
    return(
        <>
            <div className="names">
                <img className='sohamImg' src={image} alt="soham" /> 
                <h6 className='customerName'>Harsh Kale</h6>
                <h6 className='amount'>10,000.00</h6>
                <div className='createCircle'> 
                    <h3 className='circle'></h3>
                    <h3 className='circle'></h3>
                    <h3 className='circle'></h3>
                </div>
            </div>
        </>
    )
}


function People3() {
    return(
        <>
            <div className="names">
                <img className='sohamImg' src={image} alt="soham" /> 
                <h6 className='customerName'>Om Dixit</h6>
                <h6 className='amount'>10,000.00</h6>
                <div className='createCircle'> 
                    <h3 className='circle'></h3>
                    <h3 className='circle'></h3>
                    <h3 className='circle'></h3>
                </div>
            </div>
        </>
    )
}

export default Dues;