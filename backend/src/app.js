require('dotenv').config();

const express  = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRoutes = require('./routes/auth.route');
const foodRoutes = require('./routes/food.route')
const partner = require('./routes/partner.route')

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173","https://bite-craft.netlify.app"],
    credentials: true
}));

app.get('/',(req,res)=>{
    res.send('Hello')
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/partner', partner);

module.exports = app;