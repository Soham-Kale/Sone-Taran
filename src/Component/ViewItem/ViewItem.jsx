import React from 'react'

const ViewItem = () => {
    return (
    <>
        <View/>
    </>
    )
}

function View() {
    return(
        <>
            <table className='table3'>
            <thead>
                <tr>
                    <td className='bold'><span>#1002</span></td>
                    <td>16-03-2024</td>
                    <td>20,000</td>
                    <td>2.5%</td>
                    <td>12 Months</td>
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
                <h6 className='view'>View items</h6>
            </div>

            <div>
                <img className='imag2' src="" alt="" />
                
            </div>

            </table>
        </>
    )
}

export default ViewItem;