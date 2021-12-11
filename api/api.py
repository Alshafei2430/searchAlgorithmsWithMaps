from flask import Flask, jsonify, request
from flask_cors import CORS
from breadthFirstSearch import get_path
from getEgyptCities import getEgyptCities
from depthFirstSearch import get_DFSpath
from AStar import aStar
app = Flask(__name__)
CORS(app)

@app.route('/')
def welcome():
    return 'Welcome to the Algorithms Api'

@app.route('/test')
def testMasterPush():
    return 'this is a push from the master pranch'

@app.route('/testJSONIFY')
def testJsonify():
    return jsonify({
        "message": "test jsonify and conncet with frontend"
    })
@app.route('/depthFirstSearch', methods=["POST"])
def depthFirstSearch():
    request_data = request.get_json()
    cities = get_DFSpath(request_data['startCity'], request_data['endCity'])
    return jsonify({"data": cities})

@app.route('/breadthFirstSearch', methods=["POST"])
def breadthFirstSearch():
    request_data = request.get_json()
    cities = get_path(request_data['startCity'], request_data['endCity'])
    return jsonify({
        "data": cities
    })
@app.route('/aStar', methods=['POST'])
def aStarSearch():
    request_data = request.get_json()
    cities = aStar(request_data['startCity'], request_data['endCity'])
    return jsonify({"data": cities})

@app.route('/cities')
def getCities():
    cities = getEgyptCities()
    return jsonify({"data": cities})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
