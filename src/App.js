import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonThanks: false
    };
  }

  //handler goes here
  handleClick() {
    this.setState({ buttonThanks: !this.state.buttonThanks });
  }

  render() {
    return (
      <div>
        <p>Greetings!</p>
        <button data-testid="clicker" type="button" onClick={() => this.handleClick()}>{this.state.buttonThanks ? 'thanks' : 'click me'}</button>
      </div>
    );
  }
}