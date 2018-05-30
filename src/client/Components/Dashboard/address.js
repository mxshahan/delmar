import React, { Component } from 'react';

export default class Address extends Component{
  state = {

  }

  handleData = () => {

  }
  
  render(){
    return (
      <div className="pop-up_main_div" id="pop1">
        <span className="pop-up_main_close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </span>
        <form>
          <ul className="pop_up_main_ul">
            <li>
                <label>Name</label>
                <input type="text" name="text"/>
            </li>
            <li>
                <label>Phone Number</label>
                <input type="text" name="text"/>
            </li>
            <li>
                <label>Email</label>
                <input type="text" name="text"/>
            </li>
            <li>
                <label>Addresses</label>
                <textarea></textarea>
            </li>
            <li>
                <label>Rental Addresses</label>
                <textarea></textarea>
            </li>
          </ul>
          <a className="pop_up_btn cancel_btn" href="#">Cancel</a>
          <a className="pop_up_btn save_btn" href="#" onClick={this.handleData}>Save</a>
        </form>
      </div>
    )
  }
}