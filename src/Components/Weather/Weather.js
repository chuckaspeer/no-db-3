import React, { Component } from "react";
import axios from "axios";
import Form from "./Form";
import Title from "./Title";
import SaveWeather from "./saveWeather";
import "./Weather.css"

//import Logic from "./Logic";

export default class Weather extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    wind: "",
    error: "",
    input: "",
    weather: []
  };

  componentDidMount() {}

  componentWillMount() {}

  intWeather = () => {
    axios.get("/api/weather/" + this.state.input).then(response => {
      console.log(response.data);

      this.setState({
        temperature: response.data.list[0].main.temp,
        city: response.data.name,
        country: response.data.list[0].sys.country,
        humidity: response.data.list[0].main.humidity,
        description: response.data.list[0].weather[0].description,
        wind: response.data.list[0].wind.speed,
        error: ""
      });
    });

  };
  
  saveHandler;
  inputHandler = input => {
    this.setState({ input });
  };

  clicked = () => {
    //console.log("the button ");
    let obj = {
      name: this.state.input,
      temp: this.state.temperature,
      looks: this.state.description,
      humidity: this.state.humidity,
      wind: this.state.wind
    };

    axios.post("/api/weather", { obj }).then(response => {
      console.log(response.data);
      this.setState({
        weather: response.data
      });
    });
  };

  delete = id => {
    console.log("hit delete");
    axios.delete(`/api/weather/${id}`).then(response => {
      this.setState({
        weather: response.data
      });
    });
  };

//kelvin = ((297.43 -273.15)*1.8)+32;
  ktoF = kelvin => {
    return (kelvin - 273.15) * 1.8 + 32;
  };

  render() {
    const { temperature } = this.state;
    const { city } = this.state;
    const { country } = this.state;
    const { description } = this.state;
    const { humidity } = this.state;
    const { wind } = this.state;

    const data = this.state.weather.map((elem, index) => {
      return <SaveWeather className = "SavedWeather" key={index} element={elem} delete={this.delete} />;
    });

    return (
      <div className = "body">
        <Title />
        <Form
          input={this.inputHandler}
          weather={this.intWeather}
          clicked={this.clicked}
        />

        <div className = "a">
          <p className = "incity">City: {this.state.input}</p>
          <div className = "wd">
          <p>Temp: {temperature && this.ktoF(temperature).toFixed(0)}</p>
          <p>Looks Likes: {description}</p>
          <p>Humidity: {humidity}</p>
          <p>Wind Speed: {wind}</p>
          </div>
        </div>

        {data}
      </div>
    );
  }
}
