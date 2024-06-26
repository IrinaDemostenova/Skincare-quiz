import { createContext } from "react";

/**
 * Context object for the application.
 *
 * @typedef {Object} AppContext
 * @property {any} selectedAnswers - The selected answers.
 * @property {Function} setContext - Function to update the context.
 */
const AppContext = createContext({
    selectedAnswers: null,
    setContext: () => { },
});

export default AppContext;