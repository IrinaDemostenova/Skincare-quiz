import questions from '..//../Data/questions.js'
import Question from '../../Components/Question/Question.jsx';
import { useParams } from 'react-router-dom';

/**
 * Renders the Quiz component.
 *
 * @returns {JSX.Element} The rendered Quiz component.
 */
const Quiz = () => {
    let { questionNumber } = useParams();
    questionNumber = Number(questionNumber);

    return <Question question={questions[questionNumber - 1]} questionNumber={questionNumber} totalNumberOfQuestions={questions.length} />
}

export default Quiz;