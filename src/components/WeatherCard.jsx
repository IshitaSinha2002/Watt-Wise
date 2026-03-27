export default function WeatherCard({ inputs, setInputs }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
      <h2 className="text-xl mb-4">🌦 Weather</h2>

      <div className="mb-4">
        <label>Temperature (°C): {inputs.temp}</label>
        <input
          type="range"
          min="0"
          max="45"
          value={inputs.temp}
          onChange={(e) =>
            setInputs({ ...inputs, temp: e.target.value })
          }
          className="w-full accent-red-400"
        />
      </div>

      <div>
        <label>Humidity (%): {inputs.humidity}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={inputs.humidity}
          onChange={(e) =>
            setInputs({ ...inputs, humidity: e.target.value })
          }
          className="w-full accent-blue-400"
        />
      </div>
    </div>
  );
}