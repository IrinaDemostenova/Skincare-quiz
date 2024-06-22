import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Question.css';
import arrow from "..//../Images/arrow.svg";
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';

const Question = ({ question, questionNumber, totalNumberOfQuestions }) => {

    return (<div id='question'>
        <span id='question-title'>{question.title}</span>
        <div id='answers'>
            {question.answers.map((answer, index) => <button key={index}>{String.fromCharCode(97 + index)}. {answer}</button>)}
        </div>
        <div id='buttons'>
            <NavLink id='back' to={questionNumber === 1 ? '/' : `/quiz/${questionNumber - 1}`}>Back</NavLink>
            <NavLink id='next' to={questionNumber === totalNumberOfQuestions ? '/results' : `/quiz/${questionNumber + 1}`}>
                <span>{questionNumber === totalNumberOfQuestions ? 'Discover Your Results' : `Next Question`}</span>
                {questionNumber !== totalNumberOfQuestions && <img src={arrow} alt='arrow' />}
            </NavLink>
        </div>
        <CircularProgressBar progress={(questionNumber / totalNumberOfQuestions) * 100} id='circular-bar' progressText={`${questionNumber}/${totalNumberOfQuestions}`}/>
    </div>)
}

Question.propTypes = {
    question: PropTypes.object,
    questionNumber: PropTypes.number,
    totalNumberOfQuestions: PropTypes.number
}

export default Question;