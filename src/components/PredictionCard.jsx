export default function PredictionCard({ inputs }) {
  // Dummy logic (replace with API later)
  const usage =
    inputs.ac * 2 +
    inputs.lights * 0.5 +
    inputs.washing * 1.5 +
    inputs.temp * 0.2;

  const bill = (usage * 30 * 8).toFixed(0);

  return (
    <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-6 rounded-2xl shadow-xl text-black">
      <h2 className="text-xl mb-3">📊 Prediction</h2>

      <p className="text-3xl font-bold">{usage.toFixed(2)} kWh</p>
      <p className="mt-2">Estimated Bill: ₹{bill}</p>
    </div>
  );
}