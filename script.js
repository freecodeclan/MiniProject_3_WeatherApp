'use strict';
const API_key = '1d534a4580b33f86205c2a7927144055';

async function fetchWeatherDetails() {
  try {
    let city_name = 'jaipur';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}`
    );

    if (!response.ok) {
      throw new Error('New Error found');
    }
    const data = await response.json();
    console.log('Weather data: ', data);
    //--Creating new element and inserting new element into it
    let newPara = document.createElement('p');
    newPara.innerHTML = `${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
  } catch (error) {
    console.error('Error fetching weather data: ', error.message);
  }
}
