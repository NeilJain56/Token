import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import 'react-credit-cards/lib/styles.scss';
import './Form.css'
import {FormGroup, FormControl} from 'react-bootstrap';

class Form extends Component {
  constructor(){
    super();
    this.state ={
      name: '',
      num: '',
      date: '',
      cvc: '',
      charge: '',
      focused: ''
    };
  }
  validateCard(){
    if(this.state.num.length > 13 && this.state.num.length < 20) return 'success';
    else if(this.state.num.length < 14 && this.state.num.length !== 0) return 'warning';
    else if(this.state.num.length > 19) return 'error';
    return null;
  }
  validateExp(){
    if(this.state.date.length === 5) return 'success';
    else if(this.state.date.length > 0) return 'warning';
    else if(this.state.date.length > 5) return 'error';
    return null;
  }
  validateCVC(){
    if(this.state.cvc.length === 4 || this.state.cvc.length === 3) return 'success';
    else if(this.state.cvc.length > 0 && this.state.cvc.length < 4) return 'warning';
    else if(this.state.cvc.length > 4) return 'error';
    return null;
  }
  nameChanged(e){
    this.setState({name: e.target.value});
    this.setState({focused: "name"});
  }
  cardChanged(e){
    this.setState({num: e.target.value});
    this.setState({focused: "number"});
  }
  expChanged(e){
    this.setState({date: e.target.value});
    this.setState({focused: "expiry"});
  }
  cvcChanged(e){
    this.setState({cvc: e.target.value});
    this.setState({focused: "cvc"});
  }
  chargeChanged(e){
    this.setState({charge: e.target.value});
    this.setState({focused: "name"});
  }
  render() {
    return (
        <div>
          <div className="container center_div">
            <form>
              <Cards
                number={this.state.num}
                name={this.state.name}
                expiry={this.state.date}
                cvc={this.state.cvc}
                focused={this.state.focused}
              />
              <div>Name On Card</div>
              <FormGroup controlid="cardName">
                <FormControl placeholder="e.g. John Doe" id="name" onChange={this.nameChanged.bind(this)} value={this.state.name}>
                </FormControl>
              </FormGroup>
              <div>Card Number</div>
              <FormGroup controlid="cardNumber" validationState={this.validateCard()}>
                <FormControl placeholder="0000-0000-0000-0000" id="number" onChange={this.cardChanged.bind(this)} value={this.state.num}>
                </FormControl>
              </FormGroup>
              <div>Expiration Date</div>
              <FormGroup controlid="cardExp" validationState={this.validateExp()}>
                <FormControl placeholder="MM/YY" id="exp" onChange={this.expChanged.bind(this)} value={this.state.date}>
                </FormControl>
              </FormGroup>
              <div>CVC</div>
              <FormGroup controlid="cardCVC" validationState={this.validateCVC()}>
                <FormControl placeholder="000" id="cvc" onChange={this.cvcChanged.bind(this)} value={this.state.cvc}>
                </FormControl>
              </FormGroup>
              <div>Amount</div>
              <FormGroup controlid="cardCharge">
                <FormControl placeholder="e.g. 1.00" id="charge" onChange={this.chargeChanged.bind(this)} value={this.state.charge}>
                </FormControl>
              </FormGroup>
            </form>
          </div>
        </div>
      );
  }
}

export default Form;
