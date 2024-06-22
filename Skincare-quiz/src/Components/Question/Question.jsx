import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Question.css';
import arrow from "..//../Images/arrow.svg";
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';

const Question = ({ question, questionNumber, totalNumberOfQuestions }) => {
    const { selectedAnswers, setContext } = useContext(AppContext);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        if (selectedAnswers) {
            setSelectedAnswer(selectedAnswers[questionNumber])
        }
    }, [selectedAnswers, questionNumber])

    useEffect(() => {
        const newAnswers = {
            ...selectedAnswers,
            [questionNumber]: selectedAnswer,
        }

        setContext({ selectedAnswers: newAnswers });
    }, [selectedAnswer]);

    const selectAnswer = (answer) => {
        setSelectedAnswer(answer);
    }

    return (<div id='question'>
        <div id='title-circle-content'>
            <span id='question-title'>{question.title}</span>
            <CircularProgressBar progress={(questionNumber / totalNumberOfQuestions) * 100} id='circular-bar' progressText={`${questionNumber}/${totalNumberOfQuestions}`} />
        </div>
        <div id='answers'>
            {question.answers.map((answer, index) => (
                <button key={index} onClick={() => selectAnswer(answer)} className={selectedAnswer === answer ? 'selected' : undefined}>
                    {String.fromCharCode(97 + index)}. {answer}
                </button>
            ))}
        </div>
        <div id='buttons'>
            <NavLink id='back' to={questionNumber === 1 ? '/' : `/quiz/${questionNumber - 1}`}>Back</NavLink>
            <NavLink id='next' to={questionNumber === totalNumberOfQuestions ? '/results' : `/quiz/${questionNumber + 1}`}>
                <span>{questionNumber === totalNumberOfQuestions ? 'Discover Your Results' : `Next Question`}</span>
                {questionNumber !== totalNumberOfQuestions && <img src={arrow} alt='arrow' />}
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