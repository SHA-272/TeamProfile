import requests
import json

team_id = 202266
years = [2022, 2023, 2024, 2025]
events = []

for year in years:
    # Получаем список всех событий за год
    response = requests.get(f'https://ctftime.org/api/v1/events/?year={year}')
    if response.status_code == 200:
        year_events = response.json()
        for event in year_events:
            event_id = event['id']
            # Получаем результаты события
            results_response = requests.get(f'https://ctftime.org/api/v1/results/{event_id}/')
            if results_response.status_code == 200:
                results = results_response.json()
                # Проверяем, участвовала ли команда в событии
                for result in results:
                    if result['team_id'] == team_id:
                        event_data = {
                            'name': event['title'],
                            'score': result['points'],
                            'place': result['place'],
                            'date': event['start'].split('T')[0]
                        }
                        events.append(event_data)
                        break

# Сохраняем события в файл
with open('events.json', 'w', encoding='utf-8') as f:
    json.dump(events, f, indent=2, ensure_ascii=False)
