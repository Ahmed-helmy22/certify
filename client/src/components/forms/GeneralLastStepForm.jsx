import { useState } from "react";
import FormRow from "../FormRow";


const GeneralLastStepForm = ({formData , setFormData  }) => {

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      userAgreement: !formData.userAgreement, // Toggle the value
    });
    }
  
  
  // checkLicence: false,
  return (
    <>
      <div className="row-formRow">
        <FormRow
          type="email"
          name="email"
          labelText="Email Address"
          withLabel={true}
          value={formData.email}
          onChange={(event) =>
            setFormData({
              ...formData,
              email: event.target.value,
            })
          }
        
        />
        <FormRow
          type="email"
          name="confirmEmail"
          labelText="Confirm Email Address"
          withLabel={true}
          value={formData.confirmEmail}
          onChange={(event) =>
            setFormData({
              ...formData,
              confirmEmail: event.target.value,
            })
          }
         
        />
      </div>
      <div className="row-formRow">
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          withLabel={true}
          value={formData.password}
          onChange={(event) =>
            setFormData({
              ...formData,
              password: event.target.value,
            })
          }
        />
        <FormRow
          type="password"
          name="confirmPassword"
          labelText="Confirm Password"
          withLabel={true}
          value={formData.confirmPassword}
          onChange={(event) =>
            setFormData({
              ...formData,
              confirmPassword: event.target.value,
            })
          }
        />
      </div>

      <div className="row-checkLicense">
        <FormRow
          type="checkbox"
          name="userAgreement"
          labelText="checkLicence Password"
          checked={formData.userAgreement} 
          onChange={handleCheckboxChange}
        
        />
        <p>
          By Checking this Box, you agree to the terms of our{" "}
          <span className="licenceAgreement">
            End-User-License Agreement (EULA)
          </span>
        </p>
      </div>
      
    </>
  );
};

export default GeneralLastStepForm;
