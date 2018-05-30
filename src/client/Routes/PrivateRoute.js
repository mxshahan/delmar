import React from 'react';
import { connect } from 'react-redux';
import{ Route, Redirect } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/sidebar';
import Navbar from '../Components/Dashboard/nav';

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
    isAuthenticated ? (
      <div className="dash_mainpage">
        <Sidebar/>  
        <Navbar/>
        <Route {...rest} component={(props)=> (
          <Component {...props}/>
        )}/>
      </div>
    )
    : <Redirect to="/"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token
})

export default connect(mapStateToProps)(PrivateRoute);