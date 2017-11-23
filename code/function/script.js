const myFunction = () => {

 const fetchCity = "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("citySelection").value + "&units=metric&APPID=a0e04c8ab0e494d9a44f8ea9ec9a17a2"

 fetch(fetchCity)
  .then(
    (response) => {
      return response.json()
    }).then((json) => {
      document.getElementById("cityHeading").innerHTML = json.name
      document.getElementById("celciusCondition").innerHTML = json.main.temp_max + "°C, " + json.weather[0].description
      // Creating the url string for the weather image
      // const urlWeatherImage = "url(" + "'" + "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png" + "')"
      // document.body.style.backgroundImage = urlWeatherImage
      const sunriseToday = new Date(json.sys.sunrise * 1000)
      const sunsetToday = new Date(json.sys.sunset * 1000)
      document.getElementById("sunrise").innerHTML = "Sunrise today at " + sunriseToday.toTimeString()
      document.getElementById("sunset").innerHTML = "Sunset today at " + sunsetToday.toTimeString()
    }
  )
  // var offset = new Date().getTimezoneOffset();
}

window.onload = myFunction;
document.getElementById("citySelection").addEventListener("change", myFunction);
