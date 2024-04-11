import { Link } from "react-router-dom";
import { useState } from "react";
import { useMultiSepFrom } from "../../assets/hooks/useMultiStepFrom";

import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";

import CandiatePersonalInfomration from "../../components/forms/CandiatePersonalInfomration";
import LastStepForm from "../../components/forms/GeneralLastStepForm";
import AddressForm from "../../components/forms/GeneralAddressForm";

const INITIAL_DATA = {
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

const RegisterCandidate = () => {
  const [ data , setData ] = useState(INITIAL_DATA);

  function updateFields(fields){
    setData( prev => {
      return {...prev , fields}
    } )
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiSepFrom([
      <CandiatePersonalInfomration key="first" {...data} updateFields={updateFields}/>,
      <AddressForm key="second" {...data}  updateFields={updateFields}/>,
      <LastStepForm key="third" {...data} updateFields={updateFields}/>,
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

        <div style={{ display: "flex", flexDirection: "row", gap: "1rem",justifyContent: "center",
            alignItems: "center", }}>
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
            justifyContent: "center",
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

export default RegisterCandidate;
