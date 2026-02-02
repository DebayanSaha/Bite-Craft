require('dotenv').config();

const express  = require('express');
const cookie = require('cookie-parser');
const cookieParser = require('cookie-parser');
const auth = require('./routes/auth.route');

const app = express();

app.use(cookieParser())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello')
});

app.use('/api/auth',auth);

module.exports = app;