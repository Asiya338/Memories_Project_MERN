# **Memories Project**

The **Memories Project** is a full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to create, update, delete, and interact with posts. This project is fully responsive and offers a variety of features to create and share memories.

# [![Memories](https://i.postimg.cc/XvtN98WX/Screenshot-3.png)](https://postimg.cc/8FBVSLjV)

## **Features**

- **User Authentication**: Users can create an account using custom credentials or Google OAuth.
- **Post Interactions**: Users can create, update, delete, search, like, comment on, and share posts.
- **Recommendation System**: Users can receive post recommendations.
- **Search Posts**: The app allows searching for posts based on keywords.
- **Sort Posts**: The app allows sorting for posts based on latest , oldest , posted by user , liked by user , alphabetical order and reverse alphabetical order
- **Like and Comment**: Users can like and comment on posts to engage with others.

---

## **Tech Stack**

### **Frontend**

- **React**: For building the user interface.
- **Material-UI**: Provides pre-built components for a clean, modern design.
  > Includes `@material-ui/core`, `@material-ui/icons`, and `@material-ui/lab` for UI elements like buttons, icons, and forms.
- **React Router**: Handles routing in the React application for different views and pages (e.g., Home, Auth, Post Details).
- **Redux**: For state management, used alongside `react-redux` and `redux-thunk` for handling asynchronous actions.
- **Axios**: For making HTTP requests to the backend.
- **JWT Decode**: For decoding JSON Web Tokens (JWT) and managing user authentication.
- **Moment.js**: To format dates and handle time-related functionalities.
- **React Google Login**: Allows users to authenticate via Google OAuth.

---

## **Getting Started**

### **Clone the Repository**

```bash
git clone https://github.com/Asiya338/Memories_Project_MERN.git
```

### **Navigate into the Client Directory**

```bash
cd client
```

### **Install Dependencies**

```bash
npm install
```

### **Start the React App**

```bash
node --openssl-legacy-provider node_modules/react-scripts/scripts/start.js
```

> Due to version changes, the above command ensures proper execution.

> This will start the frontend development server on **`http://localhost:3000`**.  
> The app will be proxied to the backend running on **`http://localhost:5000`**.

---

## **Folder Structure**

```bash
/client
├── /public           # Static assets (e.g., images, favicon)
└── /src
    ├── /components   # React components for various parts of the UI
    ├── /reducers     # Redux reducers
    ├── /actions      # Redux actions
    ├── App.js        # Main React component
    ├── index.js      # Entry point for the app
    └── ...           # Other files and configurations
```

---

### **Backend**

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Framework to handle HTTP requests and routing.
- **MongoDB**: A NoSQL database to store post and user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (JSON Web Token)**: For user authentication and session management.
- **bcryptjs**: For hashing passwords securely.
- **dotenv**: For managing environment variables.
- **Cors**: Middleware to enable cross-origin resource sharing.
- 
---

**_Backend Setup_**

---

### **_Navigate into the server directory:_**

```bash
cd server
```

### **_Install dependencies:_**

```bash
npm install
```

### **_Create a .env file in the server directory and add your environment variables:_**

```bash
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
PORT = YOUR_PORT
```

### **_Start the backend server:_**

```bash
npm start
```

---

The backend will start on http://localhost:5000.

**_Backend_**

```bash
/server
├── /models           # Mongoose models for users and posts
├── /routes           # API routes for posts and authentication
├── /controllers      # Controller functions for handling logic
├── /middleware       # Custom middleware (e.g., authentication checks)
├── index.js          # Main entry point for the server
└── .env              # Environment variables

```
