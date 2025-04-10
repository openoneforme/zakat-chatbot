# from flask import Flask, render_template, url_for, request, jsonify

# from chat import get_response

# app = Flask(__name__)

# @app.get('/')
# def index():
#     return render_template('index.html')

# @app.post("/predict")
# def predict():
#     text = request.get_json().get("message")
#     # TODO: check if text is valid
#     response = get_response(text)
#     message = {"answer": response}
#     return jsonify(message)

# if __name__ == "__main__":
#     app.run(debug=True)

from flask import Flask, render_template, request, jsonify
from chat import chat

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/predict", methods=['POST'])
def predict():
    text = request.get_json().get("message")
    print(text)
    response = chat(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)