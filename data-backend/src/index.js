const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const routes = require('./routes');

mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(console.log("Database connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/', routes);

app.listen(PORT, ()=> console.log(`Running on Port ${ PORT }`));
