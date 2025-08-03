import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  sayHello = () => {
    console.log("Hello! This is a static message.");
  };

  incrementAndSayHello = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayWelcome = (msg) => {
    alert(`Welcome Message: ${msg}`);
  };

  handleClick = (event) => {
    alert("I was clicked! (Synthetic Event Triggered)");
    console.log("Event:", event);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementAndSayHello}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to React Event Handling!")}>Say Welcome</button>

        <br /><br />

        <button onClick={this.handleClick}>Synthetic Event - OnPress</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
