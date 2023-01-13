require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index.js');
const {connect} = require('mongoose');
const errorMiddleware = require('./middlewares/error-middleware.js');


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(({
    origin: process.env.CLIENT_URL,
    credentials: true
})))
app.use('/api', router);
app.use(errorMiddleware);


const start = async () => {
    try {

        await connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server has been started on ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()
