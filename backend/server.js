const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const WorkoutsRoutes = require('./routes/workoutsRoutes')
const connection = require('./db')

connection();

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.get('/healthcheck',(req,res) => {
	res.status(200).send('Healthy!') } ) 

app.get('/ready',(req,res) => {
        res.status(200).send('Ready!') } ) 

app.use('/hello',WorkoutsRoutes)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Connected and Listening to requests made on ${port}...`));
