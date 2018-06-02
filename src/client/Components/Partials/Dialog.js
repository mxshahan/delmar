import React from 'react';
import $ from 'jquery';

class Dialog extends React.Component{
  render() {
    return (
      <div id="dialog" >
        <span id="dialog_box">
          <p>Are you sure want to {this.props.message}?</p>
          <span 
            id="okBtn" 
            className="fl" 
            onClick={() => this.props.action()}>
            {this.props.ok ? this.props.ok : 'Yes'}
          </span>
          <span 
            id="cancelBtn" 
            className="fr"
            onClick={() => this.props.onCancel()}
          >{this.props.cancel ? this.props.cancel : 'No'}
          </span>
        </span>
      </div>
    )
  }
}

export default Dialog;