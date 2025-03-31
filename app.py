# Libraries
from flask import Flask, request, render_template
from werkzeug.utils import secure_filename
from datetime import datetime
import os
import json

# Modules
import parseBrowserHistory as parse

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	with open("articles.json", "r") as file:
		data = json.load(file)
	return render_template("index.html", articles=data)

@app.route("/calculator")
def calculator():
	return render_template("calculator.html")

@app.route("/sketchpad")
def sketchpad():
	return render_template("sketchpad.html")

@app.route("/upload", methods=["GET", "POST"])
def upload():
	if request.method == "POST":
		file = request.files["file"]
		if file and parse.allowed_file(file.filename):
			filename = secure_filename(file.filename)
			new_filename = f"{filename.split('.')[0]}_{str(datetime.now())}.csv"
			save_location = os.path.join("inputFiles", new_filename)
			file.save(save_location)

			output = parse.parseCSV(save_location)
			return output

		return "uploaded"
	return render_template("upload.html")

if __name__ == "__main__":
	app.run(debug=True)