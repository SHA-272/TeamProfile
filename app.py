from flask import Flask, render_template
import json

app = Flask(__name__)


def load_json(filename):
    with open(filename, "r") as json_file:
        return json.load(json_file)


@app.route("/")
def home():
    events = load_json("data/events.json")
    members = load_json("data/members.json")

    events = sorted(events, key=lambda x: x["date"], reverse=True)

    return render_template("index.html", members=members, events=events)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
