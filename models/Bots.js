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

    running : {
        type : DataTypes.BOOLEAN
    },

    lastRun : {
        type : DataTypes.DATE
    },

    upTime : {
        type : DataTypes.DATE
    },

    status : {
        type : DataTypes.STRING
    },

    statusType : {
        type : DataTypes.STRING
    }
},{
    timestamps : false
})

module.exports = Bots