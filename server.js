// To get a very simple express server up and Running
const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect DataBase
connectDB();

app.get('/', (req, res)=> res.send('API running'));

//Define Routes
app.use('/api/users', require('./routes/api/users')); // /api/user pertains or connects to the slash in the router.get('/'...) in the users.js file. In case we need api/users/register we just add /register in router.get
app.use('/api/auth',  require('./routes/api/auth'));
app.use('/api/profile',  require('./routes/api/profile'));
app.use('/api/posts',  require('./routes/api/posts'));

const PORT = process.env.PORT  || 5000;   // Looks for an environment variable called PORT when we deploy it to Heroku
                                          //  Locally run on PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));  // To listen to the port

