const {DataTypes} = require("sequelize")
const db = require("../configs/db")

const Codes_logs = db.define("codes_logs", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },

    code : {
        type : DataTypes.TEXT
    },

    date : {
        type : DataTypes.TIME
    },

    ip : {
        type : DataTypes.TEXT
    },

    url : {
        type : DataTypes.TEXT
    },

    user : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Codes_logs