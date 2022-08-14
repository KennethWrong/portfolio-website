from flask import Flask, send_from_directory, redirect
from flask_cors import CORS

app = Flask(__name__, static_url_path='/', static_folder='build')
CORS(app)

redirect_url = "http://127.0.0.1:5000/"


@app.route('/', methods=['GET'])
def homepage():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/experience', methods=['GET'])
def experience():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/about', methods=['GET'])
def about():
    return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True)
