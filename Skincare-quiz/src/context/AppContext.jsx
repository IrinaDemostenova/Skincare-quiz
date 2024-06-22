import { createContext } from "react";

const AppContext = createContext({
    selectedAnswers: null,
    setContext: () => { },
});

export default AppContext;