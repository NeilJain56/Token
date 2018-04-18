import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button, text, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

class Form extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      num: '',
      date: '',
      cvc: '',
      charge: ''
    };
  }
  getName(){
    return this.state.name;
  }

handleChange(e){
  this.setState({name: e.target.value});
  console.log(e.target.value);
}

  render() {
    return (
        <div>
          <Card this.state/>
          <form>
            <FormGroup controlID="Card Form">
              <FormControl placeholder="Name on Card" id="name" onChange={this.handleChange.bind(this)} value = {this.state.name}>
              </FormControl>
              <FormControl placeholder="Card Number" id="num" onChange={this.handleChange.bind(this)} value = {this.state.num}>
              </FormControl>
              <FormControl placeholder="Expiration Date" id="date" onChange={this.handleChange.bind(this)} value = {this.state.date}>
              </FormControl>
              <FormControl placeholder="CVC" id="cvc" onChange={this.handleChange.bind(this)} value = {this.state.cvc}>
              </FormControl>
              <FormControl placeholder="How Much Do You Want To Charge This Card?" id="charge" onChange={this.handleChange.bind(this)} value = {this.state.charge}>
              </FormControl>

            </FormGroup>
          </form>
        </div>
      );
  }
}

export default Form;
