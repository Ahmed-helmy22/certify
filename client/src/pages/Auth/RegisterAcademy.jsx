import { useState } from "react";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";

import AcademyOrganizationInformation from "../../components/forms/AcademyOrganizationInformation";
import AcademyOrApproverType from "../../components/forms/AcademyOrApproverType";
import AcademyResponsibleInformation from "../../components/forms/AcademyResponsibleInformation";
import GeneralAddressForm from "../../components/forms/GeneralAddressForm";
import GeneralLastStepForm from "../../components/forms/GeneralLastStepForm";

const INITIAL_DATA = {
  userAgreement: "",
  providerType: "",
  OrganizationName: "",
  address: "",
  city: "",
  country: "",
  webSite: "",
  POBox: "",
  email: "",
  password: "",
  phoneNumber: "",
  logo: "",

  providerAdminInfo: {
    firstName: "",
    middleName: "",
    familyName: "",
    adminGender: "",
    DOBirth: "",
    adminRole: "",
    adminPhoneNumber: "",

    adminAddress: "",
    adminCountry: "",
    adminPOBox: "",
    adminCity: "",
    adminPassportNumber: "",
    adminPassportPhoto: "",
    adminVerificationPhoto: "",
    adminProfilePhoto: "",
  },
};


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  return null;
};

const RegisterAcademy = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isChecked, setIsChecked] = useState(false);

  const FormPageTitle = [
    "Registration Academy",
    "Signup Academy",
    "Responsible Personnel Info.",
    "Responsible Address",
    "Complete Registration",
  ];

  const btnNextPage = (e) => {
    e.preventDefault();
    if (page < FormPageTitle.length - 1) {

      setPage((currPage) => currPage + 1);
    } else {
      setPage(FormPageTitle.length - 1);
    }
  };

  const btnPrevPage = (e) => {
    e.preventDefault();
    if (page > 0) {
      setPage((currPage) => currPage - 1);
    } else {
      setPage(0);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    // after confirm submit success fo tp verification code page
  };

  const FormDisplay = () => {
    if (page === 0) {
      return (
        <AcademyOrApproverType formData={formData} setFormData={setFormData} />
      );
    } else if (page === 1) {
      return (
        <AcademyOrganizationInformation
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 2) {
      return (
        <AcademyResponsibleInformation
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 3) {
      return (
        <GeneralAddressForm formData={formData} setFormData={setFormData} />
      );
    } else if (page === 4) {
      return (
        <GeneralLastStepForm
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>{FormPageTitle[page]}</h4>

        <div>{FormDisplay()}</div>

        <div className="page-btn">
          <div className="left-side">
            <p>
              {page} / {FormPageTitle.length - 1}
            </p>

            <button className="btn prev" onClick={btnPrevPage}>
              Prev
            </button>

            <button className="btn next" onClick={btnNextPage}>
              next
            </button>
          </div>

          {page === 4 && (
            <button type="submit" className="btn ">
              submit
            </button>
          )}
        </div>

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

export default RegisterAcademy;