import Wrapper from "../assets/wrappers/BadgeContainer";
import { useCandidateDataToAWardingContext } from "../pages/Provider/ProviderAwardingBadge";
import Badge from "./Badge";


const BadgesContainerToAwardCandidate = () => {
  const { data } = useCandidateDataToAWardingContext();
  console.log(data);
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
        console.log(badgeYear);
           return <Badge key={badgeYear._id}  {...badgeYear}/>
       })}
       
      
    </Wrapper>
  );
};

export default BadgesContainerToAwardCandidate;
