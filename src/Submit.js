import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Submit extends Component {
  chargeUser(){
    axios.get('https://shared-sandbox-api.marqeta.com/v3/swagger.json')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }
  render() {
    return (
        <div>
          <Button bsStyle="success" onClick={this.chargeUser}>Submit</Button>
        </div>
      );
  }
}

export default Submit;
