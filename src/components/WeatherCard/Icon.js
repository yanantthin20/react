import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = `./img/sunny.png`;
      break;
    case "Cloudy":
      icon = `./img/cloudy.png`;
      break;
    case "Drizzle":
      icon = `./img/drizzle.jfif`;
      break;
    case "Snow":
      icon = `./img/snow.png`;
      break;
    case "Tornado":
      icon = `./img/tornado.jfif`;
      break;
    case "Rain":
      icon = `./img/rain.png`;
      break;
    case "Foggy":
      icon = `./img/fog.png`;
      break;
    default:
      icon = `./img/fog.png`;
      break;
  }

  return <Icon src={icon} alt="Weather Icon" />;
};

export default Icon;
