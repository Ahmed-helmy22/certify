import { useCandidateDataToAWardingContext } from './ProviderAwardingBadge';
import Wrapper from "../../assets/wrappers/BadgeContainer";
import  Badge  from '../../components/Badge';


const ProviderAwardingBadgeList = () => {
  const { data } = useCandidateDataToAWardingContext();
  if (data?.badges?.length === 0 ) {
    return (
      <Wrapper>
        <h2>No Badges to display....</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
    <h5>Badges{data?.badges?.length > 1 && 's'} found</h5>
     {data?.badges.map((badgeYear) => {
      console.log(badgeYear);
         return <Badge key={badgeYear._id}  {...badgeYear}/>
     })}
     
    
  </Wrapper>
  )
}

export default ProviderAwardingBadgeList