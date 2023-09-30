from flask import Flask, render_template
import sqlite3
app = Flask(__name__)

@app.route('/')
def home():
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute("SELECT name, role, quote FROM members")
    fetched_data = cursor.fetchall()
    members = [{"name": name, "role": role, "quote": quote} for name, role, quote in fetched_data]
    
    cursor.execute("SELECT name, score, place, date FROM events ORDER BY date DESC")
    fetched_data = cursor.fetchall()
    events = [{"name": name, "score": score, "place": place, "date": date} for name, score, place, date in fetched_data]

    conn.close()

    return render_template('index.html', members=members, events=events)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
