# DevOps Node.js Application

Навчальний проєкт для практичного заняття №9.

## Технології

- Node.js
- Docker
- Docker Compose
- PostgreSQL 15
- GitHub Actions
- Docker Hub
- AWS EC2

## Запуск

1. Створити файл .env з необхідними змінними.
2. Запустити Docker Desktop.
3. Виконати:

   docker compose up -d --build

4. Відкрити http://localhost:3000

## Перевірка

docker compose ps
docker compose logs app

## CI/CD

GitHub Actions виконує автоматичне тестування,
створення Docker-образу та публікацію в Docker Hub.

Docker-образ отримує тег на основі Git-коміту.
