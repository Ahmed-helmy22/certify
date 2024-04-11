import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/BadgePopupWrapper";

const BadgePopup = () => {
  const { badgesData } = useDashboardContext();
  const len = badgesData.length;
  console.log(len);
  return (
    <Wrapper>
       <div className="badges-popup-list">
      {badgesData?.map((badge) => {
       return <div className="badg-item"  key={badge.id}>
          <img src={badge.badgePhoto} alt={badge.badgeName} />
          <hr style={ {backgroundColor: `${ badge.badgeStatus === 'valid' ? 'red' : 'green'}`}}/>

          <p>{badge.badgeName}</p>
        </div>;
      })}
     </div>
    </Wrapper>
  );
};

export default BadgePopup;
