// Using Promises
document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '4ae30886b917e521bbffb14b05042611'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
});

// Using async/await
async function getWeather(city) {
    const apiKey = '4ae30886b917e521bbffb14b05042611'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const weatherResult = document.getElementById('weather-result');
        weatherResult.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    getWeather(city);
});