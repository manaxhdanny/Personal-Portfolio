import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import githubIcon from '../assets/github-logo.png'
import linkedInIcon from '../assets/linkedIn-logo.png'
import initialsLogo from '../assets/initials-logo.png'
import closeIcon from '../assets/close-icon.png'
import hamburgerIcon from '../assets/hamburger-icon.png'
import { useState, useEffect } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [rotated, setRotated] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navButtons = document.querySelectorAll(".nav-btn");

        navButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const id = btn.dataset.target;
                document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
            });
        });

        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navButtons.forEach(btn => btn.classList.remove("active"));

                const activeBtn = document.querySelector(
                `.nav-btn[data-target="${id}"]`
                );

                if (activeBtn) activeBtn.classList.add("active");
            }
            });
        },
        { rootMargin: "-60% 0px -60% 0px", threshold: 0 } // 40% of section must be visible
        );

        sections.forEach(section => observer.observe(section));
        
        return () => observer.disconnect(); // cleanup
    }, []);

    const githubRedirect = () => {
        window.open("https://github.com/manaxhdanny", "_blank", "noopener,noreferrer");
    };
    const linkedInRedirect = () => {
        window.open("https://www.linkedin.com/in/dannybao/", "_blank", "noopener,noreferrer");
    };
    const resumeRedirect = () => {
        window.open("https://1drv.ms/b/c/C15BCB72315D9978/IQDkbt51u8h2QpIPalOM4gIUAcF3dm2F-kLqAj7zVCtoMT8?e=ywipcK", "_blank", "noopener,noreferrer");
    };

    return (
        <nav className="navbar">
            <div className="initials-logo" onClick={() => {
                document.getElementById("introduction").scrollIntoView({ behavior: "smooth", block: "start" });
                setOpen(!open);
                setRotated(!rotated);
                document.body.style.overflow = !open ? "hidden" : "auto";
            }}>
                <img src={initialsLogo} className="initialsLogo" alt="Initials Logo" />
                Danny Bao
            </div>
            <div className="nav-content">
                <button className="nav-btn" data-target="introduction">
                    Introduction
                </button>
                <button className="nav-btn" data-target="projects">
                    Projects
                </button>
                <button className="nav-btn" data-target="about">About</button>
                <button className="nav-btn" data-target="contact">Contact</button>
            </div>
            <div className="navbar-socials-wrapper">
                <button className="navbar-socials" onClick={githubRedirect}>
                    <img src={githubIcon} className="navbar-socials-icon" alt="GitHub Icon" />
                </button>
                <button className="navbar-socials" onClick={linkedInRedirect}>
                    <img src={linkedInIcon} className="navbar-socials-icon" alt="LinkedIn Icon" />
                </button>
            </div>
            <div className={`mobile-menu-overlay ${open ? "open" : ""}`}>
                <div className="mobile-menu">
                    <button className="nav-btn" data-target="introduction" onClick={() => {
                        setOpen(!open);
                        setRotated(!rotated);
                        document.body.style.overflow = !open ? "hidden" : "auto";
                    }}>
                        Introduction
                    </button>
                    <button className="nav-btn" data-target="projects" onClick={() => {
                        setOpen(!open);
                        setRotated(!rotated);
                        document.body.style.overflow = !open ? "hidden" : "auto";
                    }}>
                        Projects
                    </button>
                    <button className="nav-btn" data-target="about" onClick={() => {
                        setOpen(!open);
                        setRotated(!rotated);
                        document.body.style.overflow = !open ? "hidden" : "auto";
                    }}>
                        About
                    </button>
                    <button className="nav-btn" data-target="contact" onClick={() => {
                        setOpen(!open);
                        setRotated(!rotated);
                        document.body.style.overflow = !open ? "hidden" : "auto";
                    }}>
                        Contact
                    </button>
                    <div className="nav-dash"></div>
                    <button className="nav-btn" style={{ marginTop: '12px' }} onClick={() => {
                        setOpen(!open);
                        setRotated(!rotated);
                        document.body.style.overflow = !open ? "hidden" : "auto";
                        resumeRedirect();
                    }}>
                        Resumé
                    </button>

                    <div className="mobile-socials">
                        <button className="navbar-socials" onClick={githubRedirect}>
                            <img src={githubIcon} className="navbar-socials-icon" />
                        </button>
                        <button className="navbar-socials" onClick={linkedInRedirect}>
                            <img src={linkedInIcon} className="navbar-socials-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="hamburger-button">
                <img src={open ? closeIcon : hamburgerIcon} className={`hamburger-icon ${rotated ? "rotate" : ""}`} onClick={() => {
                    setOpen(!open);
                    setRotated(!rotated);
                    document.body.style.overflow = !open ? "hidden" : "auto";
                }}/>
            </div>
        </nav>
    );
};

export default Navbar;
