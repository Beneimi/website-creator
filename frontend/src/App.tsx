import "reflect-metadata";
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import LoginComponent from "./components/login.component";
import HomepageComponent from "./components/homepage.component";
import PageComponent from "./components/page.component";
import EditPageComponent from "./components/editPage.component";
import NewPageComponent from "./components/newPage.component";
import SignUpComponent from "./components/signUp.component";

function App() {
return (
      <Router>
          <Route exact path={'/'}  component={HomepageComponent}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/signup' component={SignUpComponent}/>
          <Route path='/home' component={HomepageComponent}/>
          <Route path='/create' component={NewPageComponent}/>
          <Route path='/edit/page/:url' component={EditPageComponent}/>
          <Route path='/page/:userName/:url' component={PageComponent}/>
      </Router>

  );
}

export default App;
