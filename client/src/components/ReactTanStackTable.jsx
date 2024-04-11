import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import TableStyleWrapper from "../assets/wrappers/TableStyleWrapper";
import styled from "styled-components";

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
  grid-template-columns: 1fr 2fr 2fr 1fr 1fr 1fr 1fr;
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
const Element = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--gray-700);
  font-family: "Sono";
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns:  1fr 2fr 2fr 1fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--primary-700);
  }
`;
const ReactTanStackTable = ({data , columns}) => {
  // {"id":1,"candidateName":"dtouson0","trainingCenter":"Walsh-Gutmann","trainingSubject":"Developer I","issueDate":"5/12/2023","country":"Indonesia","action":"pending"}


  const [sorting, setSorting] = useState();
  const [filtering , setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter:filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <TableStyleWrapper>
    <input className="table-input" type="text" value={filtering} onChange={(e) => setFiltering(e.target.value)} />
      <Table role="table" >
        <TableHeader role="row">
          {/*  table header */}
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHeader key={headerGroup.id} >
              {headerGroup.headers.map((header) => (
                <div
               
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{ asc: "⬆️", desc: "⬇️" }[header.column.getIsSorted() ?? null]}
                </div>
              ))}
              
            </TableHeader>
          ))}
        </TableHeader>
        
          {table.getRowModel().rows.map((row) => (
            <TableRow role="row"
            key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Element key={cell.id} className="">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Element>
              ))}
            </TableRow>
          ))}
        
      </Table>
      <div className="table-btn">
        <button className="btn"  onClick={() => table.setPageIndex(0)}>first page</button>
        <button
        className="btn" 
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          previous page
        </button>
        <button
        className="btn" 
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          next page
        </button>
        <button className="btn" onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          last page
        </button>
      </div>
    </TableStyleWrapper>
  );
};

export default ReactTanStackTable;
