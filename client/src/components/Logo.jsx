import logo from "../assets/images/certlogo.png";

const Logo = () => {
  return (
    <img
      src={logo}
      alt="certify"
      className="logo"
      style={{ width: 200, height: 50 }}
    />
  );
};

export default Logo;
