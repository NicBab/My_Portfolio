import React from "react";
import "./css/Contact.css";
// import { phoneIcon, mailIcon } from "../Icons";
import { Container } from 'react-bootstrap';
import * as GrIcons from 'react-icons/gr'
import * as GoIcons from 'react-icons/go'
import * as BsIcons from 'react-icons/bs'

const Contact = () => {

  const onContactLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/nic-babineaux/");
  };

  const onContactPhoneClick = () => {
    window.location = "tel:+3372579202";
  };

  const onContactEmailClick = () => {
    window.location.href = "mailto: nickpbab@gmail.com";
  };

  return (
    <>
      <div className="contactPg">
        <Container>
          <div className="contactLinks" onClick={onContactLinkedInClick}>
            <GrIcons.GrLinkedinOption className="contactIcons" /> LinkedIn
           </div>
          <div className="contactLinks" onClick={onContactEmailClick}>
            <GoIcons.GoMail className="contactIcons" /> nickpbab@gmail.com
           </div>
          <div className="contactLinks" onClick={onContactPhoneClick}>
            <BsIcons.BsFillTelephoneFill className="contactIcons" />(337) 257-9202
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
