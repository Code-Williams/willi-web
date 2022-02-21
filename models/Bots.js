const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Bots = db.define("bots", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING
    },

    picture : {
        type : DataTypes.STRING,
        defaultValue : ""
    },

    owner : {
        type : DataTypes.STRING
    },

    lastRun : {
        type : DataTypes.DATE,
        defaultValue : new Date()
    },

    upTime : {
        type : DataTypes.DATE,
        defaultValue : new Date()
    },

    bills : {
        type : DataTypes.NUMBER,
        defaultValue : 0
    },

    blocked : {
        type : DataTypes.NUMBER,
        defaultValue : 0
    },

    botId : {
        type : DataTypes.STRING
    }
},{
    timestamps : false
})

module.exports = Bots