import { NavLink } from 'react-router-dom';
import './StartPage.css';
import AppContext from '../../context/AppContext';
import { useContext, useEffect } from 'react';
import pic from "..//../Images/start-page-pic.png";

/**
 * Represents the start page of the skincare quiz.
 * @component
 */
const StartPage = () => {
    const { setContext } = useContext(AppContext);

    useEffect(() => {
        setContext({ selectedAnswers: null });
    }, [])

    return (
        <div id='start-page'>
            <img src={pic} alt="background" />
            <div id='start-page-text'>
                <h1>Build a self care routine suitable for you</h1>
                <p>Take out test to get a personalized self care routine based on your needs.</p>
                <NavLink to={'/quiz/1'}>Start the quiz</NavLink>
            </div>
        </div>
    )
}

export default StartPage;