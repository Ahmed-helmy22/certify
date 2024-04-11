import Wrapper from "../../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Logo } from "../../components";
import CheckCertificateLandingPage from "../../components/CheckCertificateLandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container ">
        <div className="page">
        <div className="info">
          <h1>
            certify <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            fuga est laudantium saepe quae neque at autem cupiditate minus sit
            nesciunt beatae aspernatur eligendi eveniet error modi aperiam
            necessitatibus laboriosam aut delectus mollitia, optio totam id
            quidem! Ullam iusto aspernatur ipsum fugit, pariatur molestiae
            dolorum quidem enim tempora in? Minus.
          </p>

          <div className="btn-link">
            <div>
              <Link to="/check-cerificates-profile" className="btn  certificatCheckedBtn">
                check cerificates profile
              </Link>
            </div>
            <div className="register-link">
              <Link to="/register" className="btn btn-block">
                Register
              </Link>
              <Link to="/login" className="btn btn-block">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="checkCertifcate">
          <CheckCertificateLandingPage />
        </div>
        </div>
        
      </div>
    </Wrapper>
  );
};

export default Landing;
