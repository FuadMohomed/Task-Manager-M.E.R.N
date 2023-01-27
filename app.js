const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connectDB = require('./DB/connect')
require('dotenv').config() 
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const port = process.env.PORT || 3000





//middleware
app.use(express.static('./public'))
app.use(express.json())




// routes

 app.use('/api/v1/tasks', tasks)

 app.use(notFound)

 app.use(errorHandlerMiddleware)

const start = async () => {
    try {
      await connectDB(process.env.CONNECTION)  
app.listen(port, console.log(`server is listening to port ${port} ...`))
    } catch (error) {
    console.log(error)    
    }
}

start()

