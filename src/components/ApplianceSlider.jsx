import { FaSnowflake, FaLightbulb, FaTshirt } from "react-icons/fa";

export default function ApplianceSlider({ inputs, setInputs }) {
  const update = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
      <h2 className="text-xl mb-4">⚡ Appliances</h2>

      {[
        { key: "ac", label: "AC", icon: <FaSnowflake /> },
        { key: "lights", label: "Lights", icon: <FaLightbulb /> },
        { key: "washing", label: "Washing Machine", icon: <FaTshirt /> },
      ].map((item) => (
        <div key={item.key} className="mb-4">
          <div className="flex justify-between">
            <span>{item.icon} {item.label}</span>
            <span>{inputs[item.key]}</span>
          </div>

          <input
            type="range"
            min="0"
            max="10"
            value={inputs[item.key]}
            onChange={(e) => update(item.key, e.target.value)}
            className="w-full accent-green-400"
          />
        </div>
      ))}
    </div>
  );
}