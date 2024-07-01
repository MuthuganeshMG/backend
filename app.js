const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config ({path:path.join(__dirname, 'config','config.env')});


const productRoutes = require('./routes/productRoutes');
const connectDatabase = require('./config/connectDatabase');

app.use('/',productRoutes)

connectDatabase();



 
app.listen(process.env.Port, () => {
    console.log(`app is listening to port ${process.env.Port} in ${process.env.Node_Env}`);
})