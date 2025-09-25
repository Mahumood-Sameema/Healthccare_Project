import numpy as np
import pandas as pd
import requests
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

app = Flask(__name__)

# 1. Fetch real-time health data (simulation)
def get_real_time_health_data():
    url = "https://api.api-ninjas.com/v1/vitalsigns"  # Example API for vitals (replace with actual)
    headers = {"X-Api-Key": "your_api_key"}  # Replace with real API key
    response = requests.get(url, headers=headers)
    return response.json() if response.status_code == 200 else {}

# 2. Train AI model
def train_model():
    data = pd.DataFrame([
        [60, 120, 80, 0],   # Normal
        [100, 150, 100, 1], # High BP
        [30, 90, 60, 1],    # Low HR
        [110, 160, 110, 1]  # Risky
    ], columns=["heart_rate", "systolic_bp", "diastolic_bp", "risk"])

    X = data[["heart_rate", "systolic_bp", "diastolic_bp"]]
    y = data["risk"]
    model = RandomForestClassifier()
    model.fit(X, y)
    return model

model = train_model()

# 3. API Endpoint for Predictions
@app.route("/", methods=["POST"])
@app.route("/", methods=["GET", "POST"])
def predict():
    if request.method == "GET":
        return jsonify({"message": "Send a POST request with JSON data."})

    data = request.get_json()
    features = np.array([[data["heart_rate"], data["systolic_bp"], data["diastolic_bp"]]])
    prediction = model.predict(features)[0]
    return jsonify({"status": "High Risk" if prediction == 1 else "Normal"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
