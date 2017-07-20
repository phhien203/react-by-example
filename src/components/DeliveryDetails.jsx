import React from 'react';

import SetIntervalMixin from '../mixins/SetIntervalMixin';
import CartTimeoutMixin from '../mixins/CartTimeoutMixin';

var DeliveryDetails = React.createClass({
  propTypes: {
    alertCartTimeout: React.PropTypes.func.isRequired,
    updateCartTimeout: React.PropTypes.func.isRequired,
    cartTimeoutSecs: React.PropTypes.number.isRequired
  },

  mixins: [SetIntervalMixin, CartTimeoutMixin],

  getInitialState() {
    return {
      deliveryOption: 'Primary',
      cartTimeoutSecs: this.props.cartTimeoutSecs
    };
  },
  componentWillReceiveProps(newProps) {
    this.setState({
      cartTimeoutSecs: newProps.cartTimeoutSecs
    });
  },
  handleChange(event) {
    this.setState({
      deliveryOption: event.target.value
    });
  },
  handleSubmit(event) {
    event.preventDefault();
    this.props.updateFormData(this.state);
  },
  render() {
    var minutes = Math.floor(this.state.cartTimeoutSecs / 60);
    var seconds = this.state.cartTimeoutSecs - minutes * 60;

    return (
      <div>
        <h1>
          Choose your delivery options here.
        </h1>
        <div style={{width: 200}}>
          <form onSubmit={ this.handleSubmit }>
            <div className="radio">
              <label>
                <input type="radio"
                  checked={ this.state.deliveryOption === 'Primary' }
                  value="Primary"
                  onChange={ this.handleChange } />
                  Primary -- Next day delivery
              </label>
            </div>

            <div className="radio">
              <label>
                <input type="radio"
                  checked={ this.state.deliveryOption === 'Normal' }
                  value="Normal"
                  onChange={ this.handleChange } />
                  Normal -- 3-4 days
              </label>
            </div>

            <button className="btn btn-success">
              Submit
            </button>
          </form>
        </div>

        <div className="well">
          <span className="glyphicon glyphicon-time" aria-hidden="true"></span>
          You have {minutes} minutes, {seconds} seconds before confirming order.
        </div>
      </div>
    );
  }
});

module.exports = DeliveryDetails;
