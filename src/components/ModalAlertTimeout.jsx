import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';

var ModalAlertTimeout = React.createClass({
  getInitialState() {
    return ({
      showModal: true
    });
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Timeout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The cart has timed-out. Please try again.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

module.exports = ModalAlertTimeout;
