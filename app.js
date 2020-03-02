"use strict"
if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const router = require('./routes/index')


app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => console.log('Listening on port ', process.env.PORT))
