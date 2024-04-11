import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDashboardContext } from "../pages/DashboardLayout";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "registrationNumber", headerName: "Regist. Nr.", width: 130 },
  {
    field: "dob",
    headerName: "D.O.B",
    type: "number",
    width: 90,
  },
  {
    field: "published",
    headerName: "Published",
    type: "number",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },
  {
    field: "pending",
    headerName: "Pending",
    type: "number",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    name: "Snow",
    registrationNumber: "Jon",
    dob: 35,
    published: 4,
    pending: 10,
    country : 'Egypt',
  },
  {
    id: 2,
    name: "Lannister",
    registrationNumber: "Cersei",
    dob: 42,
    published: 4,
    pending: 10,
    country : 'Egypt',
  },
  {
    id: 3,
    name: "Lannister",
    registrationNumber: "Jaime",
    dob: 45,
    published: 4,
    pending: 10,
    country : 'Tunis',
  },
  {
    id: 4,
    name: "Stark",
    registrationNumber: "Arya",
    dob: 16,
    published: 4,
    pending: 10,
    country : 'USA',
  },
  {
    id: 5,
    name: "Targaryen",
    registrationNumber: "Daenerys",
    dob: null,
    published: 4,
    pending: 10,
    country : 'UAE',
  },
  {
    id: 6,
    name: "Melisandre",
    registrationNumber: null,
    dob: 150,
    published: 4,
    pending: 10,
    country : 'India',
  },
  {
    id: 7,
    name: "Clifford",
    registrationNumber: "Ferrara",
    dob: 44,
    published: 4,
    pending: 10,
    country : 'SAUDIA',
  },
  {
    id: 8,
    name: "Frances",
    registrationNumber: "Rossini",
    dob: 36,
    published: 4,
    pending: 10,
    country : 'MOROCO',
  },
  {
    id: 9,
    name: "Roxie",
    registrationNumber: "Harvey",
    dob: 65,
    published: 4,
    pending: 10,
    country : 'Oman',
  },
];

const TableMui = () => {
  const { isDarkTheme } = useDashboardContext();

  return (
    <div style={{ height: 400, width: "100%" }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{
        '& .MuiDataGrid-root': {
          border: '2px solid red !important', // Set border color
        },
        '& .MuiDataGrid-cell': {
          color: 'blue', // Set text color
        },
        
      }}
      
    />
  </div>
  );
};

export default TableMui;
