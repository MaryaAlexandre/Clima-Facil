functiongetWeather() {
  var city = document.getElementBtId("cityInput").value;
  var apiKey = be67eed35e0cbf202d84d99c34293201;
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      showWeather(data);
    })
    .catch(error => {
      console.log("Erro ao obter dados:", error);
    });
}
function showWeather(data) {
  var weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHtml =
    '<h2></h2>${data.name}, ${data.sys.country}</h2>
    < p > Temperatura: ${ data.main.temp }°C</p >
      <p> Condição: ${data.weather[0].description}</p>
  ';
}