import Wrapper from "../assets/wrappers/BadgeContainer";
// import { useAllBadgesContext } from "./AllBadges";
import Badge from "./Badge";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useAllBadgesContext } from "./AllBadges";


const BadgesContainer = () => {
  const { data } = useAllBadgesContext();
  if (data?.data?.length === 0 ) {
    return (
      <Wrapper>
        <h2>No Badges to display....</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>Badges{data?.data?.length > 1 && 's'} found</h5>
       {data?.data.map((badgeYear) => {
           return <Badge key={badgeYear._id}  {...badgeYear}/>
       })}
       
      
    </Wrapper>
  );
};

export default BadgesContainer;
