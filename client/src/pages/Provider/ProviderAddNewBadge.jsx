import { FormRow } from "./../../components";
import {
  Form,
  useNavigation,
  redirect,
  useOutletContext,
} from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('badgePhoto')
  try {
    await customFetch.post('/badge/addBadge' , formData );
    toast.success('Badge Added Successfful')
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error
  }
};

const ProviderAddNewBadge = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <h4 className="form-title">add badge</h4>
        <div className="form-center">
          <FormRow type="text" name="title" labelText="badge name" withLabel />
          <FormRow
            type="text"
            name="department"
            labelText="Division/Sector/Department"
            withLabel
            placeHolder="if not applicable please write N/A"
          />
          <FormRow
            type="file"
            name="badgePhoto"
            labelText="badgePhoto"
             withLabel={true}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting" : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default ProviderAddNewBadge;
