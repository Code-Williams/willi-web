const {DataTypes} = require("sequelize")
const db = require("../configs/db")

const project_passwords = db.define("project_passwords", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    project_name : {
        type : DataTypes.TEXT,
    },

    password : {
        type : DataTypes.TEXT
    },

    dataBasePassword : {
        type : DataTypes.TEXT
    },

    isDeactive : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = project_passwords