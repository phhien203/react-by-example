import React, { Component } from 'react';

import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Success';

export default class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      formValues: {}
    };
    this.updateFormData = this.updateFormData.bind(this);
  }
  updateFormData(formData) {
    var formValues = Object.assign({}, this.state.formValues, formData);
    var nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
      formValues: formValues
    });
    console.log(formData);
  }
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
}
