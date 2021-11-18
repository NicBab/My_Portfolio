import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as TiIcons from "react-icons/ti";
import * as AiIcons from "react-icons/ai";
import { MenuData } from "./MenuData";
import "./css/Menu.css";
import IconsHeader from "./IconsHeader"
// import Plus from './Plus'

const Menu = () => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => setMenu(!menu);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="nav">
          <Link to="#" className="burger">
            <TiIcons.TiThMenu onClick={showMenu} />
          </Link>
          <IconsHeader />
        {/* <Plus /> */}
          <nav className={menu ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showMenu}>
              <li className="nav-toggle">
                <Link to="#" className="closeIcon">
                  <AiIcons.AiOutlineCloseCircle />
                </Link>
              </li>
              {MenuData.map((item, index) => {
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
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Menu;
