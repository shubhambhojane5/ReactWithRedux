import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Container from './Component/contanier';
import Dashboard from './Component/Dashboard/Dashboard';


// class App extends Component {
const App=()=>{

  const User = React.lazy(() => import('./Component/User/User'))

  // render() {
    return (
      <React.Fragment key={new Date()}>
        <nav>
          <NavLink className="navCls" to="/">Dashbaord</NavLink>
          <NavLink className="navCls" to="/user">User</NavLink>
        </nav>

        <Route path="/" exact component={Dashboard} />

        <Route path="/user" render={() => (<Suspense fallback={<div>Loading...</div>}><User /></Suspense>)} />
        {/* <Suspense fallback={<div>Loading...</div>}><User/></Suspense> */}
        {/* <Route path="/user" component={user}></Route> */}
      </React.Fragment>
    );
  //}
}

export default App;
