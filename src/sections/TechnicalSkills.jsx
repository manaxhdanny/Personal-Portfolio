import "../css/TechnicalSkills.css";
import background from '../assets/background.jpg'
import ciobrainLogo from '../assets/Project Card Images/CIOBrain.jfif'
import cometCavesLogo from '../assets/Project Card Images/Comet Caves.jpg'
import flightsPocketLogo from '../assets/Project Card Images/Flights Pocket.jpg'
import wiseCursorLogo from '../assets/Project Card Images/WiseCursor.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from 'react-responsive';
/* Skills Icons */
import androidStudioIcon from '../assets/Technical Skills Icons/Android Studio.png'
import cIcon from '../assets/Technical Skills Icons/C.png'
import cppIcon from '../assets/Technical Skills Icons/C++.png'
import cssIcon from '../assets/Technical Skills Icons/CSS.png'
import firebaseIcon from '../assets/Technical Skills Icons/Firebase.png'
import gitHubIcon from '../assets/Technical Skills Icons/GitHub.png'
import htmlIcon from '../assets/Technical Skills Icons/HTML.png'
import javaIcon from '../assets/Technical Skills Icons/Java.png'
import javaScriptIcon from '../assets/Technical Skills Icons/JavaScript.png'
import kotlinIcon from '../assets/Technical Skills Icons/Kotlin.png'
import nodeJSIcon from '../assets/Technical Skills Icons/NodeJS.png'
import phpIcon from '../assets/Technical Skills Icons/PHP.svg'
import pythonIcon from '../assets/Technical Skills Icons/Python.png'
import reactIcon from '../assets/Technical Skills Icons/React.png'
import sqlIcon from '../assets/Technical Skills Icons/SQL.png'
import tailwindCSSIcon from '../assets/Technical Skills Icons/Tailwind CSS.png'
import unityIcon from '../assets/Technical Skills Icons/Unity.png'
import vsCodeIcon from '../assets/Technical Skills Icons/VS Code.png'

const TechnicalSkills = () => {
    const skillsList = [
        { type: "Programming Languages", list: [{ name: "Java", yoe: "1 year", icon: javaIcon }, { name: "Python", yoe: "1 year", icon: pythonIcon }, { name: "JavaScript", yoe: "1 year", icon: javaScriptIcon }, { name: "Kotlin", yoe: "1 year", icon: kotlinIcon }, { name: "SQL", yoe: "1 year", icon: sqlIcon }, { name: "PHP", yoe: "1 year", icon: phpIcon }, { name: "C++", yoe: "1 year", icon: cppIcon }, { name: "C", yoe: "1 year", icon: cIcon }] },
        { type: "Frontend Development", list: [{ name: "React", yoe: "1 year", icon: reactIcon }, { name: "HTML", yoe: "1 year", icon: htmlIcon }, { name: "CSS", yoe: "1 year", icon: cssIcon }, { name: "Tailwind CSS", yoe: "1 year", icon: tailwindCSSIcon }] },
        { type: "Backend & Cloud", list: [{ name: "Node.js", yoe: "1 year", icon: nodeJSIcon }, { name: "Firebase", yoe: "1 year", icon: firebaseIcon }] },
        { type: "Tools & Platforms", list: [{ name: "GitHub", yoe: "1 year", icon: gitHubIcon }, { name: "VS Code", yoe: "1 year", icon: vsCodeIcon }, { name: "Android Studio", yoe: "1 year", icon: androidStudioIcon }, { name: "Unity", yoe: "1 year", icon: unityIcon }] }
    ];
    const skillsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 600 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: isMobile ? 0.15 : 0.4 } // 15% of section must be visible for mobile, else 40% of section must be visible
        );

        if (skillsRef.current) observer.observe(skillsRef.current);
        return () => observer.disconnect();
    }, []);
    
    return (
        <div className="skills-content">
            <div className="skills-section-title">
                TECHNICAL SKILLS<br/>
                <div className="skills-dash"></div>
            </div>
            <div className="skills-grid" ref={skillsRef}>
                {skillsList.map((s, index) => (
                    <div className={`skills-card ${isVisible ? "fade-in" : ""}`} style={{ transitionDelay: isVisible ? `${index * 0.2}s` : "0s" }}>
                        <div className="skills-card-title">
                            {s.type}
                        </div>
                        <div className="skills-card-items-wrapper">
                            {s.list.map((item) => (
                                <div className="skills-card-content">
                                    <div className="skills-item-icon">
                                        <img src={item.icon} width={20} alt="Skill Icon" />
                                    </div>
                                    <div className="skills-card-item">
                                        {item.name}<br/>
                                        <span className="skills-yoe">{item.yoe}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSkills;
