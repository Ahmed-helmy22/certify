import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../../components";
import { Link } from "react-router-dom";

const CheckCertificatesProfile = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Personnel certificats check</h4>
        <div>
          <FormRow
            type="email"
            name="email"
            labelText="Personnel Email address"
            withLabel
            placeHolder='Enter the Email address of Personnel'
          />
          <p>or</p>
          <FormRow type="text" name="registrationNumber" labelText="Personnel Registration number" withLabel  placeHolder='Enter  registration number of Personnel'/>
        </div>

        <div>
          <button type="submit" className="btn btn-block">
            submit
          </button>
          <Link to="/">
            <button className="btn btn-block declined">back to home</button>
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

export default CheckCertificatesProfile;
