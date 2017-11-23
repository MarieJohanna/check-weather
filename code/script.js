fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=a0e04c8ab0e494d9a44f8ea9ec9a17a2").then((response) => {
  return response.json()
}).then((json) => {
  console.log(json)
  document.getElementById('city').innerHTML = (json.name)
  document.getElementById('temp').innerHTML = (json.main.temp)
  document.getElementById('status').innerHTML = (json.weather[0].description)
  if (json.main.temp < 10) {
    document.getElementById('weather').classList.toggle('cold')
  }else if (json.main.temp > 10 && json.main.temp < 20){
    document.getElementById('weather').classList.toggle('lagom')
  }else {
    document.getElementById('weather').classList.toggle('warm')
  }
})

// fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=a0e04c8ab0e494d9a44f8ea9ec9a17a2").then((response) => {
//   return response.json()
// }).then((json) => {
//   console.log(json)
//   console.log(json.name)
//   console.log(json.main.temp)
//   console.log(json.main.)
// })
