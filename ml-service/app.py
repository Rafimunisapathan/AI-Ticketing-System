from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    text = data["text"]

    transformed = vectorizer.transform([text])
    prediction = model.predict(transformed)[0]

    return jsonify({"category": prediction})

if __name__ == "__main__":
    app.run(port=5001)