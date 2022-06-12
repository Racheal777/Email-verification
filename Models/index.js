//importing modules

const {Sequelize, DataTypes} = require('sequelize')

const dotenv = require('dotenv').config()


//database connection
  const sequelize = new Sequelize(`postgres://postgres:${process.env.Password}@localhost:5433/testing`, {dialect: "posgres"})

  //checking if connection is done

     sequelize.authenticate().then(() => {
         console.log(`Database connected to testing `)
     }).catch((err) => {
         console.log(err)
     })
    
     const db = {}

     db.Sequelize = Sequelize
     db.sequelize = sequelize

//connecting to model
db.users = require('./userModel') (sequelize, DataTypes)
db.tokens = require('./token') (sequelize, DataTypes)


//relationship of users and token which is one to one relationship
//every user would have one token
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

