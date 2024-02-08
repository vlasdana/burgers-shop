# Project Name: Menu Management

## Scope: digital menu management - admin side

## Description:- App to manage a digital menu for a restaurant

                - 2 categories (Burgers & Drinks)
                - products details (id, description, price, status, image)
                - form to insert new products in a database 
                - list to vizualise the products based on their category
                - Button to delete an item from the list


## Project milestones:

- [x] setting up folder structure
- [x] defining database model & objects relation
- [x] configure environment variables, create a .env file
- [x] create basic database MENU table products
- [x] define routing for Project
    * Routes define how the application responds to various HTTP requests at different endpoints.
- [x] define models 
    * Models handle all database interactions, including CRUD operations, allowing the rest of the app to avoid direct SQL queries.This provides security and code abstraction.
- [x] define controlers
    * menuControllers.js manage user interaction and data flow for displaying, adding, and deleting menu items. 
- [x] define views
    * views folder with EJS files for generating user interface, allowing the app to serve dynamic the web page. 
- [x] define public folder
    * for the app's static resources (HTML, CSS, Media)

## Technology
- Backend: Node.js 
- Frontend: HTML, CSS, JavaScript, Bootstrap, EJS
- Database: MySQL
- Dependencies: Express.js, Mysql2, Nodemon, EJS, Dotenv


## Instructions: 

- install __xampp__ needed 
- connect to the Xampp mySql, and adapt your .env file for the connection
- execute createdb.sql in your local database(start apache server from xampp and access in the browser localhost/phpMyAdmin, and go to sql section)
- install __Node.js__ needed
- clone the repository: git clone https://git-iit.fh-joanneum.at/msd-webapp/ws23_students/vlas.git
- initialize npm: __npm init -y__ (creates a package.json file for managing dependencies)
- install dependencies with: __npm install__
- server starts with the command : __npm start__
- server will run on __port :3000__ 
- Access the application on __http://localhost:3000__
                 

## Authors and acknowledgment

Dana-Monica Vlas 
dana-monica.vlas@edu.fh-joanneum.at


## License

For open source 

## Sources

- University lecture slides and academic resources
- Youtube tutorials
- Stack Overflow
- ChatGPT

