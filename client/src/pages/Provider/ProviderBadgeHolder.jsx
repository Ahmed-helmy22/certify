
// import ReactDataTable from '../../components/ReactDataTable';
import { useMemo } from 'react';
import { ReactTanStackTable} from '../../components';
import MOCK_DATA from "../../../MOCK_DATA.json";
import { toast } from 'react-toastify';
import customFetch from '../../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import Table from '../../components/table/BadgeHolderTable';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import BadgeHolderTable from '../../components/table/BadgeHolderTable';

export const loader = async() => {
  // getCanandidatesBadges
  try {
   const holderBadges = await customFetch.get('provider/getCanandidatesBadges')
   return holderBadges
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
}


const ProviderBadgeHolder = () => {
 const holderBadges = useLoaderData()
  // console.log(holderBadges.data.allBadgeHolders , 'sssssssssss');
  // const data = useMemo(() => MOCK_DATA, []);
// firstName  familyName candidateId country pendingCount publishedCount dateOfBirth

  /**@type import('@tanstack/react-table').columnDef<any>*/
  // const columns = [
  //   { header: "ID", accessorKey: "id", footer: "ID" },
  //   { header: "firstName",accessorKey: "firstName",footer: "firstName"},
  //   { header: "familyName",accessorKey: "familyName",footer: "familyName"},
  //   { header: "registration no.",accessorKey: "candidateId",footer: "registration no."},

  //   { header: "dateOfBirth",accessorKey: "dateOfBirth",footer: "dateOfBirth"},
  //   { header: "pendingCount",accessorKey: "pendingCount",footer: "TrainingSubject"},
  //   { header: "publishedCount", accessorKey: "publishedCount", footer: "IssueDate" },
  //   { header: "Action", accessorKey: "action", footer: "Action" },
  // ];
  // if (holderBadges?.data?.allBadgeHolders?.length === undefined ) {
  //   return (
  //     <div  className="container">
  //       <h2>No Badges to display....</h2>
  //     </div>
  //   );
  // }

  return (
    // <div className="container">
    //   {/* <ReactDataTable/> */}
    //   <ReactTanStackTable data={holderBadges?.data?.allBadgeHolders} columns={columns}/>
    // </div>

    <>
    <Row type='horizontal'>
        <Heading as='h1'>Badges Holder</Heading>
    </Row>
    <Row>
    <BadgeHolderTable holderBadges={holderBadges}/>
    </Row>
    </>
   
  )
}

export default ProviderBadgeHolder