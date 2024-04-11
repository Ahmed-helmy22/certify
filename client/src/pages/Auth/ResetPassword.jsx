import Wrapper from "./../../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "./../../components";
import { Link } from "react-router-dom";


const ResetPassword = () => {
  return (
    <Wrapper>
    <form className="form">
      <Logo />
      <h4>Reset Password</h4>
      <FormRow type="emal" name="email" defaultValue="ahmed@gmail.com" />
      <button type="submit" className="btn btn-block">
        submit
      </button>

      <div className="genderInput">
        <p>
          Already regisertd ? 
          <Link to="/login" className="member-btn">
            login
          </Link>
        </p>
        <p>
          Not a member ?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </div>
    </form>
  </Wrapper>
  )
}

export default ResetPassword