import { Box, Button, Typography } from '@mui/material'
import { KeyboardBackspace, Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'
import image from "./asset/soham.png";
import "./profile.css";

function Profile() {
  const customer = useNavigate();
  function customerPage() {
    customer('/CustomerPage');
  }

  return (
    <Box>
      <Typography sx={{marginLeft: "-50%", marginTop: "20px"}} className='tag'><Button onClick={customerPage} sx={{
        color:"#FFD500", 
        marginRight: "-20px",
        "&:hover":{backgroundColor:'transparent'} 
      }}><KeyboardBackspace/></Button> &nbsp; Profile</Typography><br /> 
      <CustProfile/>
      <Table/>
      <Loan/>
      <Table2/> <br />
      <Table3/>
    </Box>
  )
}

function CustProfile() {
  return(
    <>
      <Box sx={{marginTop: "-20px"}} className="names2">
        <img className='sohamImg2' src={image} alt="soham" /> 
        <div style={{paddingBottom: "10px", marginLeft: "25%"}}> 
          <h6 className='customerName3'>Soham Kale</h6>
          <h6 className='number2'>7728527871</h6>
        </ div>
      </Box>
    </>
  )
}

function Table() {
  return(
    <>
      <table className='table2'>
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
      </table>
    </>
  )
}

function Loan() {

  const loan = useNavigate();
  function loanPage() {
    loan('/addLoan');
  }

  return(
    <>
    <Box className='loanSection'>
      <h3 className='loan'>Loans</h3>
      <button onClick={loanPage} className='but'><span>Add Loan</span></button>
    </Box>
    </>
  )
}

function Table2() {
  const viewItem = useNavigate();
  function viewItemPage() {
    viewItem('/ViewItem');
  }
  return(
    <>
      <table className='table3'>
        <thead>
          <tr>
            <td className='bold'><span>#1002</span></td>
            <td className='bold0'>16-03-2024</td>
            <td className='bold0'>20,000</td>
            <td className='bold0'>2.5%</td>
            <td className='bold0'>12 Months</td>
          </tr>
          <tr>
            <td>#</td>
            <td className='data'>Principal</td>
            <td className='data2'>Interest</td>
          </tr>
        </thead>
        <tbody>
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

        <div className='bottom2'>
          <h5 className='interest'>Interest : 250.00 (per month)</h5>
          <button onClick={viewItemPage}  className='view'>View items</button>
      </div>
      </table>
    </>
  )
}

function Table3() {
  const viewItem = useNavigate();
  function viewItemPage() {
    viewItem('/ViewItem');
  }
  function AddLoanPage() {
    viewItem('/NewLoan');
  }
  return(
    <>
      <table className='table3'>
        <thead>
          <tr>
            <td className='bold1'><span>#1001</span></td>
            <td>16-03-2024</td>
            <td>20,000</td>
            <td>2.5%</td>
            <td>6 Months</td>
          </tr>
          <tr>
            <td>#</td>
            <td className='data'>Principal</td>
            <td className='data2'>Interest</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='data0'>Paid</td>
            <td className='data'><h6>18,000.00</h6></td>
            <td className='data2'><h6>1,000.00</h6></td>
          </tr>
          <tr>
            <td className='data0'>Pending</td>
            <td className='data'><h5>2,000.00</h5></td>
            <td className='data2'><h5>0.00</h5></td>
            <Button onClick={AddLoanPage}> <Add  sx={{border: '0.3px solid #FFD500 ', borderRadius: "100px", color: "#FFD500"}}/> </Button>
          </tr>
        </tbody>

        <div className='bottom2'>
          <h5 className='interest'>Interest : 250.00 (per month)</h5>
          <button onClick={viewItemPage}  className='view'>View items</button>
      </div>

      </table>
    </>
  )
}

export default Profile;