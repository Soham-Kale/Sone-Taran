import image from "./asset/soham.png"
import { useNavigate } from 'react-router-dom'
import './newLoan.css'

const NewLoan = () => {
    return (
        <div>
            <AddLoan/>
        </div>
    )
}

function AddLoan() {
    const loanProfile = useNavigate();
    function loanProfilePage() {
        loanProfile('/LoanProfile');
    }
    return (
        <div>
            <CustProfile/> <br />
            <InputField/> <br />
            <Interest/>  <br />
            <div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <button onClick={loanProfilePage} className='btn6'><span>Save</span></button>
                <button className='btn5'><span>Edit</span></button>       
            </div>     
        </div>
    )
}

function CustProfile() {
    return(
        <>
            <div className="names2">
                <img className='sohamImg2' src={image} alt="soham" /> <span> </span>
                <div style={{paddingBottom: "10px", marginLeft: "25%", marginTop: "-15px"}}> 
                    <h6 className='customerName3'>Soham Kale</h6>
                    <h6 className='number2'>7728527871</h6>
                </div>
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
            <div className='sizeOfBox2'>
                <Input/>
                <label className='label3'>Item Name<span style={style}>*</span> :</label> <br />
                <input className='input3' type="text" />
                <Input2/>
                <Input3/>
                {/* <div class="form-group">
                    <label className='label1'>Add Images<span style={style}>*</span> :</label> <br />
                    <input className='input1' type="text" />
                </div> */}

                <div className='imagesPhoto'>
                    <div className='combination'>
                        <h5 className='imgTags'>Images:</h5>                      
                        <h5 className='imgTags2'>View All</h5>
                    </div>
                    <img className='photos'/>
                    <img className='photos'/>
                    <img className='photos'/>
                </div>
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
                {/* <h6 className='last'>Interest Type : <span>Compound Interest</span></h6> */}
            </div>
        </>
    )
}

export default NewLoan;