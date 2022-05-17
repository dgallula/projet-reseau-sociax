const express = require('express')
require('dotenv').config({path:'./config/.env'})

const app= express();

app.listen(5000 , ()=> {
    console.log(`server is listennig on port ${process.env.PORT}`)
})

