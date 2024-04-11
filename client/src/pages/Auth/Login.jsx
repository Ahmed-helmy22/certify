import customFetch from "../../utils/customFetch";
import Wrapper from "./../../assets/wrappers/RegisterAndLoginPage";
import WrapperSelect from "../../assets/wrappers/checkBoxWrapper";
import FormRowSelect from "../../components/FormRowSelect";
import { toast } from "react-toastify";

import { USER_TYPE } from "../../utils/constants";

import { FormRow, Logo } from "./../../components";
import {
  Form,
  redirect,
  useNavigation,
  Link,
  useActionData, 
} from "react-router-dom";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 9) {
    errors.msg = "password shall be not length than 9 numbers";
    toast.error(errors.msg);
    return errors;
  }
  try {
    if (data.userType === "candidate") {
      await customFetch.post("/candidate/login", data);
      toast.success("login successful");
      return redirect("/dashboard/candidate");

    } else if (data.userType === "academy") {
      await customFetch.post("/provider/login", data);
      toast.success("login successful academy");
      return redirect("/dashboard/provider");

    } else if (data.userType === "examiner") {
      await customFetch.post("/examiner/login", data);
      toast.success("login successful");
      return redirect("/dashboard/examiner");
    } else {
      errors.msg = "choose the corrct user type";
      toast.error(errors.msg);
      return errors;
    }
  } catch (error) {
    console.log(error);
    errors.msg = error?.response?.data?.message;
    toast.error(errors.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form" method="post">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="email"
          defaultValue="  "
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
        <FormRow type="password" name="password" defaultValue="1234567891" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "login"}
        </button>

        <div className="genderInput">
          <p>
            Forget password ?
            <Link to="/reset-password" className="member-btn">
              reset password
            </Link>
          </p>
          <p>
            Not a member ?
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Login;
