import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { useState } from "react";

import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import WrapperSelect from "../../assets/wrappers/checkBoxWrapper";
import FormRowSelect from "../../components/FormRowSelect";
import FormRow from "../../components/FormRow";

import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { ACADEMY_PROVIDER_TYPE } from "../../utils/constants";

export const action = async ({ request }) => {
  console.log(request);
  //   profession  
//       examinerVerificationPhoto    
//     examinerVerificationPhoto    
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
    console.log(data);
  try {
    await customFetch.post("/examiner/signup", data);
    toast.success("Registration successful");
    // redirect to register/email-verification
    return redirect("/register/email-verification");
  } catch (error) {
    //  error message
    toast.error(error?.response?.data?.message);

    return error;
  }
};

const RegisterApproverV2 = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [checkAgreement, setCheckAgreement] = useState(false);
  const handleCheckUserAgrrement = () => {
    setCheckAgreement(!checkAgreement);
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h3 style={{ textAlign: "center" }}>Examiner Registration</h3>
        <WrapperSelect>
          <FormRowSelect
            labelText="Please Choose the account Type"
            name="examinerType"
            list={[...Object.values(ACADEMY_PROVIDER_TYPE)]}
            className="dropListAcademy"
            classNameLabel="labelStyle"
          />
        </WrapperSelect>
        <hr />
        <div className="row-formRow">
          <FormRow
            type="text"
            name="firstName"
            labelText="firstname"
            defaultValue="ahmed"
            withLabel={true}
          />
          <FormRow
            type="text"
            name="middleName"
            labelText="middleName"
            defaultValue="aly"
            withLabel={true}
          />
          <FormRow
            type="text"
            name="familyName"
            labelText="family Name"
            defaultValue="nassar"
            withLabel={true}
          />
        </div>

        <div className="row-formRow">
          <FormRow
            type="date"
            name="DOBirth"
            labelText="Date Of birth"
            withLabel={true}
          />
          <div className="row-formRow">
            <div className="genderInput">
              <span>Gender</span>
              <div>
                <FormRow
                  type="radio"
                  key="male"
                  name="gender"
                  labelText="male"
                  defaultValue="male"
                  withLabel
                />
              </div>
              <div>
                <FormRow
                  type="radio"
                  key="female"
                  name="gender"
                  labelText="female"
                  defaultValue="female"
                  withLabel
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row-formRow">
          <div className="phoneCodeRow">
            <FormRow
              type="text"
              name="phoneCode"
              labelText="phone code"
              withLabel
              defaultValue="0123213123"
            />
            <FormRow
              type="text"
              name="phoneNumber"
              labelText="phone Number"
              withLabel
              defaultValue="0123213123"
            />
          </div>

          <FormRow
            type="text"
            name="occupation"
            labelText="occupation"
            defaultValue="chemist"
            withLabel={true}
          />
        </div>
        {/* ------------------------------- */}

        <hr />
        <>
          <div className="row-formRow">
            <FormRow
              type="text"
              name="address"
              labelText="address"
              defaultValue="maadi"
              withLabel={true}
            />
            <FormRow
              type="text"
              name="city"
              labelText="city"
              defaultValue="cairo"
              withLabel={true}
            />
            <FormRow
              type="text"
              name="country"
              labelText="country"
              defaultValue="cairo"
              withLabel={true}
            />

            <FormRow
              type="text"
              name="POBox"
              labelText="P.O Box"
              defaultValue="ccandidate POBox"
              withLabel={true}
            />

            <FormRow
              type="text"
              name="PassportNumber"
              labelText="passport number"
              defaultValue="PassportNumber"
              withLabel={true}
            />
          </div>

          <div className="row-formRow">
            <FormRow
              type="file"
              name="examinerProfilePhoto"
              accept="image/*"
              labelText="profile Photo"
              withLabel={true}
            />

            <FormRow
              type="file"
              name="examinerPassportPhoto"
              accept="image/*"
              labelText="Passport Photo"
              withLabel={true}
            />
            <FormRow
              type="file"
              name="examinerVerificationPhoto"
              accept="image/*"
              labelText="Verification Photo"
              withLabel={true}
            />
          </div>
          <textarea
            className=""
            name="profession"
            rows={5}
            style={{ padding: "1rem", borderRadius: "5px" }}
            defaultValue="My name is Ahmed Nassar and I have a background in the oil and gas industry. However, my passion lies in web development and I have been working to gain skills in this field. I am proficient in several technologies such as HTML, CSS, JavaScript, Bootstrap, Tailwind, ReactJS, NodeJS, MongoDB, Mongoose, APIs, and EJS.
I am highly motivated to continue learning and advancing my career in web development. To achieve this, I plan to create personal projects and contribute to open-source projects to gain experience and showcase my skills. I also intend to expand my skill set by learning new technologies and frameworks, taking online courses, attending workshops or meetups, and networking with other developers in the industry."
          ></textarea>
        </>

        <div className="row-formRow">
          <FormRow
            type="email"
            name="email"
            labelText="Email Address"
            defaultValue="ahmed.nassar855@gmail.com"
            withLabel={true}
          />
          <FormRow
            type="email"
            name="confirmEmail"
            labelText="Confirm Email Address"
            defaultValue="ahmed.nassar855@gmail.com"
            withLabel={true}
          />
        </div>
        <div className="row-formRow">
          <FormRow
            type="password"
            name="password"
            labelText="Password"
            defaultValue="1234567891"
            withLabel={true}
          />
          <FormRow
            type="password"
            name="confirmPassword"
            labelText="Confirm Password"
            defaultValue="1234567891"
            withLabel={true}
          />
        </div>

        <div className="row-checkLicense">
          <input
            type="checkbox"
            name="userAgreement"
            label="checkLicence Password"
            onChange={handleCheckUserAgrrement}
            value={checkAgreement ? true : false}
            checked={checkAgreement}
          />
          <p>
            By Checking this Box, you agree to the terms of our{" "}
            <span className="licenceAgreement">
              End-User-License Agreement (EULA)
            </span>
          </p>
        </div>

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>

        <p>
          Already a member ?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default RegisterApproverV2;
