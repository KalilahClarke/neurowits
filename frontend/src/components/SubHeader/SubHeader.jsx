import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './SubHeader.css'

const SubHeader = () => {
    return (
        <nav className="nav-links">
        <Link to='/blog'>Blog</Link>
        <Link to='/our-team'>Our Team</Link>
        <Link to='/services'>Services</Link>
        <a href="#process">How it works</a>
        <a href="#contact" className="btn-primary">Get a Demo</a>
      </nav>
    )
}
export default SubHeader