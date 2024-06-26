import { NavLink } from "react-router-dom";
import background from "..//../Images/404.jfif";
import './NotFound.css';

/**
 * Renders the NotFound component.
 * This component is displayed when a page is not found.
 *
 * @returns {JSX.Element} The rendered NotFound component.
 */
const NotFound = () => {
    return (
        <div id="not-found">
        <img src={background} alt="404 error" />
        <NavLink to={'/'}>Go Back</NavLink>
        </div>
    )
}

export default NotFound;