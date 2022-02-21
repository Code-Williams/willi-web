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
        type : DataTypes.STRING
    },

    owner : {
        type : DataTypes.STRING
    },

    lastRun : {
        type : DataTypes.DATE,
        defaultValue : 0
    },

    upTime : {
        type : DataTypes.DATE,
        defaultValue : 0
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