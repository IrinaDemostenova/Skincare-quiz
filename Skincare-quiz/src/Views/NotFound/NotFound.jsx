import { NavLink } from "react-router-dom";
import background from "..//../Images/404.jfif";
import './NotFound.css';

const NotFound = () => {
    return (
        <div id="not-found">
        <img src={background} alt="404 error" />
        <NavLink to={'/'}>Go Back</NavLink>
        </div>
    )
}

export default NotFound;