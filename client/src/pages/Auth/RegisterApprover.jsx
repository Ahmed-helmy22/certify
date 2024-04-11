import { useState } from "react";
import { Link } from "react-router-dom";
import { useMultiSepFrom } from "../../assets/hooks/useMultiStepFrom";

import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import ApproverPersonal from "../../components/forms/ApproverPersonal";
import AddressForm from "../../components/forms/GeneralAddressForm";
import LastStepForm from "../../components/forms/GeneralLastStepForm";
import AcademyOrApproverType from "../../components/forms/AcademyOrApproverType";

const INITIAL_DATA = {
  type:"",
  firstName: "",
  middleName: "",
  lastName: "",
  age: "",
  gender: "",
  phoneCode: "",
  phoneNumber: "",
  occupation : "",
  address: "",
  city: "",
  country: "",
  poBox: "",
  candidateImage: "",
  idOrPassport: "",
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  checkLicence: ""
}


const RegisterApprover = () => {

  const [ data , setData ] = useState(INITIAL_DATA);

  function updateFields(fields){
    setData( prev => {
      return {...prev , fields}
    } )
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiSepFrom([
      <AcademyOrApproverType key="first" {...data} updateFields={updateFields}/>,
      <ApproverPersonal key="second" {...data} updateFields={updateFields}/>,
      <AddressForm key="third" {...data}  updateFields={updateFields}/>,
      <LastStepForm  key="fourth" {...data} updateFields={updateFields}/>,
    ]);

    function onSubmit(e) {
      e.preventDefault()
      if(!isLastStep) return  next();
      // finish compleetion
      // navigate to candidate profile page
    }

  
  return (
    <Wrapper>
       <form className="form" onSubmit={onSubmit}>
        
        {step}

        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          {!isFirstStep && (
            <button type="button" className="btn prev" onClick={back}>
              Prev
            </button>
          )}
          <button type="submit" className="btn next">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {currentStepIndex + 1} / {steps.length}
        </div>

        <p>
          Already a member ?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default RegisterApprover;
