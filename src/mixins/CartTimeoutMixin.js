var CartTimeoutMixin = {
  componentWillMount() {
    this.setInterval(this.decrementCartTimer, 1000);
  },
  decrementCartTimer() {
    if (this.state.cartTimeoutSecs === 0) {
      this.props.alertCartTimeout();
      return;
    }
    this.setState({
      cartTimeoutSecs: this.state.cartTimeoutSecs - 1
    })
  },
  componentWillUnmount() {
    this.props.updateCartTimeout(5*60);
  }
};

module.exports = CartTimeoutMixin;
