Steps:

1. Run `npm run seeding` in your terminal inside the server folder. This will seed the initial data for each entity into the tables, after deleting any pre-existing data.

2. Run `npm start` in your terminal inside the server folder. This will start the express server running on port 3000.

3. Type http://localhost:3000/exercises into the browser to view the exercises.








To clear the database in psql:

psql -U labber
password: labber
DROP DATABASE tostrong; (should return => DROP DATABASE)
CREATE DATABASE tostrong; (should return => CREATE DATABASE))
\c tostrong (to verify it was created)
\q
npm start







vagrant>server>   npm run seeding
  // this seeds the data

vagrant>server> npm start
  // this will start the express server on port 3000






