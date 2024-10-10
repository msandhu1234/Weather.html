$(document).ready(function() {
    const apiKey = '9eb739615e4ef23ef8c4da3a9c7e1ac3'; // Replace with your actual API key

    $('#weather-form').submit(function(event) {
        event.preventDefault();
        const city = $('#city').val();
        
        $.ajax({
            url: `http://api.weatherstack.com/current`,
            data: {
                access_key: apiKey,
                query: city
            },
            dataType: 'json',
            success: function(response) {
                displayWeather(response);
            },
            error: function(xhr, status, error) {
                displayError('An error occurred while fetching weather data.');
            }
        });
    });

    function displayWeather(data) {
        if (data.error) {
            displayError(data.error.info);
            return;
        }

        const html = `
            <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
            <p>Temperature: ${data.current.temperature}°C</p>
            <p>Weather: ${data.current.weather_descriptions[0]}</p>
            <p>Humidity: ${data.current.humidity}%</p>
            <p>Wind Speed: ${data.current.wind_speed} km/h</p>
        `;

        $('#result-area').html(html);
    }

    function displayError(message) {
        $('#result-area').html(`<p class="error">${message}</p>`);
    }
});