const axios = require("axios");
let id = 0;
let weather = [];
let arr = [7,5,6,5,1];

let title = "My SHITTY WEATHER APP";

const API_KEY = "cf6bb9987190781c779d297ddb7639da";

module.exports = {
  getWeather(req, res) {
    const city = req.params.city;
    //console.log(city);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city},usa&appid=${API_KEY}`
      )
      .then(response => {
        //console.log(response.data);
        //weather = response.data;

        // let details = {
        //   temperature: response.data.list[0].main.temp,
        //   city: req.params.city,
        //   humidity: response.data.list[0].main.humidity,
        //   description: response.data.list[0].weather[0].description,
        //   wind: response.data.list[0].wind.speed
        // };
        //weather.push(details);
        // console.log(details)

        res.status(200).json(response.data);
      })
      .catch(error => console.log(error));
  },
  saveWeather(req, res) {
    console.log(req.body.obj);
    const { obj } = req.body;
    let result = {
      ...obj,
      id: id
    };
    weather.push(result);
    id++;
    res.status(200).json(weather);
  },

  deleteWeather(req, res) {
    //console.log(req.params.id);
    const { id } = req.params;
    let index = weather.findIndex(element => element.id == id);
    weather.splice(index, 1);
    console.log(weather);
    res.status(200).json(weather);
  },

  getTitle(req, res) {
    res.status(200).json(title);
  },
  getArray(req, res) {
    res.status(200).json(arr);
  },

  updateArray(req, res) {
    console.log(req.body);
    console.log(req.params);
    let id = parseInt(req.params.id);
    let value = parseInt(req.body.value);
    arr[id] = value;
    res.status(200).json(arr);
  }
};

//const city = e.target.elements.city.value;
// const country = e.target.elements.country.value;
