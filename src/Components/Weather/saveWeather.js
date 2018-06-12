import React, { Component } from "react";
import "./Weather.css"
export default function saveWeather(props) {
  
  return (
    <div className= "saved" onClick={() => props.delete(props.element.id)}>
      <div className ="saved2">
      <p className ="savedCity">City: {props.element.name}</p>
      <p>Temp: {props.element.temp} </p>
      <p>Looks Likes: {props.element.looks}</p>
      <p>Humidity: {props.element.humidity} </p>
      <p>Wind Speed: {props.element.wind} </p>
      </div>
    </div>
  );
}
