'use strict';
const API_key = '1d534a4580b33f86205c2a7927144055';

async function showWeather() {
  let city_name = 'jaipur';
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
  );
  const data = await response.json();
  console.log('Weather data: ' + data);
}
