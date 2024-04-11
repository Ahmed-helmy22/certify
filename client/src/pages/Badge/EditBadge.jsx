import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";

export const loader = async ({ params }) => {
  // its response in log the whole array of the same year need to get only the badge only
  try {
    const { data } = await customFetch.get(
      `/badge/viewBadge/${params.badgeId}`
    );
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return redirect("/dashboard/academy/all-badges");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/badge/updateBadge/${params.badgeId}`, data);
    toast.success(" badge edit succesfully");
    return redirect("/dashboard/academy/all-badges");
  } catch (error) {
    toast.error(error?.response?.data?.message);
    return error;
  }
};

const EditBadge = () => {
  const { badge } = useLoaderData();
  console.log(badge);

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="title" defaultValue={badge.title} />
          <FormRow
            type="text"
            name="department"
            defaultValue={badge.department}
          />

          <button
            type="submit"
            className="btn btn-block form-btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditBadge;
