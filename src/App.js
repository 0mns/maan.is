import React, { Fragment } from "react";
import "./App.css";
import Nav from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Contact'

function App() {
  return (
    <Router>
      <div className="App container">
        <div className="main">
          <Nav />

          <Switch>

          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
             
              <div className="hero">
              <h1>Hello World.</h1>
            </div>
            <div className="contactlinks">
              <div>
                <a rel="noopener noreferrer"  target="_blank"  href="https://www.behance.net/manis">Behance</a>
              </div>

              <div>
                <a rel="noopener noreferrer"  target="_blank"  href="https://www.instagram.com/ahmedmanis">Instagram</a>
              </div>

              <div>
                <a rel="noopener noreferrer"  target="_blank"  href="https://twitter.com/ahmedmanis">Twitter</a>
              </div>
            </div>
            </Fragment>
            )}></Route>

            <Route  exact
            path="/contact"
            component={Contact}
            ></Route>
          </Switch>
      



        </div>


        <div className="footer">2020 Ahmed Maanis</div>
      </div>
    </Router>
  );
}

export default App;
