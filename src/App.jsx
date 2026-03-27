import { useState } from "react";
import "./App.css";

export default function App() {
  const [inputs, setInputs] = useState({
    ac: 2,
    lights: 3,
    washing: 1,
    temp: 30,
    humidity: 60,
    time: "Evening",
  });

  const usage =
    inputs.ac * 2 +
    inputs.lights * 0.5 +
    inputs.washing * 1.5 +
    inputs.temp * 0.2;

  const bill = (usage * 30 * 8).toFixed(0);

  return (
    <div className="container">
      <h1 className="title">⚡ WattWise</h1>

      <div className="dashboard">

        {/* ROW 1 */}
        <div className="card">
          <h2>⚡ Appliances</h2>

          <label>AC: {inputs.ac}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={inputs.ac}
            onChange={(e) =>
              setInputs({ ...inputs, ac: +e.target.value })
            }
            className="slider"
          />

          <label>Lights: {inputs.lights}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={inputs.lights}
            onChange={(e) =>
              setInputs({ ...inputs, lights: +e.target.value })
            }
            className="slider"
          />

          <label>Washing: {inputs.washing}</label>
          <input
            type="range"
            min="0"
            max="10"
            value={inputs.washing}
            onChange={(e) =>
              setInputs({ ...inputs, washing: +e.target.value })
            }
            className="slider"
          />
        </div>

        <div className="prediction">
          <h2>⚡ Energy Prediction</h2>
          <h1>{usage.toFixed(2)} kWh</h1>
          <p>Estimated Bill: ₹{bill}</p>
        </div>

        {/* ROW 2 */}
        <div className="card">
          <h2>🕒 Time of Day</h2>

          <div className="button-group">
            {["Morning", "Afternoon", "Evening", "Night"].map((t) => (
              <button
                key={t}
                className={`button ${inputs.time === t ? "active" : ""}`}
                onClick={() => setInputs({ ...inputs, time: t })}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>💡 Smart Suggestions</h2>

          {inputs.ac > 5 && (
            <div className="suggestion">
              ⚡ Reduce AC usage → Save ₹400/month
            </div>
          )}

          {inputs.lights > 6 && (
            <div className="suggestion">
              💡 Switch to LED lights
            </div>
          )}

          {inputs.time === "Evening" && (
            <div className="suggestion">
              ⏳ Avoid peak-time usage
            </div>
          )}
        </div>

        {/* ROW 3 (FULL WIDTH) */}
        <div className="card full-width">
          <h2>🌦 Weather</h2>

          <label>Temperature: {inputs.temp}°C</label>
          <input
            type="range"
            min="0"
            max="45"
            value={inputs.temp}
            onChange={(e) =>
              setInputs({ ...inputs, temp: +e.target.value })
            }
            className="slider"
          />

          <label>Humidity: {inputs.humidity}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.humidity}
            onChange={(e) =>
              setInputs({ ...inputs, humidity: +e.target.value })
            }
            className="slider"
          />
        </div>

      </div>
    </div>
  );
}