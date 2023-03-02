# Interview Scheduler 

## Project Description
The interview scheduler is an web application that tracks student interviews built with the latest tools to optimize ones user experience! We utilaize React's bult-in and custom hooks that allows user to add, edit, and delete appointments in real time! Data is stored by the API server using PSQL (PostgreSQL. Using JSON the client application is able to communicate with the API server over HTTP in a JSON format. Quality control is important, so this project follows best practicies of TDD (Test Driven Development), where individual components are tested in isloation and End-To-End testing is preformed!

## Project Features

- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available as a snapshot of the week
- A user can switch between days and see detailed information Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

npm start

## Running Jest Test Framework

npm test

## Running Storybook Visual Testbed

npm run storybook

## API server and Database Setup

For full functionality both must run concurrently: the client and the API server applications. Go to https://github.com/lighthouse-labs/scheduler-api/ to start by forking and cloning the scheduler-api server Follow the steps outlined in README to install and setup the database Fork and clone this repo Navigate to the root directory and install dependencies with npm install Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project ➜ npm start



## Final Product
![Screenshot of URLs page]()

![Screenshot of URLs page](https://github.com/devRyanChoi/scheduler/blob/master/docs/sch%20-%201.png?raw=true)
