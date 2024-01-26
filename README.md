#  MERN Stack To-Do List App

This is a simple to-do list application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The frontend is developed with React using Vite as the build tool, and the navigation and shared layout are handled with React Router.

## Features

- Add, edit, and delete tasks
- Centralized state management using React Context API
- MongoDB for data storage
- Express.js for the backend API
- React Router for navigation

## Technologies Used

- **Frontend:**
  - React
  - Vite (Build Tool)
  - React Router for navigation
  - Axios for API communication

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Mongoose (ODM for MongoDB)

## Screenshots

![screenshot1](screenshots/Screenshot%202024-01-26%20at%2022.44.24.png)
![screenshot2](screenshots/Screenshot%202024-01-26%20at%2022.45.02.png)
![screenshot3](screenshots/Screenshot%202024-01-26%20at%2022.45.11.png)
## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (for database)
- find your connection URI and store it in .env in backend directory

  ``` bash
  MONGO_URI=""

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Raghav123-30/mern-stack-crud-app/
  Navigate to the project folder:

  ```bash
   cd mern-stack-crud-app/
   cd frontend/
   npm install
   cd ../backend/
   npm install
   npm start  #inside backend directory
   npm run dev  #inside frintend directory
