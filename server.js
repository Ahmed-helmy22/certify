
import connection from './database/dbConnection.js';
import dotenv from'dotenv';

//we put it here to handle all code , before the app code
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  process.exit(1);
});

import app from './app.js';

dotenv.config()
connection()
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`hi from the server at port${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    console.log('exception error ....****** shutting down');
    process.exit(1);
  });
});
