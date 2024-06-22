import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Question.css';
import arrow from "..//../Images/arrow.svg";

const Question = ({ question, questionNumber, totalNumberOfQuestions }) => {

    return (<div id='question'>
        <span>{question.title}</span>
        <div id='answers'>
            {question.answers.map((answer, index) => <button key={index}>{String.fromCharCode(97 + index)}. {answer}</button>)}
        </div>
        <div id='buttons'>
            <NavLink id='back' to={questionNumber === 1 ? '/' : `/quiz/${questionNumber - 1}`}>Back</NavLink>
            {/* да се помисли как да се направи дота със стрелата */}
            <NavLink id='next' to={questionNumber === totalNumberOfQuestions ? '/results' : `/quiz/${questionNumber + 1}`}>
                <div className="navlink-content">
                    {questionNumber === totalNumberOfQuestions ? 'Discover Your Results' : `Next Question`}
                    {questionNumber !== totalNumberOfQuestions && <img src={arrow} alt='arrow' />}
                </div>
            </NavLink>
        </div>
    </div>)
}

Question.propTypes = {
    question: PropTypes.object,
    questionNumber: PropTypes.number,
    totalNumberOfQuestions: PropTypes.number
}

export default Question;