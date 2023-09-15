from flask import Flask, render_template
import sqlite3
app = Flask(__name__)

@app.route('/')
def home():
    team_data = {
        "name": "SHA-272",
        "members": [
            {"name": "magecode", "role": "Reverse, PPC, PWN", "achievements": "Writing code is like magic, it creates wonders"},
            {"name": "nik_kir1", "role": "WEB, Promt ingeniring", "achievements": "laziness won and was filled, but not this is not for sure"},
            {"name": "Shinbae", "role": "Cryptography Guru", "achievements": "RSA-dodik"},
            {"name": "_muffin", "role": "WEB", "achievements": "A champion and a winner in everything"},
            {"name": "damned", "role": "Forensic", "achievements": "Your deleted data will become mine"}
        ],
        "contact": "hackerselite@email.com"}
    conn = sqlite3.connect('data.db')
    cursor = conn.cursor()

    cursor.execute("SELECT name, score FROM events")
    fetched_data = cursor.fetchall()
    events = [{"name": name, "score": score} for name, score in fetched_data]

    conn.close()

    return render_template('index.html', team=team_data, events=events)

if __name__ == '__main__':
    app.run(debug=True)
