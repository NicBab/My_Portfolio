import React from 'react'
import './css/Contact.css'
import { phoneIcon, mailIcon } from '../Icons'
import { Container } from 'react-bootstrap'

const Contact = () => {
    const onContactLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/nic-babineaux/")
      }
    
      const onContactGitHubClick = () => {
        window.open("https://github.com/NicBab")
      }
    
      const onContactPhoneClick = () => {
        window.location = "tel:+3372579202"
      }
    
      const onContactEmailClick = () => {
        window.location.href="mailto: nickpbab@gmail.com"
      }

    return (
       <>
        <div className="contactPg">
         <Container>
          <div className="contactLinkedIn" onClick={onContactLinkedInClick}>LinkedIn</div>
          <div className="contactGitHub" onClick={onContactGitHubClick}>GitHub</div>
          <div className="contactEmail" onClick={onContactEmailClick}>{mailIcon}nickpbab@gmail.com</div>
          <div className="contactPhone" onClick={onContactPhoneClick}>{phoneIcon}(337)257-9202</div>
         </Container>
        </div>
      </>
    )
}

export default Contact
