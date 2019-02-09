import React, { Component } from "react";
import { connect } from "react-redux";
import { showPopup } from "../../store/actionCreator";
import CustomModal from '../Modal/Modal';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showPopup: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  render() {
    return (
      <div className="dropdown">
      <CustomModal show = {this.state.showPopup} closeHandler = {this.clickHandler}></CustomModal>
        <span className="glyphicon glyphicon-list"> Compaign List</span>
        <button className="btn btn-lg btn-primary" onClick={this.clickHandler}>
          Create New
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    popState: state.popState
  };
};

const mapDispatchToProps = {
  showPopup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
