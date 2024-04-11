import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  {
    text: "profile",
    path: "academy",
    mainPath: "academy",
    role: "provider",
    icon: <ImProfile />,
    className: "nav-link",
  },
  {
    text: "add badge",
    path: "academy/add-badge",
    mainPath: "academy",
    role: "provider",
    icon: <FaWpforms />,
    className: "nav-link",
  },
  {
    text: "badge list",
    path: "academy/all-badges",
    mainPath: "academy",
    role: "provider",
    icon: <MdAdminPanelSettings />,
    className: "nav-link",
  },
  {
    text: "institute list",
    path: "academy/institute-list",
    mainPath: "academy",
    role: "provider",
    icon: <ImProfile />,
    className: "nav-link",
  },
  {
    text: "award badge",
    path: "academy/award-badge",
    mainPath: "academy",
    role: "provider",
    icon: <MdAdminPanelSettings />,
    className: "nav-link award-badg-class",
  },
  {
    text: "holder badge",
    path: "academy/holder-badges",
    mainPath: "academy",
    role: "provider",
    icon: <IoBarChartSharp />,
    className: "nav-link",
  },
  {
    text: "pending badges",
    path: "academy/pending-badges",
    mainPath: "academy",
    role: "provider",
    icon: <MdQueryStats />,
    className: "nav-link",
  },
  {
    text: "declined badges",
    path: "academy/declined-badges",
    mainPath: "academy",
    role: "provider",
    icon: <ImProfile />,
    className: "nav-link",
  },
  {
    text: "update infromation",
    path: "academy/update-information",
    mainPath: "academy",
    role: "provider",
    icon: <MdAdminPanelSettings />,
    className: "nav-link",
  },

  // candidate
  {
    text: "profile",
    path: "candidate",
    mainPath: "candidate",
    role: "candidate",
    className: "nav-link",

    icon: <ImProfile />,
  },
  {
    text: "Cand badge list",
    path: "candidate/all-badges",
    mainPath: "candidate",
    role: "candidate",
    className: "nav-link",

    icon: <MdAdminPanelSettings />,
  },
  {
    text: "Cand update infromation",
    path: "provider/update-information",
    mainPath: "candidate",
    role: "candidate",
    className: "nav-link",

    icon: <MdAdminPanelSettings />,
  },

  // examiner
  {
    text: "profile",
    path: "examiner",
    mainPath: "examiner",
    role: "examiner",
    className: "nav-link",

    icon: <ImProfile />,
  },
  {
    text: "badge-holder",
    path: "examiner/badge-holder",
    mainPath: "examiner",
    role: "examiner",
    className: "nav-link",

    icon: <MdAdminPanelSettings />,
  },

  {
    text: "pending-request",
    path: "examiner/pending-request",
    mainPath: "examiner",
    role: "examiner",
    className: "nav-link",

    icon: <MdAdminPanelSettings />,
  },
  {
    text: "institute-list",
    path: "examiner/institute-list",
    mainPath: "examiner",
    role: "examiner",
    className: "nav-link",

    icon: <MdAdminPanelSettings />,
  },
  {
    text: "Cand update infromation",
    path: "examiner/update-information",
    mainPath: "examiner",
    role: "examiner",
    className: "nav-link",

    icon: <MdAdminPanelSettings />,
  },
  //

  {
    text: "home",
    path: "/",
    mainPath: "not a user",
    role: "",
    icon: <ImProfile />,
    className: "nav-link",
  },
  {
    text: "profile",
    path: "personel-certificate",
    mainPath: "not a user",
    role: "",
    icon: <ImProfile />,
    className: "nav-link",
  },
  {
    text: "all badges",
    path: "personel-certificate/all-badges",
    mainPath: "not a user",
    role: "",
    icon: <ImProfile />,
    className: "nav-link",
  },
];

export default links;
