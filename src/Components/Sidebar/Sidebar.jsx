import React, { useState } from "react";
import Logo from "../../imgs/logo.png";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="/" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menuuu */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              //if the selected item is === to the index of the selected item, return the item with an active class else return the menuitem
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                // when an item is clicked, the function will check for the selected item and set the state
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
