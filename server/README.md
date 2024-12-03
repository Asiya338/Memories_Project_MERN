# Memories Project (Backend)

The **Memories Project** backend is built using Node.js and Express. It handles the server-side logic for managing posts, user authentication, and connecting with the MongoDB database. The backend exposes API endpoints to interact with the frontend, including user registration, login, and CRUD operations on posts.

> **Key Features**

**User Authentication:** Uses JWT for handling user login and registration securely via custom authentication or trusted third party authentication like Google oauth2

**Post Management:** Users can create, read, update, like, comment and delete posts with fully integrated authentication

**MongoDB Integration:** All data is stored in MongoDB, with schema validation using Mongoose(Object Data Modelling tool to connect to MongoDB and backend node.js application)

**CORS Support:** Cross-origin requests are allowed from the frontend , bypass cross-origin requests
as frontend is localhost:3000... and backend is localhost:4000

## Tech Stack

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A web framework for Node.js used to handle routing and HTTP requests.
- **MongoDB**: A NoSQL database used to store user and post data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: For user authentication and session management.
- **bcryptjs**: Used to hash user passwords for secure authentication.
- **dotenv**: For managing environment variables (like database URIs and secret keys).
- **Cors**: Middleware to enable cross-origin resource sharing, allowing requests from the frontend.

## Backend Dependencies

- `express`: Framework to build the backend server and handle HTTP requests.
- `mongoose`: ODM for MongoDB, used to interact with the database.
- `jsonwebtoken`: For creating and verifying JWT tokens for user authentication.
- `bcryptjs`: To hash user passwords securely before storing them.
- `cors`: To handle cross-origin requests between the frontend and backend.
- `dotenv`: To load environment variables for sensitive data like API keys.
- `nodemon`: Development tool that automatically restarts the server when file changes are detected.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Asiya338/Memories_MERN_Project.git

   ```

2. **Navigate into the server directory:**

```bash
cd server
```

3. **Install the required dependencies:**

```bash
npm install
```

4. **Create a .env file in the root directory and add your environment variables (e.g., MongoDB URI, JWT secret):**

```bash
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT = your-port
```

5. **Start the server:**

```bash
npm start
```

> > > This will start the backend server on http://localhost:5000.

---

### Folder Structure

```bash

/server

├── /models # Mongoose models for users and posts

├── /routes # API routes for posts and authentication

├── /controllers # Controller functions to handle the logic

├── /middleware # Custom middleware like authentication checks

├── index.js # Main entry point for the server

└── .env #
```
