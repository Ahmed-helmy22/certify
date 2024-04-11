import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import BadgesContainer from "./BadgesContainer";
import SearchContainer from "./SearchContainer";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

export const loader = async ({params}) => {
  console.log(params);
  try {
    const { data } = await customFetch.get('/badge/getMyBadges');
    return {data};
  } catch (error) {
    toast.error(error.response?.data?.message)
    return error;
  }

}

const AllBadgesContext = createContext();

const AllBadges = () => {
  const {data}  = useLoaderData()
  return (
    <AllBadgesContext.Provider value={{data}}>
      <SearchContainer />
      <BadgesContainer />
    </AllBadgesContext.Provider>
  );
};

export const useAllBadgesContext = () => useContext(AllBadgesContext);
export default AllBadges;