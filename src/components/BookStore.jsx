import React, { Component } from 'react';

import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';

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
    }
  }
}
