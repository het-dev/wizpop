import React, { Component } from "react";

export default class WizpopContainer extends Component {
  dismiss = () => {
    if (this.props.dismiss) this.props.dismiss();
  };
  render() {
    return (
      <div className="wizpop_container">
        <div className="wizpop_overlay" onClick={this.dismiss} />
        <div className="wizpop_scrollable">
          <div
            className={`wizpop_contents${
              this.props.scrollable ? " wizpop_contents-scrollable" : ""
            }`}
          >
            {this.props.dismiss && (
              <p className="wizpop_close" onClick={this.dismiss} />
            )}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
