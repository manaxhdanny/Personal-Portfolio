import "../css/About.css";
import aboutMeImg from '../assets/About_Me_Image.jpeg'
import background from '../assets/background.jpg'
import TextToType from "./TextToType";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from "react";

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 600 });
    const aboutRef = useRef(null);
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setTrigger(entry.isIntersecting);
            },
            { threshold: 0.4 } // 40% of section must be visible
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="about-content">
                    <div className="about-info-wrapper">
                        <div className="about-title">
                            About Me<br/>
                            <div className="about-dash"></div>
                        </div>
                        <div className="about-img-wrapper">
                            <img src={aboutMeImg} className="about-img" alt="About Me Portrait" />
                        </div>
                        <div className="about-me-opener" ref={aboutRef}>
                            <TextToType text="Always building. Always improving. Always learning." trigger={trigger} />
                        </div>
                        <div className="about-me">My name is <span style={{ color: 'orange', fontWeight: 600 }}>Danny Bao</span>.
                            I'm a <span style={{ color: 'gold', fontWeight: 600 }}>Software Developer</span> based in Dallas, TX with a passion to turn complex problems into solutions that bring meaningful value to everyday life.
                            From a young age, I’ve always been drawn to mathematics and logical problem‑solving, and that foundation is a big part of what fuels my passion for innovation today.
                            I earned both my bachelor’s and master’s degrees in Software Engineering, growing from a first‑generation college student into the first in my family to earn a graduate degree.
                            This journey has shaped my curiosity and persistence, qualities that guide every project I dive into and every challenge I take on.
                            <div className="pg-break"></div>
                            When I’m not tinkering around with side projects, you’ll probably find me either out in nature, discovering new food spots with friends, or picking up a new hobby just for the fun of it — basically exploring the world the same way I explore code.
                        </div>
                    </div>
                </div>
            ) : (
                <div className="about-content">
                    <div className="about-info-wrapper">
                        <div className="about-title">About Me</div>
                        <div className="about-me-opener" ref={aboutRef}>
                            <TextToType text="Always building. Always improving. Always learning." trigger={trigger} />
                        </div>
                        <div className="about-me">My name is <span style={{ color: 'orange', fontWeight: 600 }}>Danny Bao</span>.
                            I'm a <span style={{ color: 'gold', fontWeight: 600 }}>Software Developer</span> based in Dallas, TX with a passion to turn complex problems into solutions that bring meaningful value to everyday life.
                            From a young age, I’ve always been drawn to mathematics and logical problem‑solving, and that foundation is a big part of what fuels my passion for innovation today.
                            I earned both my bachelor’s and master’s degrees in Software Engineering, growing from a first‑generation college student into the first in my family to earn a graduate degree.
                            This journey has shaped my curiosity and persistence, qualities that guide every project I dive into and every challenge I take on.
                            <div className="pg-break"></div>
                            When I’m not tinkering around with side projects, you’ll probably find me either out in nature, discovering new food spots with friends, or picking up a new hobby just for the fun of it — basically exploring the world the same way I explore code.
                        </div>
                    </div>
                    <div className="about-img-wrapper">
                        <img src={aboutMeImg} className="about-img" alt="About Me Portrait" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
