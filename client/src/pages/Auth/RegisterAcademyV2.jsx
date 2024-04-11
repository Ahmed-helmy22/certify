import { useState } from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import WrapperSelect from "../../assets/wrappers/checkBoxWrapper";
import FormRowSelect from "../../components/FormRowSelect";
import FormRow from "../../components/FormRow";

import { toast } from "react-toastify";

import { ACADEMY_PROVIDER_TYPE } from "../../utils/constants";
import customFetch from "./../../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const file = formData.get("badgePhoto");
  if (file) {
    data.badgePhoto = file;
  }
  try {
    await customFetch.post("/provider/signup", data);
    toast.success("Registration successful");
    // redirect to register/email-verification
    return redirect("/register/email-verification");
  } catch (error) {
    //  error message
    toast.error(error?.response?.data?.message);

    return error;
  }
};

const RegisterAcademyV2 = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [checkAgreement, setCheckAgreement] = useState(false);
  const handleCheckUserAgrrement = () => {
    setCheckAgreement(!checkAgreement);
  };

  return (
    <Wrapper>
      <Form method="post" className="form" >
        <WrapperSelect>
          <FormRowSelect
            labelText="Please Choose the account Type"
            name="providerType"
            list={[...Object.values(ACADEMY_PROVIDER_TYPE)]}
            className="dropListAcademy"
            classNameLabel="labelStyle"
          />
        </WrapperSelect>
        <hr />
        <FormRow name="logo" type="file" withLabel={true} />
        <FormRow
          type="text"
          name="OrganizationName"
          labelText="organizattion name"
          defaultValue="organization name"
          withLabel={true}
        />
        <FormRow
          type="text"
          name="address"
          labelText="organization Address"
          defaultValue="organization Address"
          withLabel={true}
        />
        <FormRow
          type="text"
          name="city"
          labelText="organization City"
          defaultValue="organization City"
          withLabel={true}
        />
        <div className="row-formRow">
          <FormRow
            type="text"
            name="country"
            labelText="organization Country"
            defaultValue="organization Country"
            withLabel={true}
          />
          <FormRow
            type="text"
            name="webSite"
            labelText="webSite"
            defaultValue="organization webSite"
            withLabel={true}
          />
          <div className="phoneCodeRow">
            <FormRow
              type="text"
              name="POBox"
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
        </div>
        <>
          <hr />
          <>
            <div>
              <FormRow
                type="file"
                name="adminProfilePhoto"
                accept="image/*"
                labelText="Personal Image"
                withLabel={true}
              />

              <div className="row-formRow">
                <FormRow
                  type="text"
                  name="firstName"
                  labelText="first Name"
                  defaultValue="first Name"
                  withLabel={true}
                />
                <FormRow
                  type="text"
                  name="middleName"
                  labelText="middle Name "
                  defaultValue="middle Name"
                  withLabel={true}
                />
                <FormRow
                  type="text"
                  name="familyName"
                  labelText="family name"
                  defaultValue="family Name"
                  withLabel={true}
                />
              </div>
              <div className="row-formRow">
                <div className="genderInput">
                  <span>Gender</span>
                  <div>
                    <FormRow
                      type="radio"
                      key="male"
                      name="adminGender"
                      labelText="male"
                      defaultValue="male"
                      withLabel
                    />
                  </div>
                  <div>
                    <FormRow
                      type="radio"
                      key="female"
                      name="adminGender"
                      labelText="female"
                      defaultValue="female"
                      withLabel
                    />
                  </div>
                </div>
                <FormRow
                  type="text"
                  name="adminRole"
                  labelText="role"
                  defaultValue="role"
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
                <div className="">
                  <FormRow
                    type="text"
                    name="adminPhoneNumber"
                    labelText="phone number"
                    defaultValue="01232123123"
                    withLabel
                  />
                </div>
              </div>
            </div>
          </>
          <hr />
          <>
            <div className="row-formRow">
              <FormRow
                type="text"
                name="adminAddress"
                labelText="address"
                defaultValue="adminAddress"
                withLabel={true}
              />
              <FormRow
                type="text"
                name="adminCountry"
                labelText="Country"
                defaultValue="adminCountry"
                withLabel={true}
              />
              <FormRow
                type="text"
                name="adminCity"
                labelText="city"
                defaultValue="adminCity"
                withLabel={true}
              />
              <FormRow
                type="text"
                name="adminPOBox"
                labelText="P.O Box"
                defaultValue="adminPOBox"
                withLabel={true}
              />
              <FormRow
                type="text"
                name="adminPassportNumber"
                labelText="passport number"
                defaultValue="adminPassportNumber"
                withLabel={true}
              />
            </div>

            <FormRow
              type="file"
              name="adminPassportPhoto"
              accept="image/*"
              labelText="Passport"
              withLabel={true}
            />
            <FormRow
              type="file"
              name="adminVerificationPhoto"
              accept="image/*"
              labelText="Verification Photo"
              withLabel={true}
            />
          </>

          <hr />
          <>
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

            <button
              type="submit"
              className="btn btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? "submitting" : "submit"}
            </button>

            <p>
              Already a member ?
              <Link to="/login" className="member-btn">
                Login
              </Link>
            </p>
          </>
        </>
      </Form>
    </Wrapper>
  );
};

export default RegisterAcademyV2;
