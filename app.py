from flask import Flask, render_template
import sqlite3
app = Flask(__name__)

@app.route('/')
def home():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute("SELECT name, score, place FROM events")
    fetched_data = cursor.fetchall()
    events = [{"name": name, "score": score, "place": place} for name, score, place in fetched_data]

    cursor.execute("SELECT name, role, achievements FROM members")
    fetched_data = cursor.fetchall()
    members = [{"name": name, "role": role, "achievements": achievements} for name, role, achievements in fetched_data]

    conn.close()

    return render_template('index.html', members=members, events=events)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
