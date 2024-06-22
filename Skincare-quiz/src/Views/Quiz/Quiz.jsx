import questions from '..//../Data/questions.js'
import Question from '../../Components/Question/Question.jsx';
import { useParams } from 'react-router-dom';

const Quiz = () => {
    let { questionNumber } = useParams();
    questionNumber = Number(questionNumber);

    return <Question question={questions[questionNumber - 1]} questionNumber={questionNumber} totalNumberOfQuestions={questions.length}/>
}

export default Quiz;