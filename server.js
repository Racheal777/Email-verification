
//importing modules
const express = require('express')

const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
 const db = require('./Models')
 const userRoutes = require ('./Routes/userRoutes')
 

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(helmet())



//synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
})

//routes for the user API
app.use('/api/users', userRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))



