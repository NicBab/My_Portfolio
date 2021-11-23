import React from 'react'
import { facebookIcon, instagramIcon, githubIcon, linkedinIcon } from '../Icons'
import './css/IconsHeader.css'

const IconsHeader = () => {

    const onFbIconClick = () => {
        window.open("")
    }
    const onIgIconClick = () => {
        window.open("")
    }
    const onGhIconClick = () => {
        window.open("https://github.com/NicBab")
    }

    const onLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/nic-babineaux/")
    }

    return (
        <div id="iconsRow">
            <div className="icons" onClick={onFbIconClick}>{facebookIcon}</div>
            <div className="icons" onClick={onIgIconClick}>{instagramIcon}</div>
            <div className="icons" onClick={onGhIconClick}>{githubIcon}</div>
            <div className="icons" onClick={onLinkedinClick}>{linkedinIcon}</div>
        </div>
    )
}

export default IconsHeader
