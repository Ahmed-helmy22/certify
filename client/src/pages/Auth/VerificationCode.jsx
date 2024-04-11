import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import { FormRow } from "../../components";
import WrapperSelect from "../../assets/wrappers/checkBoxWrapper";
import FormRowSelect from "../../components/FormRowSelect";
import { toast } from 'react-toastify';

import { USER_TYPE } from "../../utils/constants";
import customFetch from "../../utils/customFetch";
import { Form, redirect, useNavigation, Link , useActionData} from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg : '' }
  
  if(data.verificationCode.length < 6 ) {
    errors.msg = 'Verification-Code shall be not length than 6 numbers'
    toast.error(errors.msg)
    return errors;
  }
  try {
    if (data.userType === "academy") {
      console.log(data.userType);
      await customFetch.post("/provider/verifyEmail", data);
      toast.success('verification successful')
      return redirect("/login");
    } else if (data.userType === "candidate") {
      console.log(data.userType);
      await customFetch.post("/candidate/verifyEmail", data);
      toast.success('verification successful')
      return redirect("/login");
    } else if (data.userType === "examiner") {
      console.log(data.userType);
      await customFetch.post("/examiner/verifyEmail", data);
      toast.success('verification successful')
      return redirect("/login");
    } else {
      toast.error('Verify your user type')
      return null;
    }
  } catch (error) {
    console.log(error);
    errors.msg = error?.response?.data?.message;
    console.log(errors.msg);
    toast.error(errors.msg)
    return error;
  }
};

const VerificationCode = () => {
  const errors = useActionData();
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="post">
        <h4>Verification code</h4>
        <FormRow
          type="email"
          name="email"
          
        />
        <WrapperSelect>
          <FormRowSelect
            labelText="Please Choose the account Type"
            name="userType"
            list={[...Object.values(USER_TYPE)]}
            className="dropListAcademy"
            classNameLabel="labelStyle"
          />
        </WrapperSelect>
        <FormRow type="text" name="verificationCode" />
        {errors?.msg && <p style={{color :'red'}}>{errors.msg}</p>}
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
              {isSubmitting ? 'submitting' : 'submit'}
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

export default VerificationCode;
