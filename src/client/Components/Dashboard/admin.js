import React, { Component } from 'react';
import UsersRequest from './Admin/UsersRequest';

export default class Admin extends Component {
  render() {
    return (
      <div className="dash_rightside">
        <div className="dash_bookstatment_div">
          <span className="bookingspan">User Request</span>
          <span className="bookingspan bookingspan_user"><UsersRequest/></span>
        </div>
      </div>
    )
  }
}
