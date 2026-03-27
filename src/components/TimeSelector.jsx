const times = ["Morning", "Afternoon", "Evening", "Night"];

export default function TimeSelector({ inputs, setInputs }) {
  return (
    <div className="bg-gray-900 p-5 rounded-2xl shadow-xl">
      <h2 className="text-xl mb-4">🕒 Time of Day</h2>

      <div className="grid grid-cols-2 gap-3">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setInputs({ ...inputs, time })}
            className={`p-3 rounded-xl transition ${
              inputs.time === time
                ? "bg-green-500 text-black"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}