
A concise description of the project.
## Handling CORS Errors
If you encounter network CORS (Cross-Origin Resource Sharing) errors while running the project and see “Network Error!!”, you can use browser extensions to temporarily fix the problem.
Enable the extension while testing your application. Remember, this is a temporary solution and should not be used in a production environment.
## API Requests with React Query
This project utilizes React Query for handling API requests. React Query comes with built-in features for handling retries when an API request fails.
### Retry Behavior
By default, React Query will automatically retry failed queries. If an API request encounters an error, React Query will make additional attempts to fetch the data. The number of retry attempts is configurable. This is the reason you will not see the network error immediately.
## Getting Started
These instructions will help you set up and run the project on your local machine for checking results and code review.
## Prerequisites
Make sure you have Node.js and npm installed on your machine.
## Installing
Clone the repository:

https://github.com/Shokrollahi-Ali/coding-exercise.git

cd your-project

Install dependencies:

npm install

Running the Project

To start the development server, run:

npm start

This will launch the application in your default web browser. You can view it at http://localhost:3000.

##Project Structure

Technologies Used

React-v18.2.0: The JavaScript library for building user interfaces.

TypeScript-v4.9.5: A superset of JavaScript that adds static typing.

React Router Dom-v6.21.0: For implementing dynamic routing in web applications.

Axios-v1.6.2: A promise-based HTTP client for making API calls.

React Query-v3.39.3: A library for handling and caching API requests.

Material UI-v5.15.1: A React component library.

Context API: Used for state management.

**Notes on State Management**
For this project, a state management solution like Redux wasn't necessary. The Context API was sufficient to manage state effectively.
Unit tests are not currently implemented. If given more time, writing comprehensive unit tests would be a priority.
