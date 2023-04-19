from flask import Flask, request, jsonify
from flask_cors import CORS
from test import process_input

app = Flask(__name__)
CORS(app)  # Add this line to enable CORS

@app.route('/api/process', methods=['POST'])
def process():
    print("Request received") # Debugging print statement
    data = request.get_json()
    input_text = data['inputText']
    output_text = process_input(input_text)
    print("Output text:", output_text) # Debugging print statement
    return jsonify({'outputText': output_text})

if __name__ == '__main__':
    app.run(debug=True)
