import React, { Component } from 'react';
import './App.css'
import Form from './Form';
import Submit from './Submit';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }
  render() {
    if(this.state.loading === true){
      return(
        <div class="splashScreen">
          <center>
            <h1 id="loading">Token</h1>
            <div class="spinner">
              <div class="cube1"></div>
              <div class="cube2"></div>
          </div>
          </center>
        </div>
      );
    }
    else{
      return (
          <div className="Token">
            <Form/>
            <Submit/>
          </div>
        );
    }
  }
}

export default App;
