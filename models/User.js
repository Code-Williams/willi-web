const { DataTypes } = require("sequelize")
const bcrypt = require("bcrypt")
const  db = require("../configs/db")

const User = db.define("users", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    username : {
        type : DataTypes.STRING,
    },

    password : {
        type : DataTypes.STRING,
    },

    number : {
        type : DataTypes.STRING,
        defaultValue : null
    },

    userRank : {
        type : DataTypes.STRING,
        defaultValue : "user"
    },

    debt : {
        type : DataTypes.NUMBER,
        defaultValue : 0
    }
}, {
    timestamps : false
})

User.validPassword = function(user, password){
    return bcrypt.compareSync(password, user.password)
}

User.encryptPassword = async(password) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = await bcrypt.hashSync(password, salt)
    return hash;
}

module.exports = User;