import React, { Component } from 'react';

import RandomColor from './RandomColor';

import request from 'superagent';

import logo from './logo.svg';
import './App.css';

const noop = () => {};

class App extends Component {
  state = {
    isBlack: true,
    color: '000',
    text: 'Click me to change color',
    isLoading: false,
  };

  onClick = e => {
    const { isBlack } = this.state;

    this.setState({
      isLoading: true,
    });

    if (isBlack) {
      request.get('http://www.colr.org/json/color/random').then(res => {
        const parsedResponse = JSON.parse(res.text);

        this.setState({
          isBlack: !isBlack,
          color: parsedResponse.colors
            ? parsedResponse.colors[0].hex || '000'
            : '000',
          isLoading: false,
        });
      });
      return;
    }

    this.setState({
      isBlack: !isBlack,
      color: '000',
      isLoading: false,
    });
  };

  onChangeText = e => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { state } = this;

    return (
      <div className="App">
        <div>
          {this.state.isBlack ? '' : 'Random'} Color:: #{this.state.color}
        </div>
        <RandomColor
          isLoading={state.isLoading}
          color={`#${state.color}`}
          onClick={state.isLoading ? noop : this.onClick}
          text={state.text}
        />
        <input
          onChange={this.onChangeText}
          className="text-input"
          value={state.text}
        />
      </div>
    );
  }
}

export default App;
