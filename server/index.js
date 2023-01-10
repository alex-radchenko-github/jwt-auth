require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {MongoClient, ServerApiVersion} = require('mongodb');
const router = require('./router/index.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('/api', router);


const start = async () => {
    try {
        const client = new MongoClient(process.env.DB_URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        await client.connect();

        app.listen(process.env.PORT, () => {
            console.log(`Server has been started on ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start()
