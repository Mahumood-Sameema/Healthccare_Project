const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/check-health", async (req, res) => {
    const { heartRate, systolicBP, diastolicBP } = req.body;

    try {
        const response = await axios.post("http://127.0.0.1:5000/predict", {
            heart_rate: heartRate,
            systolic_bp: systolicBP,
            diastolic_bp: diastolicBP,
        });

        res.json({ status: response.data.status });
    } catch (error) {
        res.status(500).json({ error: "AI service not available" });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
