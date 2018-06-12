import React, { Component } from "react";
import axios from "axios";

export default class Title extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      isEditing: false,
      arr: [],
      index: 0,
      value: 0
    };
  }

  componentDidMount() {
    axios.get("/api/getTitle").then(response =>
      this.setState({
        title: response.data
      })
    );

    axios.get("/api/getArray").then(response =>
      this.setState({
        arr: response.data
      })
    );
  }

  updateArray = () => {
    console.log("hit");
    let index = this.state.index;
    let value = this.state.value;
    axios.put(`/api/updateArray/${index}`, { value }).then(response => {
      console.log(response);
      this.setState({
        arr: response.data
      });
    });
  };

  updateIndex = data => {
    this.setState({
      index: data
    });
  };

  updateValue = data => {
    this.setState({
      value: data
    });
  };

  render() {
    return (
      <div>
        <h1>My Sh!tty Weather App</h1>

        <p> The struggle at DevMountain is REAL!</p>
        <br />
        <h4>update Zip Code</h4>
        <h2>[{this.state.arr}]</h2>
        <input
          onChange={e => this.updateIndex(e.target.value)}
          placeholder="place the index here"
        />
        <input
          onChange={e => this.updateValue(e.target.value)}
          placeholder="place the value here"
        />
        <br />

        <button onClick={this.updateArray}>Update!</button>
        <br />
        <br />
      </div>
    );
  }
}
