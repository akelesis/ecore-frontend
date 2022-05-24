# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## About the Approach

The idea was simple and I decided to create three pages where the user would navigate (TeamsPage, TeamPage and MemberPage).
TeamsPage: Where all the teams are accessible, in this page is possible to find and filter any existing team
TeamPage: Where you can find more information about a specific team
MemberPage: The page where you can see specific information about any selected team member.

### Filtering information

The filter text bar has a property that only allows filter function to trigger after 500 miliseconds in order to avoid wasting resources.
