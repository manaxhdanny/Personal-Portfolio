import "../css/Introduction.css";
import discordIcon from '../assets/discord-logo.png'
import instagramIcon from '../assets/instagram-logo.png'
import linkedInIcon from '../assets/linkedIn-logo.png'
import selfPortrait from '../assets/new selfie.png'
import TextToType from "./TextToType";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from "react";

const Introduction = () => {
    const resumeRedirect = () => {
        window.open("https://1drv.ms/b/c/C15BCB72315D9978/IQAFUos1FgcJS5O87aa7hdKdAaIp4YyFkWYMhvflwPxPF9s?e=qq2zzd", "_blank", "noopener,noreferrer");
    };
    const discordRedirect = () => {
        window.open("https://discord.com/users/373338698139303936", "_blank", "noopener,noreferrer");
    };
    const instagramRedirect = () => {
        window.open("https://www.instagram.com/manaxh_danny/", "_blank", "noopener,noreferrer");
    };
    const linkedInRedirect = () => {
        window.open("https://www.linkedin.com/in/dannybao/", "_blank", "noopener,noreferrer");
    };
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const introRef = useRef(null);
    const startTextRef = useRef(null);
    const [trigger, setTrigger] = useState(false);
    const [typedDone, setTypedDone] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setTrigger(true);
            } else {
                setTrigger(false);
                setTypedDone(false);
            }
        },
        { threshold: 0.4 } // 40% of section must be visible
        );

        if (introRef.current) {
            observer.observe(introRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="intro-content">
                    <div className="portrait-wrapper">
                        <img src={selfPortrait} className="self-image" alt="Self Portrait" />
                    </div>
                    <div className="intro-text">
                        <h5 className="welcome-message">
                            HELLO THERE, MY NAME IS
                        </h5>
                        <div className="intro-title" ref={introRef}>
                            <span>
                                <TextToType text="DANNY BAO" trigger={trigger} cursorMode="blink" />    
                            </span><br/>
                            <span className="intro-job-role">Software&nbsp;Developer</span><br/>
                            <span className="intro-location">Based in DALLAS, TX</span>
                        </div>
                        <button className="resume-button" onClick={resumeRedirect}>View My Resumé</button>
                        <h4 className="socials-message">
                            CONNECT WITH ME ON
                        </h4>
                        <div className="socials-icons">
                            <button className="socials-icons-button-formatting" onClick={discordRedirect}>
                                <img src={discordIcon} className="discord-image" alt="Discord Icon" />
                            </button>
                            <button className="socials-icons-button-formatting" onClick={instagramRedirect}>
                                <img src={instagramIcon} className="instagram-image" alt="Instagram Icon" />
                            </button>
                            <button className="socials-icons-button-formatting" onClick={linkedInRedirect}>
                                <img src={linkedInIcon} className="linkedIn-image" alt="LinkedIn Icon" />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="intro-content">
                    <div className="intro-text">
                        <h5 className="welcome-message">
                            HELLO THERE, MY NAME IS
                        </h5>
                        <div className="intro-title" ref={introRef}>
                            <span>
                                <TextToType text="DANNY BAO" trigger={trigger} cursorMode="blink" />
                            </span><br></br>
                            <span className="intro-job-role">Software&nbsp;Developer</span><br></br>
                            <span className="intro-location">Based in DALLAS, TX</span>
                        </div>
                        <button className="resume-button" onClick={resumeRedirect}>View My Resumé</button>
                        <h4 className="socials-message">
                            CONNECT WITH ME ON
                        </h4>
                        <div className="socials-icons">
                            <button className="socials-icons-button-formatting" onClick={discordRedirect}>
                                <img src={discordIcon} className="discord-image" alt="Discord Icon" />
                            </button>
                            <button className="socials-icons-button-formatting" onClick={instagramRedirect}>
                                <img src={instagramIcon} className="instagram-image" alt="Instagram Icon" />
                            </button>
                            <button className="socials-icons-button-formatting" onClick={linkedInRedirect}>
                                <img src={linkedInIcon} className="linkedIn-image" alt="LinkedIn Icon" />
                            </button>
                        </div>
                    </div>
                    <div className="portrait-wrapper">
                        <img src={selfPortrait} className="self-image" alt="Self Portrait" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Introduction;
