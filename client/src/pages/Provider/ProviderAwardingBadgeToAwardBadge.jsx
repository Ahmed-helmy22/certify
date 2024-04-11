import {
  useLoaderData,
  useParams,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import Wrapper from "../../assets/wrappers/AwardingNewBadgeForm";
import { FormRow, FormRowSelect } from "../../components";
import SearchAutoComplete from "../../components/SearchAutoComplete";
import { useAllBadgesContext } from "../../components/AllBadges";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import { useState } from "react";
import WrapperSelect from "../../assets/wrappers/checkBoxWrapper";
import { FormSearchSelect } from './../../components/FormSearchSelect';


export const loader = async () => {
  try {
    const { data } = await customFetch.get("/badge/getMyBadgesInList");
    return { data };
  } catch (error) {
    toast.error(error.response?.data?.message);
    return error;
  }
};

export const action = async ({ request, params }) => {
  const candidateId = params.candidateBadgeId;
  console.log(candidateId);
  //  candidateId, badgeId, grade, issueDate, dueDate, examinerId, internalBadgeNum, note }
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.candidateId = params.candidateBadgeId;
  console.log(data);
  try {
    await customFetch.post("badge/addBadgeToCandidate", data);
    toast.success("add badge to candidate successfully");
    return redirect("/dashboard/academy");
  } catch (error) {
    toast.error(error.response?.data?.message);
    return error;
  }
};
// addBadgeToCandidate

const ProviderAwardingBadgeToAwardBadge = () => {
  const { data } = useLoaderData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [isLoading, setIsLoading] = useState(false);

  
  return (
    <Wrapper>
      <Form method="post" encType="multipart/form-data">
        <div className="container">
          <div className="rightContent">
          <WrapperSelect>
          <FormSearchSelect
            labelText="Please Choose the account Type"
            name="badgeId"
            list={data}
            className="dropListAcademy"
            classNameLabel="labelStyle"
            onChange={(e) => e.target.value}
          />
        </WrapperSelect>
            <FormRow
              name="grade"
              type="text"
              labelText="grade"
              withLabel={true}
              placeHolder="Grade"
            />
            <FormRow
              name="issueDate"
              type="date"
              labelText="issue date"
              withLabel={true}
            />
            <FormRow
              name="dueDate"
              type="date"
              labelText="due date"
              withLabel={true}
            />
            <FormRow
              name="examinerId"
              type="text"
              labelText="Approver / Examiner"
              withLabel={true}
              placeHolder="Registration number"
            />
            <span> Authority with power to approve</span>
            <FormRow
              name="internalCertifcate"
              type="text"
              labelText="Internal Certificate Nr. [if not applicable please write N/A]"
              withLabel={true}
              placeHolder="Internal Certificate Nr."
            />
          </div>

          <div className="leftContent">
            <textarea
              id="note"
              name="note"
              rows="10"
              cols="50"
              placeholder="if None, Write NONE"
              defaultValue='N/A'
            >
              
            </textarea>

            <button
              type="submit"
              className="btn btn-block form-btn"
              disabled={isSubmitting}
            >
              {isLoading ? "submitting" : "submit"}
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ProviderAwardingBadgeToAwardBadge;
