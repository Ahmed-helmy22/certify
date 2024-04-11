import React from "react";
import Wrapper from "../assets/wrappers/BadgeInfo";
import { useDashboardContext } from "../pages/DashboardLayout";

const BadgeInfo = ({ badgePhoto  , badgeStatus }) => {
  const data = useDashboardContext();
  const { user } = data;
  return (
    <Wrapper>
      <img src={`/badge/${badgePhoto}`} alt="badge photo" className="badge-photo"/>
      {user.role === 'not a user' ? <><div className={`status ${badgeStatus}`}>{badgeStatus}</div></> : " "}
      <hr style={ {backgroundColor: `${ badgeStatus === 'valid' ? 'red' : 'green'}`}}/>
    </Wrapper>
  );
};

export default BadgeInfo;
