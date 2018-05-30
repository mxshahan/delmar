import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import Loader from '../Partials/Loader';
import { LoginUser } from '../../Redux/Actions/Auth';

class Signup extends Component {
  state = {
    username: null,
    password: null,
    cpassword: null,
    err: false,
    loading: false,
    matched: null,
    success: false
  }

  onSignup = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password && this.state.cpassword) {
      !this.state.loading && this.setState({
        loading: true
      })
      Axios.post(`/user/signup`, {
        username: this.state.username,
        password: this.state.password,
        cpassword: this.state.cpassword
      }).then((res) => {
        this.state.loading && this.setState({
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
        err: 'Field cannot be empty'
      });
    }
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
  }

  // checkUser = (e) => {
  //   Axios.get('/user/check', {
  //     headers: {
  //       'username': e.target.value
  //     }
  //   }).then((res) => {
  //     this.setState({
  //       success: true
  //     })
  //   }).catch((e) => {
      
  //     this.setState({
  //       success: false
  //     })
  //   })
  // }

  render() {
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
            <form onSubmit={this.onSignup}>
              <ul className="login_ul">
                <li>
                  <input 
                    type="text" 
                    placeholder="Username"
                    onChange={(e) => this.setState({ username: e.target.value})}
                  />
                </li>
                {this.state.success && <span className="login_note">Username already exists</span>}
                
                <li>
                  <input 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => this.setState({ password: e.target.value}) }                   
                  />
                </li>
                <li>
                  <input 
                    type="password" 
                    placeholder="Confirm Password"
                    onChange={(e) => this.setState({ cpassword: e.target.value}) }
                    onKeyUp={(e) => {
                      if(e.target.value === this.state.password) {
                        this.setState({
                          matched: true
                        })
                      } else {
                        this.setState({
                          matched: false
                        })
                      }
                    }}               
                  />
                </li>
                {this.state.matched === false && <span className="login_note">Password does not matched</span>}
                <li><input type="submit" value="Submit"/></li>
              </ul>
            </form>
            {this.state.err && <span className="err">{this.state.err}</span>}
            {this.state.loading && <Loader/>}
            <span className="creat_acc">Already have an account? <Link to="/">Login</Link></span>
            <span className="login_note">NOTE: Use the email you use for streamline to create this account.</span>
          </div>
        </div>
      </div> 
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  LoginUser: (data) => dispatch(LoginUser(data))
})

export default connect(undefined, mapDispatchToProps)(Signup)