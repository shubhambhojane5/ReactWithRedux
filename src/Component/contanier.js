import React, { Suspense } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
//import user from './User/User';

const User = React.lazy(() => import('./User/User'))

const Container = () => {
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
    )
}

export default Container;