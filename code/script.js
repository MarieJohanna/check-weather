const myFunction = () => {

 const fetchCity = "http://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("citySelection").value + "&units=metric&APPID=a0e04c8ab0e494d9a44f8ea9ec9a17a2"

 fetch(fetchCity)
  .then(
    (response) => {
      return response.json()
    }).then((json) => {
      document.getElementById("cityHeading").innerHTML = json.name
      document.getElementById("celciusCondition").innerHTML = json.main.temp_max + "°C, " + json.weather[0].description
      if (json.main.temp_max > 12) {
        document.getElementById('box').style.background = "orange"
      }else {
        document.getElementById('box').style.background = "lightblue"
      }
      const sunriseToday = new Date(json.sys.sunrise * 1000)
      const sunsetToday = new Date(json.sys.sunset * 1000)
      document.getElementById("sunrise").innerHTML = "Sunrise today at " + sunriseToday.toTimeString()
      document.getElementById("sunset").innerHTML = "Sunset today at " + sunsetToday.toTimeString()
    }
  )
}

window.onload = myFunction;
document.getElementById("citySelection").addEventListener("change", myFunction)
