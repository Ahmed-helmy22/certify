import React from "react";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { ReactTanStackTable } from "../../components";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import styled from "styled-components";

export const loader = async () => {
  // getCanandidatesBadges
  try {
    const pendingBadges = await customFetch.get("provider/getPendingBadges");
    return pendingBadges;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const ProviderPendingRequests = () => {
  const pendingBadges = useLoaderData();
  // candidateCountry  candidateId dueDate examinerFirstName examinerId   examinerMiddleName grade issueDate
  console.log(pendingBadges);
  /**@type import('@tanstack/react-table').columnDef<any>*/
  const columns = [
    { header: "ID", accessorKey: "id", footer: "ID" },
    {
      header: "candidateFirstName",
      accessorFn: () =>`${pendingBadges.candidatefirstName} ${pendingBadges.candidatefamilyName}` ,
      accessorKey: "candidateFirstName",
     
    },
    {
      header: "candidateId",
      accessorKey: "candidateId",
     
    },
    {
      header: "candidateDateOfBirth",
      accessorKey: "candidateDateOfBirth",
    
    },

    {
      header: "dueDate",
      accessorKey: "dueDate",
     
    },
    {
      header: "grade",
      accessorKey: "grade",
     
    },
    {
      header: "examinerFirstName",
      accessorKey: "examinerFirstName",
    
    },
    {
      header: "examinerId",
      accessorKey: "examinerId",
      
    },
    { header: "Action", accessorKey: "action",},
  ];
  if (pendingBadges?.data?.data?.length === 0) {
    return (
      <div className="container">
        <h2>No Badges to display....</h2>
      </div>
    );
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Badges Holder</Heading>
      </Row>
      <Row>
        {/* <ReactDataTable/> */}
        <ReactTanStackTable
          data={pendingBadges?.data?.data}
          columns={columns}
        />
      </Row>
    </>
  );
};

export default ProviderPendingRequests;
