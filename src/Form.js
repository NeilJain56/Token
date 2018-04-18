import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button, text, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';

class Form extends Component {

  render() {
    return (
        <div>
          <form>
            <FormGroup controlID="Card Form">
              <FormControl placeholder="Name on Card">
              </FormControl>
              <FormControl placeholder="Card Number">
              </FormControl>
              <FormControl placeholder="Expiration Date">
              </FormControl>
              <FormControl placeholder="CVC">
              </FormControl>
              <FormControl placeholder="How Much Do You Want To Charge This Card?">
              </FormControl>
              <Button>
              </Button>
            </FormGroup>
          </form>
        </div>
      );
  }
}

export default Form;
