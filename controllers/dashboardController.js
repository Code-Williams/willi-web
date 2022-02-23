const Bot = require("../models/Bots")

const get = async (req, res) => {
    const userBots = await Bot.findAll({
        where : {
            owner : req.user.username
        }
    })

    console.log("userBots", userBots)

    res.render("dashboard", {
        user : req.user,
        userBots,
        flash : req.flash()
    })
}

module.exports = {
    get
}