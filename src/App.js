import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './App.css';
import { Button, text, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.card = {
      value: '',
      credit: '',
      name: '',
      cv: '',
      exp: '',
      addedCard: '',
      addedNames: ''
    };
  }

  getValidationState() {
      const length = this.card.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
      return null;
  }

  handleChange(e) {
      var newState = {};
      newState[e.target.id]=e.target.value;
      this.setState(newState)
      console.log("State update");
      console.log(this.card.credit)
  }

  handleSubmit(e){
      e.preventDefault();
      let cards = this.card.addedCard + this.state.credit;
      let names = this.card.addedNames+this.state.name ;
      this.setState({addedCard: cards});
      this.setState({addedNames: names});
      console.log(this.card.credit);
      console.log(e);
  }

  render() {

    return (
        <div class="Token">
        <h1>Token</h1>
        <Cards
          number={"4117744051988215"}
          name={"Neil Jain"}
          expiry={"10/20"}
          cvc={"101"}
          focused={""}
        />
        <br/>
        <div class="col-xs-2">
        <FormControl type="text" placeholder="Card Number"/>
        <br/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="credit" validationState={this.getValidationState()}>
            <FormControl
              type="text"
              value={this.card.credit}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <Button type="submit">Add Card</Button>
          </FormGroup>
          <FormGroup controlId="name">
            <FormControl
              type="text"
              value={this.card.name}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
            <FormControl.Feedback />
            <Button type="submit">Add Card</Button>
          </FormGroup>
        </form>
        {this.card.addedCard}
        {this.card.addedNames}
        </div>
      );
  }
}

export default App;
