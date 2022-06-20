//importing modules
const {Sequelize, DataTypes} = require('sequelize')
const dotenv = require('dotenv').config()


//database connection
//database name is testing
  const sequelize = new Sequelize(`postgres://postgres:${process.env.Password}@localhost:5433/testing`)

  //checking if connection is done with the authenticate method in sequelize
     sequelize.authenticate().then(() => {
         console.log(`Database connected to testing `)
     }).catch((err) => {
         console.log(err)
     })
    
     //creating a global variable and assigning an empty variable to be used later
     const db = {}

     db.Sequelize = Sequelize
     db.sequelize = sequelize

//connecting to models which are the users and the tokens schema
db.users = require('./userModel') (sequelize, DataTypes)
db.tokens = require('./token') (sequelize, DataTypes)


//relationship of users and token which is one to one relationship
//every user would have one token.
//users.hasOne means every user will have just one token
//tokens.belongsTo means every token will belong to the users table
// and not any other table
db.users.hasOne(db.tokens, {
  as: 'token',
  foreignKey:"userId"
})

db.tokens.belongsTo(db.users, {
  as: 'user',
  foreignKey:"userId"
})


//exporting the module
module.exports = db

