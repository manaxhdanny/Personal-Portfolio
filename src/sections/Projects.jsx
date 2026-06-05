import "../css/Projects.css";
import background from '../assets/background.jpg'
import ciobrainLogo from '../assets/Project Card Images/CIOBrain.jfif'
import cometCavesLogo from '../assets/Project Card Images/Comet Caves.jpg'
import flightsPocketLogo from '../assets/Project Card Images/Flights Pocket.jpg'
import wiseCursorLogo from '../assets/Project Card Images/WiseCursor.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
    const projects = [
        { id: 1, title: "WiseCursor Webpage", image: wiseCursorLogo, description: "Official webpage of WiseCursor. This is a React-based webpage built from high‑fidelity UI/UX designs, combining responsive components with pixel‑perfect execution of layouts in collaboration with Project Managers and UX design teams.", tools: "React / Tailwind CSS", date: "Dec 2025 - In Progress", url: "https://www.wisecursor.com/waitlist"},
        { id: 2, title: "DFW Flight Companion", image: background, description: "Graduate Capstone Project developed for DFW Airport. This is a dedicated Android navigation tool that helps travelers locate and navigate the amenities within Terminal D at DFW Airport. It features a mock indoor map with the amenities, offers turn-by-turn navigation, and allows users to filter amenities to find the ones that best meet their desired needs.", tools: "Kotlin, Node.js, Google Firebase", date: "Jan 2026 - May 2026", url: "https://github.com/GamingSlayerNS/DFW-Flight-Companion.git" },
        { id: 3, title: "Boogle Search Engine", image: background, description: "A KWIC-based search engine that utilizes a Keyword‑in‑Context indexing system to deliver relevant search results.", tools: "React, Python, Google Firebase", date: "Aug 2025 - Dec 2025", url: "https://github.com/LeiNode/Boogle-Search-Engine.git" },
        { id: 4, title: "Flights Pocket Booking Platform", image: flightsPocketLogo, description: "An all‑in‑one travel booking platform for flights, hotels, rental cars, and cruises. It also features a booking‑lookup tool that allows admins to retrieve booking records from the SQL database using booking ID numbers.", tools: "PHP, SQL, CSS", date: "Aug 2025 - Dec 2025", url: "https://github.com/GamingSlayerNS/FlightsPocket.git" },
        { id: 5, title: "CIOBrain Graph Database", image: ciobrainLogo, description: "Undergraduate Capstone Project developed for Fellows Consulting Group. This is a web-based graph database application designed to help CIOs track interconnected IT assets, such as applications, databases, and infrastructure, and visualize the relationships between these assets within their IT environment.", tools: "React, Node.js", date: "Feb 2023 - May 2023", url: "https://github.com/CIOBrain/ciobrain-mono.git" },
        { id: 6, title: "Comet Caves Software Requirements Specification Document", image: cometCavesLogo, description: "A 62-page Requirements Specification Document following the Volere process that details the constraints, functional and non-functional requirements, UML scenario flows, use cases, and full wireframes for the Comet Caves system.", tools: "Requirements Documentation", date: "Feb 2023 - May 2023", url: "https://1drv.ms/b/c/C15BCB72315D9978/IQCEuJiEcrRkT4NO1mkx-S4UAdZv8TWfnu39g283GYCWkdo?e=NY11c7" }
    ];
    const isMobile = useMediaQuery({ maxWidth: 734 });
    
    return (
        <div className="projects-content">
            <div className="projects-subtext">SOME OF MY RECENT WORKS</div><br></br>
            <div className="projects-text">
                PROJECTS<br/>
                <div className="projects-dash"></div>
            </div>
            {isMobile ? (
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    slidesPerView={1}
                    centeredSlides={true}
                    grabCursor={true}
                    style={{
                        maxWidth: '260px',
                        padding: '4px 8px 48px 8px',
                        "--swiper-pagination-color": "orangered", // active
                        "--swiper-pagination-bullet-inactive-color": "white", // inactive
                        "--swiper-pagination-bullet-size": "12px",
                    }}
                >
                    {projects.map((p) => (
                        <SwiperSlide key={p.id} className="project-card">
                            <a
                                href={p.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-card-formatting"
                            >
                                <div className="project-image">
                                <img src={p.image} alt={p.title} />
                                </div>

                                <h3 className="project-title">{p.title}</h3>
                                <p className="project-desc">{p.description}</p>

                                <div className="project-tools-date">
                                {p.tools}<br />
                                {p.date}
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div className="projects-grid">
                    {projects.map((p) => (
                        <a
                            key={p.id}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <div className="project-image">
                                <img src={p.image} alt={p.title} />
                            </div>

                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-desc">{p.description}</p>
                            <div className="project-tools-date">
                                {p.tools}<br></br>
                                {p.date}
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
