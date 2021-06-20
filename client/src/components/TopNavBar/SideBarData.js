import React from "react";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill, BsQuestionCircleFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "FAQ",
    path: "/faqs",
    icon: <BsQuestionCircleFill />,
    cName: "nav-text",
  },
];
