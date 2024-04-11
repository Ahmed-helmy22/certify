import React, { createContext, useContext, useState } from "react";
import Wrapper from "../../assets/wrappers/BadgeAwarding";
import awardingBadgeList from "../../utils/awardingBadgeList";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(
      `/candidate/getAllBadges/${params.candidateBadgeId}`
    );
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const CandidateDataToAwardingBadge = createContext();

const ProviderAwardingBadge = () => {
  const { data } = useLoaderData();
  const [activeLink, setActiveLink] = useState(false);
  const links = awardingBadgeList;

  const toggleLink = () => {
    setActiveLink(!activeLink);
  };
  return (
    <Wrapper>
      <h3>Award New Padge</h3>
      <nav className="navList">
        <ul className="nav-links">
          {links?.map((links) => {
            const { text, path, mainPath } = links;
            return (
              <NavLink
                to={path}
                key={text}
                className={`nav-link  ${activeLink ? "active" : ""}`}
                onClick={toggleLink}
                end
              >
                <span>{text}</span>
              </NavLink>
            );
          })}
        </ul>
      </nav>

      <CandidateDataToAwardingBadge.Provider value={{data}}>
        <div className="content">
          <Outlet />
        </div>
      </CandidateDataToAwardingBadge.Provider>
    </Wrapper>
  );
};

export const useCandidateDataToAWardingContext = () => useContext(CandidateDataToAwardingBadge);

export default ProviderAwardingBadge;
