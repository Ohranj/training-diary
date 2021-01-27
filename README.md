# Training Diary

[The project is hosted via Heroku and can be found here](https://training-diary.herokuapp.com/)

### Features

-   Input training data for eah day of the year
-   Monitor the progress via graph
-   Edit and delete workout exercises or a days entry

#### Login

Feel free to create a new account via google or local login. Or you can use the demo account:

```
Username:- demo@demo.com
Password:- demo123
```

### Technology used

The project was built using the MERN stack, in addition

-   It uses passport.js for authentication
-   [React-vis for the chart](https://uber.github.io/react-vis/)
-   [React-calendar for the... calendar](https://www.npmjs.com/package/react-calendar)

### Images

![Home screen](https://i.imgur.com/3cVWiyF.png)

#### Still to complete

-   Wire up graphing body composition
-   Correct serving static file path to work with Heroku - Once the dyno sleeps, the login fails to work on next usage. Email registers as already existing and can register a new email and login but their appears a problem with bcryptjs in hashing and comparing the passwords
