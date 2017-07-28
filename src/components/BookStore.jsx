import React from 'react';
import ReactDOM from 'react-dom';

import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import ModalAlertTimeout from './ModalAlertTimeout';

var BookStore = React.createClass({
  getInitialState() {
    return {
      currentStep: 1,
      formValues: {},
      cartTimeoutSecs: 5*60
    };
  },
  updateCartTimeout(timeoutSecs) {
    this.setState({
      cartTimeoutSecs: timeoutSecs
    });
  },
  alertCartTimeout() {
    this.refs.timeoutModal.open();
    this.setState({
      currentStep: 1,
      formValues: {},
      cartTimeoutSecs: 5*60
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
    var mainForm;
    switch(this.state.currentStep) {
      case 1:
        mainForm = <BookList updateFormData={ this.updateFormData } />;
        break;
      case 2:
        mainForm = <ShippingDetails updateFormData={ this.updateFormData }
          cartTimeoutSecs={ this.state.cartTimeoutSecs }
          updateCartTimeout={ this.updateCartTimeout }
          alertCartTimeout={ this.alertCartTimeout } />;
        break;
      case 3:
        mainForm = <DeliveryDetails updateFormData={ this.updateFormData }
          cartTimeoutSecs={ this.state.cartTimeoutSecs }
          updateCartTimeout={ this.updateCartTimeout }
          alertCartTimeout={ this.alertCartTimeout } />;
        break;
      case 4:
        mainForm = <Confirmation data={ this.state.formValues }
          updateFormData={ this.updateFormData }
          cartTimeoutSecs={ this.state.cartTimeoutSecs } />;
        break;
      case 5:
        mainForm = <Success data={ this.state.formValues }
          cartTimeoutSecs={ this.state.cartTimeoutSecs } />
        break;
      case 10:
        mainForm = (
          <div>
            <h2>Your cart timed out, please try again.</h2>
          </div>
        );
        break;
      default:
        mainForm = <BookList updateFormData={ this.updateFormData } />;
    }

    return (
      <div>
        {mainForm}
        <ModalAlertTimeout ref="timeoutModal" />
      </div>
    );
  }
});

module.exports = BookStore;
