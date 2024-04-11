import React from 'react';
import {
  StyledTableRow,
  StyledTableCell,
  StyledEditDeleteCell,
  EditButton,
  DeleteButton,
} from './RowStyled';

const TableRow = ({ data }) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{data.id}</StyledTableCell>
      <StyledTableCell>{data.name}</StyledTableCell>
      <StyledTableCell>{data.email}</StyledTableCell>
      <StyledEditDeleteCell>
        <EditButton>Edit</EditButton>
        <DeleteButton>Delete</DeleteButton>
      </StyledEditDeleteCell>
    </StyledTableRow>
  );
};

export default TableRow;
