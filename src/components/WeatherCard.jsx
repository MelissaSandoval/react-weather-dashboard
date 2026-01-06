function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <h3>{weather.name}</h3>
      <p>{weather.weather[0].description}</p>
      <p>Temp: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
