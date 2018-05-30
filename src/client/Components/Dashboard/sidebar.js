import React, { Component } from 'react';
import { connect } from 'react-redux';
import Address from './address';

class Sidebar extends Component{
  state = {

  }
  componentDidMount() {
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
              <li><a href="#"><img src="/img/img1.png"/><span className="hmkyin_dshbrd_text">Dashboard</span></a></li>
              <li><a href="#"><img src="/img/img2.png"/><span className="hmkyin_dshbrd_text">Email Us</span></a></li>
              <li><a href="pop1" className="justforpop" id="pop1"><img src="/img/img3.png"/><span className="hmkyin_dshbrd_text">Book My Home</span></a></li>
              <li><a href="#"><img src="/img/img4.png"/><span className="hmkyin_dshbrd_text">Owner and Home Profile Data</span></a></li>
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
  user: state.user
})

export default connect(mapStateToProps)(Sidebar);