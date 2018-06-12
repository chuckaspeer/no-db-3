import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    
    };
  }

  


  render() {
    return (
      <div onSubmit={this.props.getWeather}>
        <input
          onChange={event => this.props.input(event.target.value)}
          ref ="textBox" type="text"
          name="city"
          placeholder=" City..."
        />
        
        <button onClick={this.props.weather}>Get Weather</button>
       <div>
       <button onClick={this.props.clicked }>Save</button>
    </div>
      </div>
    );
  }
}
export default Form;
