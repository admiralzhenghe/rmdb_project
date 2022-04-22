# RMDB (React Movie Database)

Movie information database for users to find, rate, and log movies.

## Introduction

This project is a movie database based on [IMDB](https://www.imdb.com/) and [Letterboxd](https://letterboxd.com/). It uses [The Movie Database](https://www.themoviedb.org/) API to fetch movie information and a custom Django REST Framework API to fetch user information. All web pages are mobile-responsive.

**Installation**

- Navigate to the root directory where `manage.py` is located.
- Install project dependencies by running `pip install -r requirements.txt`.
- Make and apply migrations by running `python manage.py makemigrations` and `python manage.py migrate`.
- Create superuser with `python manage.py createsuperuser`. (Optional).
- Start the project by running `python manage.py runserver`.

## Architecture

**Frontend**

- Languages:

  - HTML
  - CSS
  - JavaScript

- Framework/Libraries:
  - React
  - Styled Components

**Backend**

- Language:

  - Python

- Framework/Libraries:

  - Django
  - Django REST Framework
  - Django REST Auth
  - Simple JWT

- Database:
  - SQLite

## Demo
**User account registration and log in**

![registration_and_login](https://user-images.githubusercontent.com/68667158/164564426-8faa3763-f9a9-4dc9-9975-2e19873b4ec4.gif)

**Searching for movies**

![searching](https://user-images.githubusercontent.com/68667158/164565175-e615feba-9393-4c18-8270-78fddcd28a02.gif)

**Rating and logging movies**

![rating_and_logging](https://user-images.githubusercontent.com/68667158/164565194-6a3465b6-cd63-4a4a-965a-e0aa72616c7a.gif)

**Biographical information**

![bio](https://user-images.githubusercontent.com/68667158/164567805-e4625262-d4a2-4cdc-af4b-3c4caafb6036.gif)

**Mobile responsiveness**

![mobile](https://user-images.githubusercontent.com/68667158/164568112-2edf7a94-903d-4aed-9f6b-e00ff4457847.gif)
