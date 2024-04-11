import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin-top: 2.4rem;
`;

export const StyledTableHeader = styled.th`
  padding: 1.6rem;
  background-color: var(--primary-500);
  color: var(--white);
  text-align: left;
  &:last-child{
    text-align: center;
  }
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background: var(--background-secondary-color);
  }

  &:hover {
    background: var(--primary-50);
  }
`;

export const StyledTableCell = styled.td`
  padding: 1.2rem;
`;

export const StyledEditDeleteCell = styled.td`
padding-top: 1.2rem;
padding-bottom: 1.2rem;

  display: flex;
  justify-content: center;
  gap: 2.4rem;
`;

export const EditButton = styled.button`
  background-color: var(--primary-500);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius);
  padding: .5rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-700);
  }
`;

export const DeleteButton = styled.button`
  background-color: var(--red-light);
  color: var(--red-dark);
  border: none;
  border-radius: var(--border-radius);
  padding: .5rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--red-dark);
    color: var(--white);
  }
`;
