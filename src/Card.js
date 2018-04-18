import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

class Card extends Component {
constructor(prop){

  super();

}

  render(){

    return(
      <Cards
      number={this.props.num}
      name={"Form.state.name"}
      expiry={"Form.state.date"}
      cvc={"Form.state.cvc"}

    />
    );
  }




}
export default Card;
