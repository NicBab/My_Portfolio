import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as TiIcons from "react-icons/ti";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
// import * as SiIcons from 'react-icons/si'
import { plusData } from "./PlusData";
import './css/Plus.css'

const Plus = () => {
  const [plus, setPlus] = useState(false);
  const showPlus = () => setPlus(!plus);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="followPlus">
          <Link to="#" className="plus-sign">
            <BiIcons.BiPlusCircle onClick={showPlus} />
          </Link>
        </div>
        <nav className={plus ? "plus-menu active" : "plus-menu"}>
          <ul className="plus-menu-items" onClick={showPlus}>
            <li className="plus-toggle">
              <Link to="#" className="closeIcon">
                <AiIcons.AiOutlineCloseCircle />
              </Link>
            </li>
            {plusData.map((item, index) => {
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
      </IconContext.Provider>
    </>
  );
};

export default Plus;
