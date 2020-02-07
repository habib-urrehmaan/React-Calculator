import React from 'react';
import Screen from './Screen';
import Panel from './Panel';

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = { input: "" }
  }

  outputToScreen = (input) => {
    this.setState((state, props) => ({
      input: state.input + input
    }));
  }

  render() {
    return (
      <div className="Calculator">
        <Screen input={this.state.input} />
        <Panel channel={this.outputToScreen} />
      </div>
    );
  }
}

export default Calculator;