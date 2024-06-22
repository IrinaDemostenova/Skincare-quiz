import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./Views/StartPage/StartPage";
import Quiz from './Views/Quiz/Quiz';
import ResultsPage from './Views/ResultsPage/ResultsPage';

const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<StartPage/>}/>
    <Route path='/quiz/:questionNumber' element={<Quiz/>}/>
    <Route path='/results' element={<ResultsPage/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;