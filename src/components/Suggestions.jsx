export default function Suggestions({ inputs }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
      <h2 className="text-xl mb-4">💡 Suggestions</h2>

      <ul className="space-y-2 text-gray-300">
        {inputs.ac > 5 && <li>⚠ Reduce AC usage to save ₹400/month</li>}
        {inputs.lights > 6 && <li>💡 Switch to LED lights</li>}
        {inputs.time === "Evening" && (
          <li>⏳ Shift heavy appliances to afternoon</li>
        )}
      </ul>
    </div>
  );
}