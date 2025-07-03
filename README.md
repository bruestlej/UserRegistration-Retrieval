💻 Project Description: User Registration & Retrieval App

🔍 Overview:

This is a Node.js + Express + MySQL web application that allows users to submit and retrieve user information (username, password, and email) through a simple HTML form. The server handles two main operations:
- Insert: Save new user data into a MySQL Users table.
- Retrieve: Look up users based on their email.

🧑‍💼 Who It's For:
- Computer Science or Web Development students learning full-stack development (specifically the Express + MySQL stack).
- Educators assigning hands-on labs for CRUD (Create/Read/Update/Delete) operations in web apps.
- Developers creating prototypes for login or user registration systems.

🛠️ Tech Stack Used:
- Node.js: Server-side JavaScript runtime.
- Express.js: Web framework to handle routing.
- MySQL: Relational database to store user data.
- body-parser: Middleware to parse form inputs from POST requests.
- dotenv/environment variables: Used for securely passing the database password.

📋 Key Functionalities:
1. GET /
  - Displays an HTML form for user input (form.html file).
2. POST /insert
  - Takes form input and inserts a new user into the database.
3. POST /retrieve
  - Accepts an email from a form and returns user details if found.

🔐 Security Notes (if for learning):
- Plaintext passwords should never be stored in production. Use hashing (e.g., bcrypt).
- User input should be validated and sanitized before database queries to avoid SQL injection (using parameterized queries is a good start).
- Store sensitive credentials like the DB password in a .env file using dotenv.

📝 Use Case Example:
- Imagine a class assignment or small-scale project where you’re simulating a simple registration system for a website — this setup is ideal to demonstrate:
- Routing
- Form handling
- SQL operations (INSERT and SELECT)
- Connecting frontend forms with backend logic
