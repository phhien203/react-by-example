import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf';
import { Glyphicon } from 'react-bootstrap';

import SetIntervalMixin from '../mixins/SetIntervalMixin';
import CartTimeoutMixin from '../mixins/CartTimeoutMixin';

var ShippingDetails = React.createClass({
  propTypes: {
    alertCartTimeout: React.PropTypes.func.isRequired,
    updateCartTimeout: React.PropTypes.func.isRequired,
    cartTimeoutSecs: React.PropTypes.number.isRequired
  },

  mixins: [SetIntervalMixin, CartTimeoutMixin],

  getInitialState() {
    return {
      fullName: '',
      contactNumber: '',
      shippingAddress: '',
      error: false,
      cartTimeoutSecs: this.props.cartTimeoutSecs
    };
  },
  _renderError() {
    if (this.state.error) {
      return (
        <div className="alert alert-danger">
          { this.state.error }
        </div>
      );
    }
  },
  _validateInput() {
    if (this.state.fullName === '') {
      this.setState({
        error: 'Please enter full name'
      });
    } else if (this.state.contactNumber === '') {
      this.setState({
        error: 'Please enter contact number'
      });
    } else if (this.state.shippingAddress === '') {
      this.setState({
        error: 'Please enter shipping address'
      });
    } else {
      this.setState({
        error: false
      });
      return true;
    }
  },
  handleSubmit(event) {
    event.preventDefault();

    var formData = {
      fullName: this.state.fullName,
      contactNumber: this.state.contactNumber,
      shippingAddress: this.state.shippingAddress
    }

    if (this._validateInput()) {
      this.props.updateFormData(formData);
    }
  },
  handleChange(event, attribute) {
    var newState = this.state;
    newState[attribute] = event.target.value;
    this.setState(newState);
  },
  render() {
    var errorMessage = this._renderError();
    var minutes = Math.floor(this.state.cartTimeoutSecs / 60);
    var seconds = this.state.cartTimeoutSecs - minutes * 60;

    return (
      <div>
        <h1>
          Enter your shipping information.
        </h1>
        { errorMessage }
        <div style={{ width: 200 }}>
          <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Full name"
                value={ this.state.fullName }
                onChange={ (event) => this.handleChange(event, 'fullName' )} />
            </div>

            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Contact number"
                value={ this.state.contactNumber }
                onChange={ (event) => this.handleChange(event, 'contactNumber' )} />
            </div>

            <div className="form-group">
              <input className="form-control"
                type="text"
                placeholder="Shipping Address"
                value={ this.state.shippingAddress }
                onChange={ (event) => this.handleChange(event, 'shippingAddress' )} />
            </div>

            <div className="form-group">
              <button type="submit" ref="submit" className="btn btn-success">
                Submit
              </button>
            </div>

          </form>
        </div>

        <div className="well">
          <Glyphicon glyph="glyphicon glyphicon-time" />
          You have {minutes} minutes, {seconds} seconds before confirming order.
        </div>
      </div>
    );
  }
});

module.exports = ShippingDetails;
