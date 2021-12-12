const express = require('express')
const app = express();
const dotenv = require("dotenv")
dotenv.config({path: './config.env'})
require('./db/conn') 
const port = process.env.PORT || 5000

const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())
app.use(require('./routes/Routes'))


app.listen(port , (req,res) => {
    console.log(`Express Server Running at ${port}`)
})