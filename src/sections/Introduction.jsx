import "../css/Introduction.css";
import discordIcon from '../assets/discord-logo.png'
import instagramIcon from '../assets/instagram-logo.png'
import linkedInIcon from '../assets/linkedIn-logo.png'
import selfPortrait from '../assets/new selfie.png'

const Introduction = () => {
    const resumeRedirect = () => {
        window.open("https://1drv.ms/b/c/C15BCB72315D9978/IQDkbt51u8h2QpIPalOM4gIUAcF3dm2F-kLqAj7zVCtoMT8?e=ywipcK", "_blank", "noopener,noreferrer");
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

    return (
        <div className="intro-content">
            <div className="intro-text">
                <h5 className="welcome-message">HELLO THERE, MY NAME IS </h5>
                <div className="intro-title">
                    <span>DANNY BAO</span><br></br><br></br>
                    <span className="intro-job-role">Software&nbsp;Developer</span><br></br>
                    <span className="intro-location">Based in DALLAS, TX</span>
                </div>
                <button className="resume-button" onClick={resumeRedirect}>View My Resumé</button>
                <h4 className="socials-message">
                    CONNECT WITH ME ON
                </h4>
                <div className="socials-icons">
                    <button className="socials-icons-button-formatting" onClick={discordRedirect}>
                        <img src={discordIcon} className="discord-image" style={{ width: '1.68vw' }} alt="Discord Icon" />
                    </button>
                    <button className="socials-icons-button-formatting" onClick={instagramRedirect}>
                        <img src={instagramIcon} className="instagram-image" style={{ width: '1.3vw' }} alt="Instagram Icon" />
                    </button>
                    <button className="socials-icons-button-formatting" onClick={linkedInRedirect}>
                        <img src={linkedInIcon} className="linkedIn-image" style={{ width: '2.3vw' }} alt="LinkedIn Icon" />
                    </button>
                </div>
            </div>
            <div className="portrait-wrapper">
                <img src={selfPortrait} className="self-image" alt="Self Portrait" />
            </div>
        </div>
    );
};

export default Introduction;
