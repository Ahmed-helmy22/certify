import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--background-color);
  }

  &:hover {
    background-color: var(--background-secondary-color);
  }
`;

export const StyledTableCell = styled.td`
  padding: 12px;
`;

export const StyledEditDeleteCell = styled.td`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  background-color: var(--primary-500);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius);
  padding: 8px 12px;
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
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--red-dark);
    color: var(--white);
  }
`;
