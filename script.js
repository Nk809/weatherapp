const apiKey = "3e36ba3863413e11b460fd72108385d3";

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById("weatherInfo").innerHTML = `<p>City not found ❌</p>`;
                return;
            }
            document.getElementById("weatherInfo").innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
        <p><b>${data.main.temp}°C</b> - ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
        })
        .catch(() => {
            document.getElementById("weatherInfo").innerHTML = `<p>Error fetching data ❌</p>`;
        });
}
