import { NavLink } from 'react-router-dom';
import './StartPage.css';
// import pic from "..//../Images/start-page-pic.png";

const StartPage = () => {
    return <>
    StartPage
    <NavLink to={'/quiz/1'}>Start Quiz</NavLink>
    </>
}

export default StartPage;