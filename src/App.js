import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';

class App extends Component {

  render() {
    return (
        <div class="Token">
        <Card />
        <Form/>
        </div>
      );
  }
}

export default App;
