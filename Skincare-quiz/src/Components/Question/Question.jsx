import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Question.css';
import arrow from "..//../Images/arrow.svg";
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';
import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import toast from 'react-hot-toast';

const Question = ({ question, questionNumber, totalNumberOfQuestions }) => {
    const { selectedAnswers, setContext } = useContext(AppContext);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        if (selectedAnswers) {
            setSelectedAnswer(selectedAnswers[questionNumber-1])
        }
    }, [selectedAnswers, questionNumber])

    useEffect(() => {
        const newAnswers = selectedAnswers ? [...selectedAnswers] : [];
        newAnswers[questionNumber-1] = selectedAnswer;

        setContext({ selectedAnswers: newAnswers });
    }, [selectedAnswer]);

    const selectAnswer = (answer) => {
        setSelectedAnswer(answer);
    }

    const checkAnswer = (e) => {
        if (!selectedAnswer) {
            e.preventDefault();
            toast.error('Please select an answer before moving on');
        }
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
            <NavLink id='next' to={questionNumber === totalNumberOfQuestions ? '/results' : `/quiz/${questionNumber + 1}`} onClick={checkAnswer}>
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