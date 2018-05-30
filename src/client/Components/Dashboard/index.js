import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import $ from 'jquery';
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="dash_rightside">
          <div className="dash_bookstatment_div">
            <span className="bookingspan">Homeowner Bookings<br/>(Calendar)</span>
            <span className="bookingspan2">Homeowner Statements</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard