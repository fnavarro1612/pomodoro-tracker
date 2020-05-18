# Pomodoro Tracker
This app is inspired by the [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique), a time management method used by many to increase productive study time.

Users can utilize the timer provided to go through the Pomodoro cycle, and each time a Pomodoro is complete, the state managed 'Counter' is updated. Users can create an account and save the progress for each day they log onto the app. The progress is logged to a tracker which outputs the date, the number of Pomodoro's completed, and the amount of study hours that equates to. 

A live version of this app can be seen here: https://fn-pomodoro-tracker.web.app/

## How it was built
### Frontend
- React (hooks, router)
- Redux

The frontend was deployed via Firebase.

### Backend
- Django
- Django Rest Framework

The api from which the frontend consumes was built using Django Rest Framework.

The backend was deployed via Heroku.
