print("Flask is starting...")  # Debug message

from flask import Flask

app = Flask(__name__)

@app.route("/")  
def home():
    print("Home route accessed!")  # Debug message
    return "Hello, Flask is working!"

if __name__ == "__main__":
    print("Flask is running!")  # Debug message
    app.run(debug=True, host="0.0.0.0", port=5000)

