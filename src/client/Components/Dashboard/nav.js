import React from 'react';
import { connect } from 'react-redux';
import { LogoutUser } from '../../Redux/Actions/Auth';
import { ClearUser } from '../../Redux/Actions/User';
import Axios from 'axios';

class Navbar extends React.Component{
  render(){
    return (
      <div className="dash_rightnav">
        <ul className="dash_nav_ul">
          <li><a href="#">Profile <i className="fa fa-user" aria-hidden="true"></i></a></li>
          <li><a href="#">Help <i className="fa fa-info-circle" aria-hidden="true"></i></a></li>
          <li><a href="#" onClick={() => {
            localStorage.clear();
            this.props.ClearUser();
            this.props.LogoutUser();
          }}>Logout <i className="fa fa-sign-out" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  ClearUser: () => dispatch(ClearUser()),
  LogoutUser: () => dispatch(LogoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);