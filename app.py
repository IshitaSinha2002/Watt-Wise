from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

CORS(app)

# Load model + features
model = pickle.load(open("energy_model.pkl", "rb"))
features = pickle.load(open("features.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    # Convert input to DataFrame
    df = pd.DataFrame([data])

    # ===== SAME FEATURE ENGINEERING =====
    df["temp_diff"] = df["T1"] - df["T_out"]
    df["avg_temp"] = df[["T1","T2","T3"]].mean(axis=1)

    # Add missing columns if needed
    for col in features:
        if col not in df:
            df[col] = 0

    # Ensure correct column order
    df = df[features]

    # Prediction
    pred = model.predict(df)
    pred = np.expm1(pred)

    return jsonify({"prediction": float(pred[0])})

if __name__ == "__main__":
    app.run(debug=True)