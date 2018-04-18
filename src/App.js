import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, text, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

class App extends Component {
  //let addedCard = '';
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: '',
      credit: '',
      fname: '',
      cv: '',
      exp: '',
      addedCard: '',
      addedNames: ''
    };
  }

  getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }

    handleChange(e) {
      var newState = {};
      newState[e.target.id]=e.target.value;
      this.setState(newState)
      //this.setState({ value: e.target.value });
      console.log("State update");
      console.log(this.state.credit)
      //console.log(e.target.id)
      //console.log(e.target.value)

    }
    handleSubmit(e){
//this.setState({credit: e.target.credit});
      e.preventDefault();
      let cards = this.state.addedCard + this.state.credit;
      let names = this.state.addedNames+this.state.fname ;
this.setState({addedCard: cards});
this.setState({addedNames: names});
        console.log(this.state.credit);
        console.log(e);

    }

  render() {
    // addedCard = ''

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="credit"
          validationState={this.getValidationState()}
          //controlId="formInlineText"
        >

          //<ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            //controlId="credit"
            value={this.state.credit}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        //  <HelpBlock>Validation is based on string length.</HelpBlock>
          <Button type="submit">Add Card</Button>
        </FormGroup>

        <FormGroup
          controlId="fname"
          //validationState={this.getValidationState()}
          //controlId="formInlineText"
        >

          //<ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            //controlId="credit"
            value={this.state.fname}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        //  <HelpBlock>Validation is based on string length.</HelpBlock>
          <Button type="submit">Add Card</Button>
        </FormGroup>
      </form>

      {this.state.addedCard}
      {this.state.addedNames}
      </div>
    );
  }
}

export default App;
