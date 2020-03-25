import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertsState';
import Navbar from './components/layout/navbar';
import User from './components/layout/users/user';
import Alert from './components/layout/alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

const App =()=> {
   

    return (
      <GithubState>
      <AlertState>
      <Router>
          <div className="App">
            <Navbar />
              <div className="container">
                <Alert alert={alert}/>
                <Switch>
                  <Route exact path='/' component={Home}/> 
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User}/>
                  <Route component={NotFound}/>
                </Switch>
                
               
              </div>
        </div>
      </Router>
      </AlertState>
      </GithubState>
    );

  }
 


export default App;
