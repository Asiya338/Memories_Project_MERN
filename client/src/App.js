import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth.js";
import ResetPass from "./components/Auth/ResetPass.js";
import ForgotPass from "./components/Auth/ForgotPass";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home}></Route>
          <Route path="/posts/search" exact component={Home}></Route>
          <Route path="/posts/:id" exact component={PostDetails}></Route>
          <Route
            path="/auth"
            exact
            component={() =>
              !user?.result?._id || !user?.result?.sub ? (
                <Auth />
              ) : (
                <Redirect to="/posts" />
              )
            }
          ></Route>
          <Route path="/forgot-password" exact component={ForgotPass} />
          <Route path="/reset-password/:token" exact component={ResetPass} />
        </Switch>

        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
