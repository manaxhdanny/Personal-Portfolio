import "../css/About.css";
import aboutMeImg from '../assets/About_Me_Image.jpeg'
import background from '../assets/background.jpg'
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const isMobile = useMediaQuery({ maxWidth: 600 });

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
                        <div className="about-me-opener">Always building. Always improving. Always learning.</div>
                        <div className="about-me">My name is <span style={{ color: 'orange', fontWeight: 600 }}>Danny Bao</span>.
                            I'm a <span style={{ color: 'gold', fontWeight: 600 }}>Software Developer</span> based in Dallas, TX with a passion to turn complex problems into solutions that bring meaningful value to everyday life.
                            From a young age, I’ve always been drawn to mathematics and logical problem‑solving, and that foundation is a big part of what fuels my passion for innovation today.
                            I earned both my bachelor’s and master’s degrees in Software Engineering, growing from a first‑generation college student into the first in my family to earn a graduate degree.
                            This journey has shaped my curiosity and persistence, qualities that guide every project I dive into and every challenge I take on.
                            <div style={{ marginTop: '3vh' }}></div>
                            When I’m not tinkering around with side projects, you’ll probably find me either out in nature, discovering new food spots with friends, or picking up a new hobby just for the fun of it — basically exploring the world the same way I explore code.
                        </div>
                    </div>
                </div>
            ) : (
                <div className="about-content">
                    <div className="about-info-wrapper">
                        <div className="about-title">About Me</div>
                        <div className="about-me-opener">Always building. Always improving. Always learning.</div>
                        <div className="about-me">My name is <span style={{ color: 'orange', fontWeight: 600 }}>Danny Bao</span>.
                            I'm a <span style={{ color: 'gold', fontWeight: 600 }}>Software Developer</span> based in Dallas, TX with a passion to turn complex problems into solutions that bring meaningful value to everyday life.
                            From a young age, I’ve always been drawn to mathematics and logical problem‑solving, and that foundation is a big part of what fuels my passion for innovation today.
                            I earned both my bachelor’s and master’s degrees in Software Engineering, growing from a first‑generation college student into the first in my family to earn a graduate degree.
                            This journey has shaped my curiosity and persistence, qualities that guide every project I dive into and every challenge I take on.
                            <div style={{ marginTop: '3vh' }}></div>
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
