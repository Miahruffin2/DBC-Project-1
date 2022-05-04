import React from "react";
import { SiTiktok } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'

export default function About () {
    return (
        <>
        <div className="about-page">
        <div className="about">
            <div className="banner">
                <h1>JEREMIAH RUFFIN</h1>
                </div>
        </div>
        <div className="about-content">
            <h2>Digital Producer</h2>
        </div>
        <div className="about-links">
            <a href="https://www.tiktok.com/@miahfinance?lang=en" target="_blank"><SiTiktok size={'30px'} /></a>
            <a href="https://www.instagram.com/miahruffin/" target="_blank"><SiInstagram size={'30px'} /></a>
            <a href="https://www.linkedin.com/in/jeremiah-ruffin-6a587b209/" target="_blank"><SiLinkedin size={'30px'} /></a>
        </div>
        </div>
        </>
    )
}