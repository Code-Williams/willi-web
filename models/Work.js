const { DataTypes } = require("sequelize")
const  db = require("../configs/db")

const Work = db.define("works", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    name : {
        type : DataTypes.STRING,
    },

    description : {
        type : DataTypes.STRING,
    },

    answer : {
        type : DataTypes.STRING,
    },

    correct : {
        type : DataTypes.STRING,
    },

    point : {
        type : DataTypes.STRING,
    },

    userId : {
        type : DataTypes.STRING,
    }
}, {
    timestamps : false
})

module.exports = Work;