import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/Write/Write.jsx";
import Settings from "./Pages/SettingsPage/Settings.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
    
      <Navbar />
      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/react-blog" >
          <Home />
        </Route>


        <Route path="/write">
        {currentUser ? <Write />:<Register />}
        </Route>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          {currentUser ? <Home />:<Register />}
        </Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
          
    </Router>
    
  );
}

export default App;
