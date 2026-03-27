import { useState } from "react";
import ApplianceSlider from "./components/ApplianceSlider.jsx";
import TimeSelector from "./components/TimeSelector.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import PredictionCard from "./components/PredictionCard.jsx";
import Suggestions from "./components/Suggestions.jsx";

export default function App() {
  const [inputs, setInputs] = useState({
    ac: 2,
    lights: 3,
    washing: 1,
    temp: 30,
    humidity: 60,
    time: "Evening",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      
      <h1 className="text-4xl font-bold mb-6 text-center">
        ⚡ Smart Energy Predictor
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left Panel */}
        <div className="space-y-6">
          <ApplianceSlider inputs={inputs} setInputs={setInputs} />
          <TimeSelector inputs={inputs} setInputs={setInputs} />
          <WeatherCard inputs={inputs} setInputs={setInputs} />
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          <PredictionCard inputs={inputs} />
          <Suggestions inputs={inputs} />
        </div>

      </div>
    </div>
  );
}