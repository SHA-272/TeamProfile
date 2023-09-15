import sqlite3

# Создание подключения к базе данных (или создание её, если она не существует)
conn = sqlite3.connect('data.db')
cursor = conn.cursor()

# Запрос для вставки данных
insert_query = """
INSERT INTO events (name, score) VALUES (?, ?)
"""

events = [
    ("CTF", "SHA-272"),
    ("VKACTF (RU)", "2903 points (8th Place)"),
    ("Break the Syntax CTF 2023", "106 points (115th Place)"),
    ("Security Fest 2023", "141 points (74th Place)"),
    ("BYUCTF 2023", "1579 points (220th Place)"),
    ("Grey Cat The Flag 2023 Qualifers", "100 points (274th Place)"),
    ("JerseyCTF III", "100 points (426th Place)"),
    ("VolgaCTF 2023 Qualifer (RU)", "10 points (127th Place)"),
    ("Texas Security Awareness Week 2023", "50 points (219th Place)"),
    ("Midnight Sun CTF 2023 Quals", "28 points (311th Place)"),
    ("cursedCTF 2023", "569 points (177th Place)"),
    ("DamCTF 2023", "100 points (333rd Place)"),
    ("VishwaCTF 2023", "4164 points (25th Place)"),
    ("MIACTF 2023 (RU)", "1501 points (2th Place)"),
    ("KVVUCTF 2023 (RU)", "1462 points (3th Place)")
]

# Добавление данных в базу данных
cursor.executemany(insert_query, events)

# Завершение транзакции
conn.commit()

# Закрытие соединения
conn.close()

print("Data has been successfully inserted into the database!")
