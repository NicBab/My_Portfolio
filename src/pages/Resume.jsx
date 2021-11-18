import React from "react";
import "./css/Resume.css";
import Nic_Bab_resume from "../Images/Nic_Bab_resume.png";

const Resume = () => {
  return (
    <div className="resumePg">
      <img className="resumeImg" src={Nic_Bab_resume} alt="resume" />
    </div>
  );
};

export default Resume;
