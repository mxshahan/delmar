import React from 'react';
import { connect } from 'react-redux';
import { LogoutUser } from '../../Redux/Actions/Auth';
import { SetUser, ClearUser } from '../../Redux/Actions/User';
import Axios from 'axios';

class Navbar extends React.Component{
  componentDidMount() {
    this.props.ClearUser();    
    Axios.get(`/user`, {
      headers: {
        'auth': this.props.token
      }
    }).then((res) => {
      this.props.SetUser(res.data.user)
    }).catch((e) => {
      console.log(e);
      this.props.ClearUser();
      this.props.LogoutUser();
    })
  }
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
  LogoutUser: () => dispatch(LogoutUser()),
  SetUser: (user) => dispatch(SetUser(user)),
  ClearUser: () => dispatch(ClearUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);