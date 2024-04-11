import React from 'react'
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { ReactTanStackTable } from "../../components";

export const loader = async () => {
  // getCanandidatesBadges
  try {
    const allBadgeHolders = await customFetch.get(
      "examiner/candidateBadges"
    );
    console.log(allBadgeHolders , 'vvvvvvvvvvvvvvvvvv');
    return allBadgeHolders;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const ExaminerBadgeHolder = () => {
  const allBadgeHolders = useLoaderData();
  // candidateCountry  candidateId dueDate examinerFirstName examinerId   examinerMiddleName grade issueDate
    /**@type import('@tanstack/react-table').columnDef<any>*/
    const columns = [
      { header: "ID", accessorKey: "id", footer: "ID" },
      { header: "candidateFirstName", accessorKey: "candidateFirstName", footer: "candidateFirstName" },
      { header: "candidateId", accessorKey: "candidateId", footer: "candidateId" },
      {
        header: "candidateDateOfBirth",
        accessorKey: "candidateDateOfBirth",
        footer: "candidateDateOfBirth",
      },
  
      {
        header: "dueDate",
        accessorKey: "dueDate",
        footer: "dueDate",
      },
      {
        header: "grade",
        accessorKey: "grade",
        footer: "grade",
      },
      {
        header: "examinerFirstName",
        accessorKey: "examinerFirstName",
        footer: "examinerFirstName",
      },
      {
        header: "examinerId",
        accessorKey: "examinerId",
        footer: "examinerId",
      },
      { header: "Action", accessorKey: "action", footer: "Action" },
    ];
    if (allBadgeHolders?.data?.data?.length === 0) {
      return (
        <div className="container">
          <h2>No Badges to display....</h2>
        </div>
      );
    }
  
    return (
      <div className="container">
        {/* <ReactDataTable/> */}
        <ReactTanStackTable
          data={allBadgeHolders?.data?.data}
          columns={columns}
        />
      </div>
    );
}

export default ExaminerBadgeHolder