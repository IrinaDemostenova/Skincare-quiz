# Front-end Task - Skincare Quiz
The project is hosted live [here](https://skincare-quiz-fbp0ppg4a-irinademostenovas-projects.vercel.app/). Feel free to visit and explore the Hair Care Routine Finder SPA.

## Hair Care Routine Finder SPA

This project is a Single Page Application (SPA) built with React, designed to help users find their ideal hair care routine. Based on a series of questions, the application will recommend products tailored to the user's specific hair care needs.

### Features and Requirements

- **Start Page**: The entry point of the application.
- **Question Navigation**: Each question is presented on a separate route (standalone page), with options to navigate back to previous questions.
- **Progress Indicator**: A circular progress bar displays the number of questions left, enhancing user engagement.
- **Results Page**: Based on the user's answers, product recommendations are displayed.

### Project Structure

The project is organized as follows to ensure easy navigation and maintenance:

- `/src` - The main source directory for the application's code.
  - `/Components` - Houses reusable UI components.
  -  `/context` - Contains context providers for managing global state across the application.
  -  `/Data` - Stores static data that can be used throughout the application.
  - `/Images` - Images used within the application.
  - `/services` - Functions for external API calls, including fetching product recommendations.
  - `/Views` - Contains the React components that represent different pages of the application, including the start page, quiz page, and the results page.
  - `App.jsx` - The main React component that includes routing logic.
  - `main.jsx` - The entry point for the React application.
- `/node_modules` - Contains all the npm packages and dependencies for the project (not tracked in version control).
- `package.json` - Defines the project's npm dependencies, scripts, and other metadata.
- `README.md` - Provides an overview of the project, including setup instructions and other important information.


## Instructions on How to Set Up and Run the Project Locally:

1. Clone the repository.
2. Open the terminal and navigate to the folder where the `package.json` file is located.
3. Run the command `npm i` or `npm install` to install the project dependencies.
4. After the dependencies are installed, run the command `npm run dev` to start the project.
5. Finally, open a web browser and navigate to `http://localhost:3000`, or alternatively, press Ctrl and click the link in the terminal to open it.