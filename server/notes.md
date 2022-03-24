Steps:

1. Run `npm start` in your terminal inside the server folder. This will seed the initial data for each entity into the tables, and start the express server running on port 3000.

2. Type http://localhost:3000/exercises into the browser to view the exercises.




To clear the database in psql:

psql -U labber
password: labber
DROP DATABASE tostrong; (should return => DROP DATABASE)
CREATE DATABASE tostrong; (should return => CREATE DATABASE))
\c tostrong (to verify it was created)
\q
npm start

