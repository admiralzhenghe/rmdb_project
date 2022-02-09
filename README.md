# RMDB (React Movie Database)

Movie information database with user features to log and rate movies.

## Architecture

**Frontend**

- Languages:

  - HTML
  - CSS
  - Javascript

- Framework/Libraries:
  - React
  - Styled Components

**Backend**

- Language:

  - Python

- Framework/Libraries:

  - Django
  - Django Rest Framework
  - Django Rest Auth
  - Simple JWT

- Database:
  - SQLite

**Installation**

- Navigate to the root directory where `manage.py` is located.
- Install project dependencies by running `pip install -r requirements.txt`.
- Make and apply migrations by running `python manage.py makemigrations` and `python manage.py migrate`.
- Create superuser with `python manage.py createsuperuser`. (Optional).
- Start the project by running `python manage.py runserver`.

## Introduction

This project is a movie database based on [IMDB](https://www.imdb.com/) and [Letterboxd](https://letterboxd.com/). It uses [The Movie Database](https://www.themoviedb.org/) API to fetch movie information and a custom Django REST Framework API to fetch user information. All website pages are mobile-responsive.
