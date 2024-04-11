import styled from "styled-components";
import { toast } from 'react-toastify';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
day.extend(advancedFormat);

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.2fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primary-700);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary-700);
  font-family: "Sono";
`;

const Id = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Country = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--green-dar);
`;

const DOB = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--green-dar);
`;
const Pending = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--green-dar);
`;
const Published = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--green-dar);
`;

function BadgeHolderRow({badgeHolder}) {
  
 const {firstName , familyName , candidateId , country , dateOfBirth ,pendingCount ,publishedCount} = badgeHolder;
  
 const date = day(dateOfBirth).format('MMM Do, YYYY');
 return (
    <TableRow role="row">
      <Name>{firstName} {familyName}</Name>
      <Id>{candidateId}</Id>
      <Country>{country}</Country>
      <DOB>{date}</DOB>
      <Pending>{pendingCount}</Pending>
      <Published>{publishedCount}</Published>
    </TableRow>
  );
}

export default BadgeHolderRow;
