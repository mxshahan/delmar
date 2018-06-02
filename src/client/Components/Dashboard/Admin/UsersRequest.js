import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from "react-redux";
import { SetAllUser, updateUser } from '../../../Redux/Actions/User'
import Dialog from "./../../Partials/Dialog";

class UsersRequest extends Component {
  state = {
    loading: false,
    dialog: false,
    message: null,
    username: null
  }
  componentDidMount() {
    Axios.get(`/user/all`).then((res) => {
      this.props.SetAllUser(res.data.user);
    }).catch((e) => {
      console.log(e)
    });
  }
  handleApprove = async () => {
    try {
      await Axios.put(`/user/approve/${this.state.username}`, {
        status: 1
      }, {
        headers: {
          'auth': this.props.token
        }
      });
    } catch (e) {
      console.log(e)
    } finally {
      await this.props.updateUser(this.state.username);
      this.setState({
        dialog: false
      })
    }
  }
  render() {
    return (
      <div id="userRequest">
        {this.props.users && 
        <table>
          <thead>
            <tr>
              <td>Username</td>
              <td>Status</td>
            </tr>
          </thead>
          
          <tbody>
            {this.props.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.status === 1 ? <span>Approved</span> 
                  :
                  <div id="approval_action">
                    <span id="approve" onClick={() => {
                      this.setState({
                        dialog: true,
                        message: "approve",
                        username: user.username
                      })
                    }}>Approve</span>
                    <span id="cancel">Decline</span>
                  </div>
                  }</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        }
        {this.state.dialog && 
        <Dialog 
          action={this.handleApprove}
          message={this.state.message}
          ok="OK"
          cancel="Cancel"
          onCancel={() => {
            this.setState({
              dialog:false
            })
          }}
        />
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.all,
  token: state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  SetAllUser: (users) => dispatch(SetAllUser(users)),
  updateUser: (data) => dispatch(updateUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersRequest);