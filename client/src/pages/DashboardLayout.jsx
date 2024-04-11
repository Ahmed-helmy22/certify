import { createContext, useContext, useState } from "react";
import { Outlet, useLoaderData, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import { checkDefaultThem } from "../App";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  // verify user data if not exist return to home if exist enter dashboard depends on its userType
  try {
    const { data } = (await customFetch.get("/auth/current-user"));
    console.log(data);
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const {user} = useLoaderData();

  const navigate = useNavigate()
  // console.log(data);
  // user temporary
  // const user = { name: 'ahmed, role: "academy" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultThem());
  // const badgesData = useMemo(() => Badge_Data, []);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("loggout user");
    // navigate('/')
    //  await customFetch.get('/provider/logout')
    // toast.success('logout)
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
        // badgesData,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />

          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
