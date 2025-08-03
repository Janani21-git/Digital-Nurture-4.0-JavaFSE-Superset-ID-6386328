import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const { rupees } = this.state;
    const euros = (parseFloat(rupees) / 90).toFixed(2); // Approx conversion
    this.setState({ euros });
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <h2>Currency Converter</h2>
        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>💶 Euros: {this.state.euros}</p>
      </div>
    );
  }
}

export default CurrencyConvertor;
