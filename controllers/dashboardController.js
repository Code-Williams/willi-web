/* 
    That's main side of website
    Users have many bots not just one so we have a dashboard and show all bots to user and user can manage it, add new bot, delete bot, edit bot
    In the every bot's side we show bot's name, picture, bills (if bot have), and blocked (if bot have)
*/

const Bot = require("../models/Bots")

const get = async (req, res) => {
    const userBots = await Bot.findAll({
        where : {
            owner : req.user.username
        }
    })

    res.render("dashboard", {
        user : req.user,
        userBots,
        flash : req.flash()
    })
}

module.exports = {
    get
}