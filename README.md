# Notes App

This project is a full-stack application for taking notes, built with a React frontend using Ant Design for styling, and a Node.js backend with Express and PostgreSQL for handling CRUD operations.

## Features

- Create, read, update, and delete notes.
- Responsive design with Ant Design components.
- Pagination for displaying notes.
- Integration with PostgreSQL for data persistence.

## Technologies Used

### Backend

- Node.js v18.12.1
- Express v4.19.2
- PostgreSQL v16.3
- pg v8.11.5

### Frontend

- React v18.2.0
- Ant Design v5.17.4
- React Router DOM v6.23.1
- React Paginate v8.2.0

## Getting Started

Make sure you have NodeJs installed.

Install and setup local PostgresSQL server.

### Backend Setup

From terminal:

1. Clone the repository:
   ```sh
   git clone https://github.com/kristiyan675/notesFE.git
   ```
2. Update the init.sh and db.js files with your personal local database credentials.

3. Navigate to api folder

   ```sh
   cd ./api

   ```

4. Install dependencies

   ```sh
   npm run install

   ```

5. Make sure you have nothin running port 3000.
   Run init.sh file (If you're on windows you can use git bash for running the script).
   This will connect and create a new database and table.
   ```sh
   ./init.sh
   ```

### Frontend Setup

Once the server is running and the database has been created successfully.

From terminal:

1. Navigate to app folder

   ```sh
   cd ./app

   ```

2. Install dependencies

   ```sh
   npm run install

   ```

3. Run the application

   ```sh
   npm run dev

   ```

4. Open app in the browser
