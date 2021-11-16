import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri"
import * as GoIcons from "react-icons/go"


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
    icon: <MdIcons.MdImageSearch/>,
    cName: "menu-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <RiIcons.RiFolderUserLine />,
    cName: "menu-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <GoIcons.GoMail />,
    cName: "menu-text",
  },
];
