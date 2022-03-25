Steps:

<<<<<<< HEAD
1. Run `npm start` in your terminal inside the server folder. This will seed the initial data for each entity into the tables, and start the express server running on port 3000.
=======
1. Run `npm run seeding` in your terminal inside the server folder. This will seed the initial data for each entity into the tables, after deleting any pre-existing data.

2. Run `npm start` in your terminal inside the server folder. This will start the express server running on port 3000.
>>>>>>> main

2. Type http://localhost:3000/exercises into the browser to view the exercises.




<<<<<<< HEAD
=======








>>>>>>> main
To clear the database in psql:

psql -U labber
password: labber
DROP DATABASE tostrong; (should return => DROP DATABASE)
CREATE DATABASE tostrong; (should return => CREATE DATABASE))
\c tostrong (to verify it was created)
\q
npm start

<<<<<<< HEAD
=======








vagrant>server>   npm run seeding
  // this seeds the data

vagrant>server> npm start
  // this will start the express server on port 3000

// what am I missing? 
// schema file - don't need that for now







Old:

To run a migration: (run this command in server folder)
node --require ts-node/register ./node_modules/typeorm/cli.js migration:run --dataSource ./src/data-source.ts

To revert a migration:
node --require ts-node/register ./node_modules/typeorm/cli.js migration:revert --dataSource ./src/data-source.ts
>>>>>>> main
