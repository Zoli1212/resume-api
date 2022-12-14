const express = require('express')
const colors = require('colors');
const path = require('path')

const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
require('dotenv').config()

const app = express()
const cors = require('cors');
const connectDB = require('./config/mongodbConnection');

const PORT = process.env.PORT || 5000



connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.get('/', (req, res) => {

    res.send({ message: 'OK'})
  
  })




app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
