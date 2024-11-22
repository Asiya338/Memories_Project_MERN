# Memories Project (Frontend)

The **Memories Project** is a full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to create, update, delete, and interact with posts. This project is fully responsive and offers a variety of features to create and share memories.

## Features

- **User Authentication**: Users can create an account using custom credentials or Google OAuth.
- **Post Interactions**: Users can create, update, delete, search, like, comment on, and share posts.
- **Recommendation System**: Users can receive post recommendations.
- **Responsive Design**: The app is fully responsive, making it accessible on both mobile and desktop devices.

## Tech Stack

- **Frontend**:
  - **React**: For building the user interface.
  - **Material-UI**: Provides pre-built components for a clean, modern design. We use `@material-ui/core`, `@material-ui/icons`, and `@material-ui/lab` for UI elements like buttons, icons, and form components.
  - **React Router**: Handles routing in the React application for different views and pages (e.g., Home, Auth, Post Details).
  - **Redux**: For state management, used alongside `react-redux` and `redux-thunk` for handling asynchronous actions.
  - **Axios**: For making HTTP requests to the backend.
  - **JWT Decode**: For decoding JSON Web Tokens (JWT) and managing user authentication.
  - **Moment.js**: To format dates and handle time-related functionalities.
  - **React Google Login**: Allows users to authenticate via Google OAuth.

## Frontend Dependencies

- `@material-ui/core`: For UI components such as buttons, grids, and form elements.
- `react-router-dom`: To handle navigation between pages.
- `axios`: For making API requests to the server.
- `redux`: For managing the application's state, along with `redux-thunk` for handling asynchronous actions.
- `jwt-decode`: Used to decode the JWT token and handle user sessions.
- `react-google-login`: To enable Google OAuth login for users.
- `moment`: To format and manage dates and times.
- `react-redux`: For connecting the Redux state with React components.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Asiya338/Memories_MERN_Project.git

   ```

2. **Navigate into the client directory:**

```bash
cd client
```

3. **Install the required dependencies:**

```bash
npm install
```

4. **Start the React app:**

```bash
node --openssl-legacy-provider node_modules/react-scripts/scripts/start.js
(due to version changes )
```

> > This will start the frontend development server on http://localhost:3000. The app will be proxied to the backend running on http://localhost:5000.

---

**_Key Features_**

Authentication: Users can sign up or log in via custom credentials or Google OAuth.
Create Post: Users can create a new post to share their memories.
Update Post: Users can edit their previously created posts.
Delete Post: Users can delete posts they no longer need.
Search Posts: The app allows searching for posts based on keywords.
Like and Comment: Users can like and comment on posts to engage with other users.
Responsive Design: The app adjusts its layout for mobile and desktop views.

---

### Folder Structure

```bash
/client

├── /public # Static assets (e.g., images, favicon)

└── /src

├── /components # React components for various parts of the UI

├── /reducers # Redux reducers

├── /actions # Redux actions

├── App.js # Main React component

├── index.js # Entry point for the app

└── ...
```
