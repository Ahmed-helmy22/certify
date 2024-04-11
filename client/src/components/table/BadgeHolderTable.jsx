import React from "react";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import styled from "styled-components";
import BadgeHolderRow from "./BadgeHolderRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  @media (max-width: 992px) {
    min-width: 800px;
  }
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.5fr 2.2fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--primary-600);
  border-bottom: 1px solid var(--grey-300);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const BadgeHolderTable = ({ holderBadges }) => {
  const { data, status } = holderBadges;
  console.log(data.allBadgeHolders[0]);
  if (!status === 200) return null;
  return (
    <>
      <Table role="table">
        <TableHeader role="row">
          <div>Name</div>
          <div>Id</div>
          <div>Conutry</div>
          <div>DOB</div>
          <div>Pending</div>
          <div>Published</div>
          <div></div>
        </TableHeader>
        {/* BadgeHolderRow */}
        {data?.allBadgeHolders?.map((badgeHolder) => (
          <BadgeHolderRow
            badgeHolder={badgeHolder}
            key={badgeHolder.candidateId}
          />
        ))}
      </Table>
    </>
  );
};

export default BadgeHolderTable;
