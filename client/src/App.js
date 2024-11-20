import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar.js";
<<<<<<< HEAD
import Footer from "./components/Footer/Footer.js";
=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
import Home from "./components/Home/Home.js";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth.js";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
<<<<<<< HEAD

=======
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />

        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home}></Route>
          <Route path="/posts/search" exact component={Home}></Route>
          <Route path="/posts/:id" exact component={PostDetails}></Route>
<<<<<<< HEAD
=======

>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
          <Route
            path="/auth"
            exact
            component={() =>
<<<<<<< HEAD
              !user?.result?._id || !user?.result?.googleId ? (
                <Auth />
              ) : (
                <Redirect to="/posts" />
              )
            }
          ></Route>
        </Switch>

        <Footer />
=======
              !user?.result?.name ? <Auth /> : <Redirect to="/posts" />
            }
          ></Route>
        </Switch>
>>>>>>> 573b0e9a00586d0c7a7b0ecc1946f4b24f18c785
      </Container>
    </BrowserRouter>
  );
};

export default App;
