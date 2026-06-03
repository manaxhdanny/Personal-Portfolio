import "../css/Contact.css";
import discordIcon from '../assets/discord-logo.png';
import githubIcon from '../assets/github-logo.png'
import instagramIcon from '../assets/instagram-logo.png'
import linkedInIcon from '../assets/linkedIn-logo.png'
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const copyEmail = () => {
        navigator.clipboard.writeText("dannybao619@gmail.com");
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000); // 2 seconds
    };
    const resumeRedirect = () => {
        window.open("https://1drv.ms/b/c/C15BCB72315D9978/IQDkbt51u8h2QpIPalOM4gIUAcF3dm2F-kLqAj7zVCtoMT8?e=ywipcK", "_blank", "noopener,noreferrer");
    };
    const discordRedirect = () => {
        window.open("https://discord.com/users/373338698139303936", "_blank", "noopener,noreferrer");
    };
    const githubRedirect = () => {
        window.open("https://github.com/manaxhdanny", "_blank", "noopener,noreferrer");
    };
    const instagramRedirect = () => {
        window.open("https://www.instagram.com/manaxh_danny/", "_blank", "noopener,noreferrer");
    };
    const linkedInRedirect = () => {
        window.open("https://www.linkedin.com/in/dannybao/", "_blank", "noopener,noreferrer");
    };
    
    return (
        <div className="contact-content">
            <div className="contact-title">
                <div className="contact-title-1">GET IN</div>
                <div className="contact-title-2">TOUCH.</div>
                <div className="contact-title-email">
                    <span className="hover-box" onClick={copyEmail}>
                        {copied ? "   Copied!   " : "Click to copy"}
                    </span>
                    <span className="my-email">dannybao619@gmail.com</span>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-message">Feel free to contact me through any of the platforms below if you have any questions or concerns.</div>
                <div className="contact-btn-wrapper">
                    <div className="contact-btn-rows">
                        <button className="contact-btn" onClick={discordRedirect}>
                            <img src={discordIcon} className="discord-img" style={{ width: '1.7vw' }} alt="Discord Icon" />
                        </button>
                        Discord
                    </div>
                    <div className="contact-btn-rows">
                        <button className="contact-btn" onClick={githubRedirect}>
                            <img src={githubIcon} className="github-img" style={{ width: '2.2vw' }} alt="GitHub Icon" />
                        </button>
                        GitHub
                    </div>
                    <div className="contact-btn-rows">
                        <button className="contact-btn" onClick={instagramRedirect}>
                            <img src={instagramIcon} className="instagram-img" style={{ width: '1.4vw' }} alt="Instagram Icon" />
                        </button>
                        Instagram
                    </div>
                    <div className="contact-btn-rows">
                        <button className="contact-btn" onClick={linkedInRedirect}>
                            <img src={linkedInIcon} className="linkedIn-img" style={{ width: '2.3vw' }} alt="LinkedIn Icon" />
                        </button>
                        LinkedIn
                    </div>
                </div>
            </div>
            <div className="contact-footer-btn-row">
                <button className="contact-footer-btn" onClick={resumeRedirect}>Resumé</button>
                <button className="contact-footer-btn" onClick={githubRedirect}>GitHub</button>
                <button className="contact-footer-btn" onClick={linkedInRedirect}>LinkedIn</button>
            </div>
            <div className="contact-footer">© 2026 Danny Bao. All rights reserved.</div>
        </div>
    );
};

export default Contact;
