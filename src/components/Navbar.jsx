
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className="nav">

            <Link to="/alex-oleynik2" onClick={() => props.setCurrTab("Home")} className="site-title">Alex Oleynik</Link>
            <ul>
                <li className="link">
                    <Link onClick={() => props.setCurrTab("About")} className={props.currTab === 'About' ? 'nav-link active' : 'nav-link'} to="/about">About Me</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Portfolio")} className={props.currTab === 'Portfolio' ? 'nav-link active' : 'nav-link'} to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Tech")} className={props.currTab === 'Tech' ? 'nav-link active' : 'nav-link'} to="/tech">Tech Stack</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Resume")} className={props.currTab === 'Resume' ? 'nav-link active' : 'nav-link'} to="/resume">Resume</Link>
                </li>
                <li>
                    <Link onClick={() => props.setCurrTab("Contact")} className={props.currTab === 'Contact' ? 'nav-link active' : 'nav-link'} to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar