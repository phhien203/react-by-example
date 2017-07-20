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
      formValues: {}
    };
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
        return <ShippingDetails updateFormData={ this.updateFormData } />;
      case 3:
        return <DeliveryDetails updateFormData={ this.updateFormData } />;
      case 4:
        return <Confirmation data={ this.state.formValues }
          updateFormData={ this.updateFormData } />;
      case 5:
        return <Success data={ this.state.formValues } />
      default:
        return <BookList updateFormData={ this.updateFormData } />
    }
  }
});

module.exports = BookStore;
