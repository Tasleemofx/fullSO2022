const express = require('express');
const app= express();
app.use(express.json());
const morgan = require('morgan');
app.use(morgan('tiny'));
const appfile = require('./appfile')
app.use(appfile)
const cors = require('cors')
app.use(cors())


const PORT = 3001
app.listen(PORT)
console.log(`Server started at port ${PORT}`)
