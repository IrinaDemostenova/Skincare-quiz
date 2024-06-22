import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./Views/StartPage/StartPage";
import Quiz from './Views/Quiz/Quiz';
import ResultsPage from './Views/ResultsPage/ResultsPage';
import { useState } from 'react';
import AppContext from './context/AppContext';

const App = () => {
  const [context, setContext] = useState({
    selectedAnswers: null,
  });

  return <>
    <AppContext.Provider value={{ ...context, setContext }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/quiz/:questionNumber' element={<Quiz />} />
          <Route path='/results' element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  </>
}

export default App;