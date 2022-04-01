# .toStrong( )

> A method that takes in an object and returns a stronger version of the object.

.toStrong() is a finals project for the Lighthouse Labs Web Development bootcamp, a collaboration between [Lee Pavelich](https://github.com/leepavelich/), [Chris Hatcher](https://github.com/chatcher20), and [John Chia](https://github.com/fluffyjohnny). The goal was in two weeks to develop from the ground up a "minimum viable demo" of an app of our own design.

We came up with a workout planning and tracking app, where the user selects from a list of workout programs, selects their beginning weights, and then for each workout in the program toggles whether they completed or did not complete each exercise. The business logic then decides for each program individually what the subsequent weights to select are for all the subsequent workouts.

## Screenshots

## TODOs

- Implement the logic for more programs than just the "Basic LP".
- Add more exercises to the library.
- Implement the Friends and Badges feature (current app has placeholders for the demo).
- Fix user authentication; right now you need to do a GET request to the `/auth/1` route of the server to generate a cookie to correctly do what's in the demo.
- Refactor the database to be in first normal form.

## Using the app

1. In PostgreSQL, `create database tostrong;`
2. Run `npm i` in both `/server` and `/client` to install the relevant packages
3. Run `npm run seeding` in `/server` to seed the database
4. Run `npm start` in both `/server` and `/client` and React should automatically open a browser tab with the demo

## Tech Stack

### Front-end

- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://axios-http.com/docs/intro)
- [Patternfly](https://www.patternfly.org/v4/) - For the graphs
- [Bulma](https://bulma.io/)

### Back-end

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
