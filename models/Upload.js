const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Uploads = db.define("uploads", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING,
    },

    file : {
        type : DataTypes.STRING,
    },

    description :{
        type : DataTypes.STRING,
    },

    user : {
        type : DataTypes.STRING
    }
}, {
    timestamps : false
})

module.exports = Uploads