import { useState } from "react";
import DataTable from "react-data-table-component";

const ReactDataTable = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Regis No.",
      selector: (row) => row.registrationNumber,
      sortable: true,
    },
    {
      name: "D.O.B",
      selector: (row) => row.dob,
    },
    {
      name: "Published",
      selector: (row) => row.published,
    },
    {
      name: "Pending",
      selector: (row) => row.pending,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button onClick={() => handleEdit(row)} className="btn btn-block">
            Edit
          </button>
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button onClick={() => handleDelete(row.id)} className="btn expired">
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      name: "Ahmed",
      registrationNumber: "12545",
      dob: "15xxx",
      published: "2010",
      pending: "2015",
      country: "Egypt",
    },
    {
      id: 2,
      name: "John",
      registrationNumber: "23456",
      dob: "20xxx",
      published: "2012",
      pending: "2016",
      country: "USA",
    },
    {
      id: 3,
      name: "Maria",
      registrationNumber: "34567",
      dob: "25xxx",
      published: "2013",
      pending: "2017",
      country: "Spain",
    },
    {
      id: 4,
      name: "Ali",
      registrationNumber: "45678",
      dob: "18xxx",
      published: "2014",
      pending: "2018",
      country: "Saudi Arabia",
    },
    {
      id: 5,
      name: "Lily",
      registrationNumber: "56789",
      dob: "22xxx",
      published: "2015",
      pending: "2019",
      country: "Canada",
    },
    {
      id: 6,
      name: "Omar",
      registrationNumber: "67890",
      dob: "19xxx",
      published: "2016",
      pending: "2020",
      country: "Jordan",
    },
    {
      id: 7,
      name: "Sophia",
      registrationNumber: "78901",
      dob: "28xxx",
      published: "2017",
      pending: "2021",
      country: "Germany",
    },
    {
      id: 8,
      name: "Aisha",
      registrationNumber: "89012",
      dob: "21xxx",
      published: "2018",
      pending: "2022",
      country: "UAE",
    },
    {
      id: 9,
      name: "Ryan",
      registrationNumber: "90123",
      dob: "24xxx",
      published: "2019",
      pending: "2023",
      country: "Australia",
    },
    {
      id: 10,
      name: "Yasmine",
      registrationNumber: "01234",
      dob: "27xxx",
      published: "2020",
      pending: "2024",
      country: "Morocco",
    },
    {
      id: 11,
      name: "Sara",
      registrationNumber: "13579",
      dob: "29xxx",
      published: "2021",
      pending: "2025",
      country: "Italy",
    },
    {
      id: 12,
      name: "David",
      registrationNumber: "24680",
      dob: "23xxx",
      published: "2022",
      pending: "2026",
      country: "Canada",
    },
    {
      id: 13,
      name: "Nadia",
      registrationNumber: "35791",
      dob: "26xxx",
      published: "2023",
      pending: "2027",
      country: "France",
    },
    {
      id: 14,
      name: "Hassan",
      registrationNumber: "46802",
      dob: "17xxx",
      published: "2024",
      pending: "2028",
      country: "Pakistan",
    },
    {
      id: 15,
      name: "Emma",
      registrationNumber: "57913",
      dob: "21xxx",
      published: "2025",
      pending: "2029",
      country: "UK",
    },
    {
      id: 16,
      name: "Elijah",
      registrationNumber: "68024",
      dob: "16xxx",
      published: "2026",
      pending: "2030",
      country: "USA",
    },
    {
      id: 17,
      name: "Amina",
      registrationNumber: "79135",
      dob: "30xxx",
      published: "2027",
      pending: "2031",
      country: "Kenya",
    },
    {
      id: 18,
      name: "Max",
      registrationNumber: "80246",
      dob: "19xxx",
      published: "2028",
      pending: "2032",
      country: "Germany",
    },
    {
      id: 19,
      name: "Eva",
      registrationNumber: "91357",
      dob: "24xxx",
      published: "2029",
      pending: "2033",
      country: "Spain",
    },
    {
      id: 20,
      name: "Daniel",
      registrationNumber: "02468",
      dob: "27xxx",
      published: "2030",
      pending: "2034",
      country: "Australia",
    },
    {
      id: 21,
      name: "Fiona",
      registrationNumber: "13579",
      dob: "22xxx",
      published: "2031",
      pending: "2035",
      country: "Ireland",
    },
    {
      id: 22,
      name: "Henry",
      registrationNumber: "24680",
      dob: "18xxx",
      published: "2032",
      pending: "2036",
      country: "Canada",
    },
    {
      id: 23,
      name: "Olivia",
      registrationNumber: "35791",
      dob: "26xxx",
      published: "2033",
      pending: "2037",
      country: "USA",
    },
    {
      id: 24,
      name: "Omar",
      registrationNumber: "46802",
      dob: "19xxx",
      published: "2034",
      pending: "2038",
      country: "Egypt",
    },
    {
      id: 25,
      name: "Isaac",
      registrationNumber: "57913",
      dob: "23xxx",
      published: "2035",
      pending: "2039",
      country: "Brazil",
    },
    {
      id: 26,
      name: "Sophie",
      registrationNumber: "68024",
      dob: "20xxx",
      published: "2036",
      pending: "2040",
      country: "France",
    },
    {
      id: 27,
      name: "Liam",
      registrationNumber: "79135",
      dob: "29xxx",
      published: "2037",
      pending: "2041",
      country: "Canada",
    },
    {
      id: 28,
      name: "Aria",
      registrationNumber: "80246",
      dob: "25xxx",
      published: "2038",
      pending: "2042",
      country: "USA",
    },
    {
      id: 29,
      name: "Noah",
      registrationNumber: "91357",
      dob: "21xxx",
      published: "2039",
      pending: "2043",
      country: "Australia",
    },
    {
      id: 30,
      name: "Zoe",
      registrationNumber: "02468",
      dob: "24xxx",
      published: "2040",
      pending: "2044",
      country: "Canada",
    },
    {
      id: 31,
      name: "Ethan",
      registrationNumber: "13579",
      dob: "28xxx",
      published: "2041",
      pending: "2045",
      country: "USA",
    },
    {
      id: 32,
      name: "Mia",
      registrationNumber: "24680",
      dob: "22xxx",
      published: "2042",
      pending: "2046",
      country: "Italy",
    },
    {
      id: 33,
      name: "Caleb",
      registrationNumber: "35791",
      dob: "26xxx",
      published: "2043",
      pending: "2047",
      country: "Spain",
    },
    {
      id: 34,
      name: "Amelia",
      registrationNumber: "46802",
      dob: "23xxx",
      published: "2044",
      pending: "2048",
      country: "Germany",
    },
    {
      id: 35,
      name: "Mason",
      registrationNumber: "57913",
      dob: "20xxx",
      published: "2045",
      pending: "2049",
      country: "USA",
    },
    {
      id: 36,
      name: "Layla",
      registrationNumber: "68024",
      dob: "25xxx",
      published: "2046",
      pending: "2050",
      country: "Canada",
    },
    {
      id: 37,
      name: "James",
      registrationNumber: "79135",
      dob: "29xxx",
      published: "2047",
      pending: "2051",
      country: "UK",
    },
    {
      id: 38,
      name: "Harper",
      registrationNumber: "80246",
      dob: "18xxx",
      published: "2048",
      pending: "2052",
      country: "Australia",
    },
    {
      id: 39,
      name: "Aiden",
      registrationNumber: "91357",
      dob: "24xxx",
      published: "2049",
      pending: "2053",
      country: "USA",
    },
    {
      id: 40,
      name: "Evelyn",
      registrationNumber: "02468",
      dob: "30xxx",
      published: "2050",
      pending: "2054",
      country: "Canada",
    },
    {
      id: 41,
      name: "Logan",
      registrationNumber: "13579",
      dob: "22xxx",
      published: "2051",
      pending: "2055",
      country: "France",
    },
    {
      id: 42,
      name: "Addison",
      registrationNumber: "24680",
      dob: "26xxx",
      published: "2052",
      pending: "2056",
      country: "USA",
    },
    {
      id: 43,
      name: "Lucas",
      registrationNumber: "35791",
      dob: "19xxx",
      published: "2053",
      pending: "2057",
      country: "Spain",
    },
    {
      id: 44,
      name: "Natalie",
      registrationNumber: "46802",
      dob: "24xxx",
      published: "2054",
      pending: "2058",
      country: "Canada",
    },
    {
      id: 45,
      name: "Jackson",
      registrationNumber: "57913",
      dob: "27xxx",
      published: "2055",
      pending: "2059",
      country: "USA",
    },
    {
      id: 46,
      name: "Madison",
      registrationNumber: "68024",
      dob: "23xxx",
      published: "2056",
      pending: "2060",
      country: "Australia",
    },
    {
      id: 47,
      name: "Christopher",
      registrationNumber: "79135",
      dob: "28xxx",
      published: "2057",
      pending: "2061",
      country: "Canada",
    },
    {
      id: 48,
      name: "Abigail",
      registrationNumber: "80246",
      dob: "21xxx",
      published: "2058",
      pending: "2062",
      country: "USA",
    },
    {
      id: 49,
      name: "Elijah",
      registrationNumber: "91357",
      dob: "25xxx",
      published: "2059",
      pending: "2063",
      country: "UK",
    },
    {
      id: 50,
      name: "Hazel",
      registrationNumber: "02468",
      dob: "29xxx",
      published: "2060",
      pending: "2064",
      country: "Australia",
    },
  ];

  // Now 'data' contains 50 dummy entries with unique IDs

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
        "&:hover": {
          backgroundColor: "var(--primary-500)",
          cursor: "pointer",
        },
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        color: "var(--text-color)", // override the text color for head cells
        borderBottom: "2px solid --dark-mode-bg-color", // override the border for head cells
        fontSize: "1.2rem",
        backgroundColor: "var(--background-color)",
        position: "sticky",
        top: 0,
        zIndex: 1,
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        color: "var(--text-color)", // override the text color for data cells
        borderBottom: "1px solid var(--dark-mode-bg-color)", // override the border for data cells
        fontSize: "1rem",
        backgroundColor: "var(--background-color)",
      },
    },
  };
  const handleEdit = (id) => {
    // Implement your edit logic here
    console.log(`Editing row with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Implement your delete logic here

    console.log(`Deleting row with ID ${id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="500px"
      paginationPerPage={5} // Set the number of rows per page
      paginationRowsPerPageOptions={[5, 10, 20, 30]}
    />
  );
};

export default ReactDataTable;
