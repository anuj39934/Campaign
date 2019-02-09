import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  render() {
    return (
      <Modal
        show={this.state.show}
        className="custom-modal"
        onHide = {this.props.closeHandler}
      >
        <Modal.Header>
          <button
            type="button"
            onClick={this.props.closeHandler}
            className="pull-right close"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <Modal.Title className="text-center">Create Compaign</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <span>Compaign Name</span>
            <input placeholder="Enter Compaign Name : " type="text" />
          </div>
          <button className="btn btn-primary btn-lg">Create</button>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CustomModal;
