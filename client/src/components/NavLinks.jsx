import { useEffect, useRef, useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import FormRow from "./FormRow";
import { IoClose } from "react-icons/io5";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  const [inputText, setInputText] = useState("");
  const [isSearchSideBar, setIsSearchSideBar] = useState(false);
  const [isTypingSearch, setIsTypingSearch] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
    if (inputText.length > 0) {
      setIsSearchSideBar(true);
    }
  };

  const clearSearchValue = () => {
    setInputText("");
    setIsSearchSideBar(false);
  };

  const openSecondBar = () => {
    console.log("xxxxxx");
  };
  return (
    <div className="nav-links">
      <div className="search">
        {isSearchSideBar ? (
          <IoClose
            size={"2rem"}
            onClick={clearSearchValue}
            cursor={"pointer"}
          />
        ) : (
          ""
        )}

        <input
          type="text"
          className="search-side-bar"
          onChange={handleChange}
          value={inputText}
          onFocus={openSecondBar}
        />

        {isSearchSideBar ? (
          <div className="searchSideBar">
            <div>
              <label htmlFor="">sarch user</label>
              <input type="text" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {links.map((link) => {
        const { text, path, icon, mainPath, role, className } = link;
        if (role !== user.role) return;
        return (
          <NavLink
            to={path}
            key={text}
            className={className}
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
