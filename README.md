# To-Do List Web Application / Приложение для списка дел

This repository contains a simple web-based to-do list application built using HTML, vanilla JavaScript, and Bootstrap for styling. The application allows users to add tasks, mark them as done, and delete them as needed. It utilizes local storage to persist tasks across browser sessions.

Этот репозиторий содержит простое веб-приложение для списка дел, созданное с использованием HTML, чистого JavaScript (vanilla JavaScript) и Bootstrap для стилизации. Приложение позволяет пользователям добавлять задачи, отмечать их как выполненные и удалять по мере необходимости. Оно использует локальное хранилище для сохранения задач между сессиями браузера.

## Features / Особенности

- Add new tasks with a descriptive name. / Добавление новых задач с описательным названием.
- Mark tasks as done or undone. / Отметка задач как выполненных или невыполненных.
- Delete tasks permanently. / Постоянное удаление задач.
- Data persists using browser's local storage. / Данные сохраняются с использованием локального хранилища браузера.

## How to Use / Как использовать

1. **Clone Repository / Клонировать репозиторий**

2. **Open `index.html` in your web browser: / Открыть `index.html` в вашем веб-браузере:**
- Simply open the `index.html` file in any modern web browser. / Просто откройте файл `index.html` в любом современном веб-браузере.

3. **Usage / Использование:**
- **Add a Task / Добавление задачи:** Enter a task in the input field and click "Add a new task" button. / Введите задачу в поле ввода и нажмите кнопку "Добавить новую задачу".
- **Mark as Done / Отметка как выполненное:** Click the "Done" button to mark a task as completed. Click again to undo. / Нажмите кнопку "Готово", чтобы отметить задачу как выполненную. Нажмите снова, чтобы отменить.
- **Delete a Task / Удаление задачи:** Click the "Delete" button to remove a task permanently. / Нажмите кнопку "Удалить", чтобы удалить задачу навсегда.

## Code Structure / Структура кода

- `index.html`: Contains the structure of the web page. / Содержит структуру веб-страницы.
- `script.js`: JavaScript file containing application logic and local storage management. / Файл JavaScript, содержащий логику приложения и управление локальным хранилищем.

## Styling / Стилизация

This project uses Bootstrap for styling. / Этот проект использует Bootstrap для стилизации.

## Local Storage / Локальное хранилище

The application uses `localStorage` to persist tasks locally in the browser. Tasks are stored as JSON and retrieved on page load to maintain state across sessions. / Приложение использует `localStorage` для сохранения задач локально в браузере. Задачи хранятся в формате JSON и загружаются при загрузке страницы для поддержания состояния между сессиями.
