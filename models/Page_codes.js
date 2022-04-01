const {DataTypes} = require("sequelize")
const db = require("../configs/db")

const page_codes = db.define("page_codes", {
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

    admin : {
        type : DataTypes.TEXT
    },

    mode : {
        type : DataTypes.TEXT
    },

    used : {
        type : DataTypes.BOOLEAN
    },

    usable_times : {
        type : DataTypes.NUMBER
    }
}, {
    timestamps : false
})

module.exports = page_codes