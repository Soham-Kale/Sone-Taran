import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  Home,
  FirstPage,
  SecondPage,
  ThirdPage,
  VerificationPage,
  CustomerPage,
  AddCustomer,
  Profile,
  ViewItem,
  PastDues,
  Dues,
  Account,
  AddLoan,
  Setting,
  DownloadReport,
  NewLoan,
  LoanProfile,
  CloseLoan,
  Interest,
  Principle,
  TopUp,
  OtpLogin
} from "./Component/index.js"
import { useState } from 'react';



function App() {

  const [currentNumber , setCurrentNumber] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/secondPage' element={<SecondPage setCurrentNumber={setCurrentNumber}/>}></Route>
        <Route path='/thirdPage' element={<ThirdPage/>}></Route>
        <Route path='/verificationPage' element={<VerificationPage currentNumber={currentNumber}/>}></Route> 
        <Route path='/customerPage' element={<CustomerPage/>}></Route>
        <Route path='/addCustomer' element={<AddCustomer/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/viewItem' element={<ViewItem/>}></Route>
        <Route path='/dues' element={<Dues/>}></Route>
        <Route path='/pastDues' element={<PastDues/>}></Route>
        <Route path='/Account' element={<Account/>}></Route>
        <Route path='/Setting' element={<Setting/>}></Route>
        <Route path='/DownloadReport' element={<DownloadReport/>}></Route>
        <Route path='/addLoan' element={<AddLoan/>}></Route>
        <Route path='/NewLoan' element={<NewLoan/>}></Route>
        <Route path='loanProfile' element={<LoanProfile/>}></Route>
        <Route path='closeLoan' element={<CloseLoan/>}></Route>
        <Route path='Interest' element={<Interest/>}></Route>
        <Route path='Principle' element={<Principle/>}></Route>
        <Route path='TopUp' element={<TopUp/>}></Route>
        <Route path='OtpLogin' element={<OtpLogin/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;