import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-6} condition="Foggy" city="Sydney" country="AU" />
      <WeatherCard temp={30} condition="Cloudy" city="Melbourne" country="AU" />
      <WeatherCard temp={26} condition="Rain" city="London" country="GB" />
    </div>
  );
}

export default App;
