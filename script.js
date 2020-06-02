const timeZone = document.getElementById('timezoneCity');
const currentWind = document.getElementById('currentWind');
const currentHumid = document.getElementById('currentHumid');
const currentTemp = document.getElementById('currentTemp');


window.addEventListener('load', () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude
      lat = position.coords.latitude;
      const api = `http://api.weatherstack.com/current?access_key=f93d1fcb702c6795f90981cc860bf1ad&query=${lat},${long}`

      fetch(api)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          const { humidity, temperature, wind_speed } = data.current;
          const { name } = data.location;

          currentTemp.textContent = temperature;
          currentWind.textContent = wind_speed;
          currentHumid.textContent = humidity;
          timeZone.textContent = name;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
  }
})
