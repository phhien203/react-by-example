import React from 'react';

import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Success';

var BookStore = React.createClass({
  getInitialState() {
    return {
      currentStep: 1,
      formValues: {},
      cartTimeoutSecs: 1 * 60
    };
  },
  updateCartTimeout(timeoutSecs) {
    this.setState({
      cartTimeoutSecs: timeoutSecs
    });
  },
  alertCartTimeout() {
    this.setState({
      currentStep: 10
    });
  },
  updateFormData(formData) {
    var formValues = Object.assign({}, this.state.formValues, formData);
    var nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
      formValues: formValues
    });
  },
  render() {
    switch(this.state.currentStep) {
      case 1:
        return <BookList updateFormData={ this.updateFormData } />;
      case 2:
        return <ShippingDetails updateFormData={ this.updateFormData }
          cartTimeoutSecs={ this.state.cartTimeoutSecs }
          updateCartTimeout={ this.updateCartTimeout }
          alertCartTimeout={ this.alertCartTimeout } />;
      case 3:
        return <DeliveryDetails updateFormData={ this.updateFormData }
          cartTimeoutSecs={ this.state.cartTimeoutSecs }
          updateCartTimeout={ this.updateCartTimeout }
          alertCartTimeout={ this.alertCartTimeout } />;
      case 4:
        return <Confirmation data={ this.state.formValues }
          updateFormData={ this.updateFormData }
          cartTimeoutSecs={ this.state.cartTimeoutSecs } />;
      case 5:
        return <Success data={ this.state.formValues }
          cartTimeoutSecs={ this.state.cartTimeoutSecs } />
      case 10:
        return (
          <div>
            <h2>Your cart timed out, please try again.</h2>
          </div>
        );
      default:
        return <BookList updateFormData={ this.updateFormData } />
    }
  }
});

module.exports = BookStore;
