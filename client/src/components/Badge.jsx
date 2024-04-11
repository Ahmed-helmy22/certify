import Wrapper from "../assets/wrappers/Badge";
import BadgeInfo from "./BadgeInfo";
import { Form, Link } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";

const Badge = ({ documents, _id }) => {
  return (
    <Wrapper>
      <div>
        <h3 className="heading"> Year {_id} </h3>
      </div>

      <hr />
      <div className="content">
        {documents.map((item) => {
          return (
            <div className="badges" key={item._id}>
              <div className="badges-center">
                <BadgeInfo badgePhoto={item.badgePhoto} />
              </div>
              <div className="badges-info">
                <h5>{item.title}</h5>
                <p>{item.department}</p>
                <p>{item.createdAt}</p>
              </div>
              <footer className="actions">
                <Link
                  to={`/dashboard/academy/edit-badge/${item._id}`}
                  className="btn edit-btn"
                >
                  Edit
                </Link>
                <Form method="post" action={`../delete-badge/${item._id}`}>
                  <button type="submit" className="btn delete-btn">
                    Delete
                  </button>
                </Form>
              </footer>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Badge;
