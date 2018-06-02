import React, { Component } from 'react';
import { connect } from 'react-redux';
import Address from './address';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
  state = {

  }
  componentDidMount() {
    console.log(this.props.accType)
    $(document).ready(function(){
      $(".justforpop").click(function(e) {
          e.preventDefault();
          var popId=$(this).attr('href');
          $('#'+popId+', .overlay').fadeIn(700);
      });

      $('.pop-up_main_close, .overlay').click(function(e) {
          $('.pop-up_main_div, .overlay').fadeOut(700);
      });

      $('.cancel_btn, .overlay').click(function(e) {
          $('.pop-up_main_div, .overlay').fadeOut(700);
      });
    });

    $('.menu').click(function(e) {
        $('.dash_leftside').slideToggle(700);
    });
  }

  render() {
    console.log(this.props.accType)
    return (
      <div>
        <div className="control_menu">
          <span className="menu"><i className="fa fa-bars" aria-hidden="true"></i></span>
          <div className="dash_leftside">
            <div className="dash_logoside">
              <span className="login_logo"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
              <h1>DEL MAR</h1>
            </div>
              <ul className="dash_side_ul">
                <li><Link to="/dashboard"><img src="/img/img1.png"/><span className="hmkyin_dshbrd_text">Home Maintenance</span></Link></li>
                <li><a href="#"><img src="/img/email_sport_img.png"/><span className="hmkyin_dshbrd_text">Email Support</span></a></li>
                <li><a href="pop1" className="justforpop" id="pop1"><img src="/img/img3.png"/><span className="hmkyin_dshbrd_text">Property Pages</span></a></li>
                {this.props.accType && this.props.accType === 'admin' && <li><Link to="/dashboard/users"><img src="/img/img4.png"/><span className="hmkyin_dshbrd_text">Owner and Home Profile Data</span></Link></li>}
              </ul>
            <span className="dash_combtn"><a href="#">To thisisdelmar.com</a></span>
          </div>
        </div>

        <span className="overlay"></span>
        <Address/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accType: state.user.me && state.user.me.acc_type
})

export default connect(mapStateToProps)(Sidebar);
