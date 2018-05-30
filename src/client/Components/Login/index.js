import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import Loader from '../Partials/Loader';
import { LoginUser } from '../../Redux/Actions/Auth';

class Login extends Component {
  state = {
    username: null,
    password: null,
    err: false,
    loading: false
  }

  onLogin = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.setState({
        loading: true
      })
      Axios.post(`/user/login`, {
        username: this.state.username,
        password: this.state.password
      }).then((res) => {
        this.setState({
          loading: false
        });
        this.props.LoginUser(res.data);
        this.props.history.push('/dashboard');
        localStorage.setItem('auth', res.data.token)
      }).catch((err) => {
        console.log(err);
        this.setState({
          err: 'Something Error',
          loading: false
        })
      })
    } else {
      this.setState({
        err: 'Username or Password cannot be empty'
      });
    }
  }

  render() {
    this.state.err && setTimeout(() => {
      this.setState({
        err: false
      })
    }, 2000);
    this.state.loading && setTimeout(() => {
      this.setState({
        loading: false,
        err: 'Please try again'
      })
    }, 5000)
    return (
      <div className="bg_image">
        <div className="login_logodiv">
          <span className="login_sidelogo"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
          <h1>DEL MAR VACATIONS</h1>
        </div>
        <div className="login_overalldiv">
          <span className="login_portaltxt">Homeowner Portal</span>
          <div className="login_bg">
            <h1>LOGIN</h1>
            <form onSubmit={this.onLogin}>
              <ul className="login_ul">
                <li>
                  <input 
                    type="text" 
                    placeholder="Username"
                    onChange={(e) => this.setState({ username: e.target.value})}
                  />
                </li>
                <li>
                  <input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => this.setState({ password: e.target.value}) }                   
                  />
                </li>
                <li><input type="submit" value="Submit"/></li>
              </ul>
            </form>
            {this.state.err && <span className="err">{this.state.err}</span>}
            {this.state.loading && <Loader/>}
            <span className="creat_acc"><Link to="/signup">Create an Account</Link></span>
          </div>
        </div>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  LoginUser: (data) => dispatch(LoginUser(data))
})

export default connect(undefined, mapDispatchToProps)(Login)