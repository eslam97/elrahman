//start core NodeJs Modules
const path = require("path");
const bodyParser = require('body-parser');
const compression = require("compression");
//end core NodeJs Modules

//start packages
const express = require('express');
//end packages

//start DataBase Connection
const connectDB = require('./config/db')
//end DataBase Connection

//start Express
const app = express();
//end Express

//start Define Routes
/*const authRoutes = require('./lib/routes/auth/auth')
const userRoutes = require('./lib/routes/user/user')
const playerRoutes = require('./lib/routes/user/player')
const ownerRoutes = require('./lib/routes/user/owner')
const playgrundRoutes = require('./lib/routes/playground/playground')
const stadiumRoutes = require('./lib/routes/stadiums/stadium')*/
const sandRoutes = require('./lib/routes/sand')
const slipRoutes = require('./lib/routes/slip')
const coalRoutes = require('./lib/routes/coal')

//end Define Routes

//start BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//end BodyParser

//start Pars the Image Upload
app.use(express.static(path.join(__dirname, 'public')));
app.use('/products_images',express.static('products_images')); // parses the /products_images to read image files
//end Pars the Image Upload

app.use(compression());

//start CORS origin Middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET , POST , PUT , PATCH , DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next()
})
//start CORS origin Middleware


//start  Main Routes
app.use('/api/sand', sandRoutes);
app.use('/api/slip', slipRoutes);
app.use('/api/coal', coalRoutes);

/*app.use('/api/user', userRoutes);
app.use('/api/player', playerRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/playground', playgrundRoutes);
app.use('/api/stadium', stadiumRoutes)*/
//end  Main Routes


app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`App IS Running In Port ${PORT}`)
})
connectDB()
