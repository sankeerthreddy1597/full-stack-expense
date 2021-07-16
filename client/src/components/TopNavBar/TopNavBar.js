import React, { useState } from "react";
import "./TopNavBar.css";
import { FaBars, FaSearch } from "react-icons/fa";

const TopNavBar = ({ username, email, onLogout }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="topNavbar">
        <div className="leftSection">
          <FaBars size={22} className="menu-icon" onClick={showSidebar} />
          <div className="separation"></div>
          <div className="appTitle">Expense Tracker</div>
        </div>
        <div className="rightSection">
          <input type="text" className="" placeholder="search..." />
          <FaSearch size={18} className="search-icon" />
          <div className="separation"></div>
          <div className="profileSection">
            <div className="nameTag">
              {username.split(" ").map((word) => word[0])}
            </div>
            <p>{email}</p>
          </div>
          <button className="btn-logout" onClick={onLogout}>
            LOGOUT
          </button>
        </div>
      </div>
      {/* If time permists add side nav bar  */}
      {/* <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </>
  );
};

export default TopNavBar;
