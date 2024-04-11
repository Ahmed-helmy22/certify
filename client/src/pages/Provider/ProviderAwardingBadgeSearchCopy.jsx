import React, { useEffect, useState } from "react";
import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";
import Popup from "../../components/Popup";
import PersonelCertificateProfile from "../PersonelCertificate/PersonelCertificateProfile";
import ProviderAwardingBadgeToAwardBadge from "./ProviderAwardingBadgeToAwardBadge";
import { BadgePopup, BadgesContainer } from "../../components";
// import { useAllBadgesContext } from "../../components/AllBadges";
import { useDashboardContext } from "../DashboardLayout";
import BadgeSlider from "../../components/BadgeSlider";

const ProviderAwardingBadgeSearch = () => {
  const {badgesData} = useDashboardContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [disabledFirstInput, setDisabledFirstInput] = useState(false);
  const [disabledSecondInput, setDisabledSecondInput] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [page, setPage] = useState(0);
  const FormPageTitle = ["profile", "check-badge", "awarding-badge"];

  const searchAction = () => {
    if (!buttonPopup) setPage(0);
    setIsLoading(!isLoading);
    setButtonPopup(!buttonPopup);
  };

  const navigateToPage = (title) => {
    const index = FormPageTitle.indexOf(title);
    if (index !== -1) {
      setPage(index);
    }
  };

  const disabledAction = () => {
    setDisabledFirstInput(!disabledFirstInput);
    setDisabledSecondInput(!disabledSecondInput);
  };
  const FormDisplay = () => {
    if (page === 0) {
      return <PersonelCertificateProfile />;
    } else if (page === 1) {
      // Check if BadgesData is defined before using it
      //  return badgesData.length > 0 ? <BadgeSlider /> : null;
      return badgesData.length > 0 ? <BadgePopup /> : null;
    } else if ( page === 2 ){
      return <ProviderAwardingBadgeToAwardBadge />;
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form awardNewBadge">
        <h4 className="form-title">Search for a candidate</h4>
        <div className="form-coloumn">
          <FormRow type="email" name="email" labelText="email" withLabel />
          <span>Or</span>
          <FormRow
            type="text"
            name="registrationNumber"
            labelText="Registration Number"
            withLabel
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
            onClick={searchAction}
          >
            {isLoading ? "submitting" : "search"}
          </button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="popup-header">
              <div className="action-btn">
                <>
                  <button className="btn prev" onClick={() => navigateToPage("profile")}>
                    profile
                  </button>
                </>
                <button className="btn " onClick={() => navigateToPage("check-badge")}>
                  check Badges
                </button>
                <button className="btn next" onClick={() => navigateToPage("awarding-badge")}>
                  awarding badge
                </button>
              </div>
              <AiOutlineClose
                className="customCloseButton"
                onClick={() => setButtonPopup(false)}
              />
            </div>

            {FormDisplay()}
          </Popup>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ProviderAwardingBadgeSearch;
