import React from 'react';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableCell,
  StyledEditDeleteCell,
  EditButton,
  DeleteButton,
} from '../assets/wrappers/TableStyled';

const Table = ({ data }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <StyledTableHeader>ID</StyledTableHeader>
          <StyledTableHeader>Name</StyledTableHeader>
          <StyledTableHeader>Email</StyledTableHeader>
          <StyledTableHeader>Actions</StyledTableHeader>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <StyledTableRow key={item.id}>
            <StyledTableCell>{item.id}</StyledTableCell>
            <StyledTableCell>{item.name}</StyledTableCell>
            <StyledTableCell>{item.email}</StyledTableCell>
            <StyledEditDeleteCell>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </StyledEditDeleteCell>
          </StyledTableRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
