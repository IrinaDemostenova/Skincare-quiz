import { NavLink } from 'react-router-dom';
import './StartPage.css';
import AppContext from '../../context/AppContext';
import { useContext, useEffect } from 'react';
// import pic from "..//../Images/start-page-pic.png";

const StartPage = () => {
    const { setContext} = useContext(AppContext);

    useEffect(() => {
        setContext({selectedAnswers: null});
    }, [])

    return <>
    StartPage
    <NavLink to={'/quiz/1'}>Start Quiz</NavLink>
    </>
}

export default StartPage;