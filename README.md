# Menu Management

A web application for managing a digital restaurant menu.

The application allows restaurant menu items to be created, displayed and deleted, with products organized into the categories Burgers and Drinks.

## Features

- The application follows a CRUD-based approach; create, read and delete operations are currently implemented.
- Display menu items by category
- Add new products through a form
- Store and retrieve product data from a MySQL database
- Delete products with confirmation dialogs
- Product information includes description, price, status and image
- Dynamic server-side rendering with EJS
- Responsive interface built with Bootstrap

## Technologies

### Frontend

- HTML
- CSS
- JavaScript
- Bootstrap
- EJS

### Backend

- Node.js
- Express.js

### Database

- MySQL
- mysql2

### Other

- dotenv
- Nodemon

## Architecture

The application follows a structured separation between routes, controllers, models and views.

Database access is handled through the model layer, while controllers manage the application logic and data flow between the backend and the user interface.

## Running the Project Locally

### Requirements

- Node.js
- MySQL
- XAMPP or another local MySQL environment

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vlasdana/burgers-shop.git
   ```

2. Navigate to the project folder:

   ```bash
   cd burgers-shop
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start MySQL using XAMPP or another local MySQL environment.

5. Import `createdb.sql` into your local MySQL database.

6. Create a `.env` file in the project root with the following configuration:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=menu
   ```

   Adapt the database credentials if necessary.

7. Start the application:

   ```bash
   npm start
   ```

8. Open the application in your browser:

   ```text
   http://localhost:3000
   ```

## Possible Future Improvements

- Implement the update operation to complete full CRUD functionality
- Add further menu categories and product management options
- Add a REST API layer for a more decoupled frontend/backend architecture

## Author

Dana-Monica Vlas

## About

University project developed as part of the Web Application Development coursework at FH JOANNEUM.
