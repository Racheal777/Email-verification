
//user model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define( "user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, //checks for email format
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //isVerified is set to default false once a user signs up
        //this will change later after email has been verified
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },

    }, {timestamps: true}, )

    return User
}