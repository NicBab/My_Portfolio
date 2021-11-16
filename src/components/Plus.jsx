import React, { useState } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import * as TiIcons from "react-icons/ti";
import * as AiIcons from "react-icons/ai";
import { plusData } from "./PlusData";

const Plus = () => {
  const [plus, setPlus] = useState(false);
  const showPlus = () => setPlus(!plus);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="followPlus">
          <Link to="#" className="plus-sign">
            <TiIcons.TiPlusOutline onClick={showPlus} />
          </Link>
        </div>
        <nav className={plus ? "plus-menu active" : "plus-menu"}>
          <ul className="plus-menu-items" onClick={showPlus}>
            <li className="followPlus-toggle">
              <Link to="#" className="plus-sign">
                <AiIcons.AiOutlineClose />
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
