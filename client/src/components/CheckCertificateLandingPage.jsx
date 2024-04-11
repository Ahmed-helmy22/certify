import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import {FormRow , Logo } from '../components/';
import { Link } from 'react-router-dom';

const CheckCertificateLandingPage = () => {
  return (
    <Wrapper>
    <form className='form'>
      <h4>Check Certificate</h4>
      <FormRow type="text" name="registrationNumber" labelText='certificate Regstration number' withLabel placeHolder='Enter certificate registration number'/>
    
      <button type='submit' className='btn btn-block'>submit</button>
      
  
    </form>
  </Wrapper>
  )
}

export default CheckCertificateLandingPage