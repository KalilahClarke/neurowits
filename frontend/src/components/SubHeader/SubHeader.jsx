import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './SubHeader.css'

const SubHeader = () => {
    return (
        <nav className="nav-links">
        <a href="#blog">Blog</a>
        <Link to="/our-team">Our Team</Link>
        <a href="#Solutions">Solutions</a>
        <a href="#process">How it works</a>
        <a href="#contact" className="btn-primary">Get a Demo</a>
      </nav>
    )
}
export default SubHeader