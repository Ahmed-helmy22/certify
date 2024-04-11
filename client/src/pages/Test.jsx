import React from 'react'
import { useMultiSepFrom } from '../assets/hooks/useMultiStepFrom'
import LastStepForm from '../components/forms/GeneralLastStepForm'
import ApproverPersonal from '../components/forms/ApproverPersonal'
import CandiatePersonalInfomration from './../components/forms/CandiatePersonalInfomration';

const Test = () => {
  const {  steps ,  currentStepIndex}   = useMultiSepFrom([<CandiatePersonalInfomration/> , <ApproverPersonal/> , <LastStepForm/> ])
  return (
    <div>
        <form action="">
        {currentStepIndex + 1 } / { steps.length }
        </form>
    </div>
  )
}

export default Test