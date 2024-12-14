const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class Tasks extends Model{}

Tasks.init({
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    sequelize,
    timestamps: true,
    modelName: 'Tasks'
});

module.exports = Tasks;