const { Sequelize } = require('sequelize');
const {sequelizeConnexion} = require('../dbConfig/dbConnexion');

const userModel = (sequelize)=> {
    const { DataTypes } = Sequelize;
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

module.exports = userModel;
