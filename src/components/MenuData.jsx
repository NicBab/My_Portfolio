import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";

export const MenuData = [
  {
    title: "About",
    path: "/about",
    icon: <BsIcons.BsInfoCircle />,
    cName: "menu-text",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <GrIcons.GrProjects />,
    cName: "menu-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <MdIcons.MdOutlineFolderShared />,
    cName: "menu-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <GrIcons.GrContactInfo />,
    cName: "menu-text",
  },
];
