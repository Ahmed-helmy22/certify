import Wrapper from "../../assets/wrappers/MainRegister";
import { Logo } from "../../components";
import { Link } from "react-router-dom";

const MainRegister = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <div className="register-links">
          <Link to="candidate" className="btn">
            Register as a candidate
          </Link>

          <Link to="examiner" className="btn">
            Register as a examiner
          </Link>

          <Link to="academy" className="btn">
            Register as a academy
          </Link>

          <p>
            Already a member ?
            <Link to="/login" className="member-btn">
              Login
            </Link>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default MainRegister;
