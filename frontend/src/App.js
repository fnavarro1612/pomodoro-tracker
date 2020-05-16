import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './containers/Layout/Layout';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Tracker from './components/Tracker/Tracker';
import { ToastContainer, Slide } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer hideProgressBar={true} autoClose={3000} pauseOnHover={false} closeOnClick={true} transition={Slide}></ToastContainer>
      <Switch>
        <Route path='/' exact component={Layout} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/tracker' component={Tracker} />
      </Switch>
    </div>
  );
}

export default App;
