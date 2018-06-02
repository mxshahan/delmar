import React from 'react';
import { connect } from 'react-redux';
import{ Route, Redirect } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/sidebar';
import Navbar from '../Components/Dashboard/nav';

const AdminRoute = ({isAuthenticated, accType, component: Component, ...rest}) => (
    isAuthenticated && accType === 'admin' ? (
      <div className="dash_mainpage">
        <Sidebar/>
        <Navbar/>
        <Route {...rest} component={(props)=> (
          <Component {...props}/>
        )}/>
      </div>
    )
    : <Redirect to="/dashboard"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.token,
    accType: localStorage.getItem('accType')
})

export default connect(mapStateToProps)(AdminRoute);
