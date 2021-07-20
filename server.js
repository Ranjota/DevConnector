// To get a very simple express server up and Running
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect DataBase
connectDB();

app.get('/', (req, res)=> res.send('API running'));

const PORT = process.env.PORT  || 5000;   // Looks for an environment variable called PORT when we deploy it to Heroku
                                          //  Locally run on PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  // To listen to the port

