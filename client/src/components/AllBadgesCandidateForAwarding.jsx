import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import BadgesContainer from "./BadgesContainer";
import SearchContainer from "./SearchContainer";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";


const AllBadgesCandidateForAwarding = () => {
  
  return (

     
      <BadgesContainer />
  
  );
};


export default AllBadgesCandidateForAwarding;