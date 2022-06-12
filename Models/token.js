
//Token model
//using references to establish the model that the token is connected to
module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define( "token", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onUpdate: "cascade",
            onDelete: "cascade",
            references: { model: "users", key: "id" }
          },

        token: {
            type: DataTypes.STRING,
            
        },

        

    }, {timestamps: true}, )

    return Token
}