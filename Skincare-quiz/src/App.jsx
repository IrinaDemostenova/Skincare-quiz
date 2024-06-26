import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./Views/StartPage/StartPage";
import Quiz from './Views/Quiz/Quiz';
import ResultsPage from './Views/ResultsPage/ResultsPage';
import { useEffect, useState } from 'react';
import AppContext from './context/AppContext';
import { Toaster } from 'react-hot-toast';
import NotFound from './Views/NotFound/NotFound';

const App = () => {
  const storedContext = JSON.parse(localStorage.getItem('appContext'));
  const [context, setContext] = useState(storedContext || {
    selectedAnswers: null,
  });

  useEffect(() => {
    localStorage.setItem('appContext', JSON.stringify(context));
  }, [context]);

  return <>
    <AppContext.Provider value={{ ...context, setContext }}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/quiz/:questionNumber' element={<Quiz />} />
          <Route path='/results' element={<ResultsPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  </>
}

export default App;