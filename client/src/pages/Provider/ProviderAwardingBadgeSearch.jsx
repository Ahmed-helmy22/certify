import {  useState } from "react";
import {
  Form,
  useNavigation,
  redirect,
  useLoaderData,
} from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRow from "../../components/FormRow";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";



export const action = async({request}) => {
  // getCandidateProfile
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    const candidate = await customFetch.post('/candidate/getCandidateProfile' , data)
    toast.success('Get candidate data successfully')
    return redirect(`/dashboard/academy/award-badge/${candidate.data.candidate._id}`)
  } catch (error) {
    toast.error(error?.response?.data?.message)
    return(error)
  }
}


const ProviderAwardingBadgeSearch = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Wrapper>
      <Form method="post" className="form awardNewBadge">
        <h4 className="form-title">Search for a candidate</h4>
        <div className="form-coloumn">
          <FormRow type="email" name="email" labelText="email" withLabel defaultValue='bayon70874@konican.com' />
          <span>Or</span>
          <FormRow
            type="text"
            name="candidateId"
            labelText="Registration Number"
            withLabel
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
            
          >
            {isLoading ? "submitting" : "search"}
          </button>
         
        </div>
      </Form>
    </Wrapper>
  );
};

export default ProviderAwardingBadgeSearch;
