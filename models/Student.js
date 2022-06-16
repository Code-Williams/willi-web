const { DataTypes } = require("sequelize")
const  db = require("../configs/db")

const Student = db.define("students", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    userId : {
        type : DataTypes.STRING
    },

    language : {
        type : DataTypes.STRING
    },

    startedTime : {
        type : DataTypes.STRING       
    },

    doneClasses : {
        type : DataTypes.STRING       
    },

    doneWorks : {
        type : DataTypes.STRING       
    },

    cancelledWorks : {
        type : DataTypes.STRING       
    },

    isNextClassCancelled : {
        type : DataTypes.STRING       
    },

    points : {
        type : DataTypes.STRING       
    },

    time : {
        type : DataTypes.STRING
    }

}, {
    timestamps : false
})

module.exports = Student;