# Interview Scheduler

## About
Scheduler is a single page react application that allows its users to book appointments with designated interviewers from Monday-Friday at specified timeslots. 

## Technical Specifications:
- [React](https://reactjs.org/)
- [Express (Scheduler API)](https://expressjs.com/)
- [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/)
- [Axios](https://github.com/axios/axios), [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Storybook](https://storybook.js.org/), [Webpack Dev Server](https://github.com/webpack/webpack-dev-server), [Jest](https://jestjs.io/en/), [Testing Library](https://testing-library.com/)

## Screenshots:
Main App View:
!["Main App View"](https://github.com/bernadetteabalos/scheduler/blob/master/docs/scheduler_main.png?raw=true)

Main App Functionality:
!["Main App Functionalities"](https://github.com/bernadetteabalos/scheduler/blob/master/docs/scheduler_functions.gif?raw=true)

Error Messages:
!["Error Messages"](https://github.com/bernadetteabalos/scheduler/blob/master/docs/scheduler_error.gif?raw=true)


## Setup

Install dependencies with `npm install`.

## Setting up Database/API Server
Clone the repository provided and install any dependencies:
```sh
cd <project-directory>
git clone https://github.com/bernadetteabalos/scheduler-api
cd scheduler-api
npm install
```
Follow the "Creating the DB" instructions in the [README](https://github.com/bernadetteabalos/scheduler-api) within your development environment that has PostgreSQL installed.
## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
